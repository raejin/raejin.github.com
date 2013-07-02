---
layout: post
title: "EC2 adventurous"
date: 2013-07-01 21:38
comments: true
categories:
- geek
- tools
- git

---

It's already July! Omg time flies when it comes to summer time.

Update: recently I've been very involved in my internship project. I can't expose the detail but basically I am working with AngularJS extensively. Though I am still very far from an experienced AngularJS developer, I must say IT IS A BEAUTIFUL WEB FRONT-END FRAMEWORK.

Currently I am working on a project called "yolyo" (temporarily name), which is based on an open source forum Discourse. Since Discourse requires quite a bit of computing resources, I decided to use Amazon EC2 as our starting point. As I realized how important it is to configure a virtual instance, I would like to dedicate this post to document all the works I've put into to make things work smoothly.

First of all, I would like to thank BitNami providing one-click Discourse installation to deploy on EC2. Otherwise, I would've still struggled with all the nitty gritty deployment detail.

# How to deploy/update by Git
This has confused me for a long while. I had been used to deploy virtually everything by drag and drop for so long. Though I've learnt how to use Git to do versioning, I do not know how to setup the cloud server so that I can simply do `git push origin master` to deploy the changes.

Although I finally figured out how to use Git to deploy remote instance, I realized this workflow doesn't work really well with Discourse. Discourse itself already contains a git repo, so I would need to push to a remote repo and deploy the instance by pulling from this remote repo. (If anyone knows a better deployment strategy, please let me know)

## On remote machine
create a git repo as a transition to deploy to a designated directory

1. Copy local machine public key to the remote server (ec2 instance)
``` bash
$ cat ~/.ssh/id_rsa.pub | ssh -i ~/.ssh/amazonKey.pem ubuntu@example.com "cat >> ~/.ssh/authorized_keys"
```
2. Create and initialize a new git repo
``` bash
$ mkdir website.git && cd website.git
$ git init --bare
```
3. Configure the post-receive hook in order to put the files into desired directory
``` bash
$ cat > hooks/post-receive
#!/bin/sh
GIT_WORK_TREE=/home/ubuntu/website
export GIT_WORK_TREE
git checkout -f
```
4. Make the post-receive file executable

``` bash
$ chmod +x hooks/post-receive
```

5. Configure `hooks/post-update` file
``` bash
#!/bin/sh
#
# This hook does two things:
#
#  1. update the "info" files that allow the list of references to be
#     queries over dumb transports such as http
#
#  2. if this repository looks like it is a non-bare repository, and
#     the checked-out branch is pushed to, then update the working copy.
#     This makes "push" function somewhat similarly to darcs and bzr.
#
# To enable this hook, make this file executable by "chmod +x post-update".

git update-server-info

is_bare=$(git config --get --bool core.bare)

if [ -z "$is_bare" ]
then
        # for compatibility's sake, guess
        git_dir_full=$(cd $GIT_DIR; pwd)
        case $git_dir_full in */.git) is_bare=false;; *) is_bare=true;; esac
fi

update_wc() {
        ref=$1
        echo "Push to checked out branch $ref" >&2
        if [ ! -f $GIT_DIR/logs/HEAD ]
        then
                echo "E:push to non-bare repository requires a HEAD reflog" >&2
                exit 1
        fi
        if (cd $GIT_WORK_TREE; git diff-files -q --exit-code >/dev/null)
        then
                wc_dirty=0
        else
                echo "W:unstaged changes found in working copy" >&2
                wc_dirty=1
                desc="working copy"
        fi
        if git diff-index --cached HEAD@{1} >/dev/null
        then
                index_dirty=0
        else
                echo "W:uncommitted, staged changes found" >&2
                index_dirty=1
                if [ -n "$desc" ]
                then
                        desc="$desc and index"
                else
                        desc="index"
                fi
        fi
        if [ "$wc_dirty" -ne 0 -o "$index_dirty" -ne 0 ]
        then
```
6. Make `hooks/post-update` executible
``` bash
$ chmod +x post-update
```

Reference

* [Setup git deploy for AWS ec2 Ubuntu instance](http://www.jeffhoefs.com/2012/09/setup-git-deploy-for-aws-ec2-ubuntu-instance/)
* [StackOverflow - git-upload-pack: command not found, how to fix this correctly](http://stackoverflow.com/questions/225291/git-upload-pack-command-not-found-how-to-fix-this-correctly)
* [Uploading Personal ssh Keys to Amazon EC2 ](http://alestic.com/2010/10/ec2-ssh-keys)
* [Setting up Repo on Amazon EC2 for Git Push ](http://blog.gbinghan.com/2012/05/setting-up-repo-on-amazon-ec2-for-git.html)


