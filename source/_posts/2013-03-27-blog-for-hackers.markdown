---
layout: post
title: "Blog for hackers?"
date: 2013-03-27 18:43
comments: true
categories:
- hack
---
Why am I switching the blogging platform? It sounds like an annual routine that has been done over and over again in the blogging business. I remeber the first time I was introduced with Wordpress, awesome and highly customizable. Although it was a hassle to get things work with Wordpress, the urge to personalize my blog made me step out of my comfort zone.

This time is no different than the first time. The reason why I am switching is actually very silly. I've seen so many cool developers using Octopress to blog, and they made it look really awesome due to the fact that Octopress is easy to hack. Octopress claimed it inteded to be used by hackers only, since everything needs to be done in terminal with no exception. Its nature will potentially scare off regular users, so this makes using Octopress even cooler. Yeah, that's why I am switching, because I want to pretend that I am a cool hacker, which I am really not.

Enough for my boring mumbling, let me tell you what I did in the past few hours.

- Replace default code syntax highlighter with my favorite [Tomorrow Night theme](https://github.com/chriskempson/tomorrow-theme)
- Clean up the default template
- Learn the damn markdown
- Host on GitHub page
- Discover [Hexo](https://github.com/tommy351/hexo), after I spent hours figuring out how to get things work in Octopress
- Think about responsive design with regard to the blog

This experience opens a door for me. Though I know getting this done is trivial, the process of learning will always lead to different chapters.

For those that would like to know `the syntax highlighter theme`, here is the demo. Notice that it does not entirely follow the syntax theming scheme in Tomorrow Night since the setup is a bit different. Also I haven't tested out all the coloring scheme yet, this is still under-development. However, feel free to [use it and modify the .css file](https://gist.github.com/raejin/5267644) to make it better.

```javascript demo.js
var aTags = document.getElementsByTagName('a');
for(var i = 0; i < aTags.length; i++) {
    aTags[i].onclick(function() {
        var closureVar = i;
        console.log(closureVar);
    });
}
```