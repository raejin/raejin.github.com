---
layout: post
title: "EC2 instance configuration note"
date: 2013-07-29 20:25
comments: true
categories:
- geek
---

This post is intended to document the basic configuration I do for a typical EC2 Ubuntu instance, just want to make my life easier without googling the same thing all over again.

## Setting up zsh

[source](http://paikialog.wordpress.com/2012/02/29/install-oh-my-zsh-on-ubuntu-ec2/)

- `sudo apt-get install zsh`
- `curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sudo sh`
- `sudo su`
- `chsh -s /bin/zsh ubuntu`

