---
layout: post
title: "JavaScript gotchas"
date: 2013-10-01 12:43
comments: true
categories: 
- geek
- JavaScript


---


## How to use JavaScript declare class

1. Using a function

```
function Apple(type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function () {
        return this.color;
    };
}
```

 - Instantiate an object

```
var apple = new Apple('macintosh);
apple.color = 'reddish';
```

- Declare instance method

```
Apple.prototype.getInfo = function () {
    return this.color;
};
```

- Singleton - using object literal

```
var apple = {
    type: 'hey',
    color: 'blue',
    getInfo: function () {
        return this.color;
    }
};
```