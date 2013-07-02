---
layout: post
title: "How Long Does It Take a Noob to Master UNIX Commands?"
date: 2013-04-25 21:12
comments: true
categories:
- geek
---

This semester I am taking a self-paced UNIX class, which is a lot more fun compared to the other theoretical-ish computer courses. Sometimes I really lack motivation to learn effective UNIX commands to make my life easier. And I don’t think I’m alone, but in order to be a legit software enginner I must at least not suck at the basics.

Last week I ran to an UNIX tutor asking some dumb questions from the text, and I finally realized that piping is not restricted to a single input command! I wonder why it took me so long to notice this trivial fact, why!!!!????

Here it goes, I need to remind myself how dumb I was/am and hopefully I stay motivated to be an effective engineer.

``` bash
$ cat someFile | comm -12 - anotherFile
```

It’s the hyphen that makes this works beautifully! Who would have thought of using hyphen? Who?