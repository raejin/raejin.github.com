---
layout: post
title: "Parameter list or curry style?"
date: 2014-11-23 22:44
comments: true
categories: 
- geek
- scala
---

I've been playing with Scala at work here and there, but never gotten a chance to explore some of its interesting aspects until recently.

I've seen some Scala code that is using implicit variables here and there, noticing there are two ways a function can be declared with parameters.

```scala
def somefunction(a: Int, b: String)(implicit c: String) = { ... }
def somefunction(a: Int, b: String, c: String) = { ... }
```

So when do you use one over the other? What's the advantages of using one or the other? This StackOverflow post [What's the difference between multiple parameters lists and multiple parameters per list in Scala?](http://stackoverflow.com/questions/6803211/whats-the-difference-between-multiple-parameters-lists-and-multiple-parameters) gave me a satisfying answer. I'd like to rephrase it myself here just so I can remember it better. Or else the link would do the job at explaining.

The answer went over couple of programming concept worth mentioning, I will briefly reiterate over the main points in my own words:

 - Partial function
 - [Partially applied function](http://stackoverflow.com/questions/8650549/using-partial-functions-in-scala-how-does-it-work/8650639#8650639)
 - Currying

## Partial function 

A kind of function that is only applicable to certain input values. Partial function can be useful for error detection, and knows how to deal with invalid inputs. The emphasis is that partial function will do something else if an input is not accepted.

## Partially applied function

A function that has been partially applied. Say if a function requires two parameters, we can only apply the first one but leave the second one. Later on we can apply this `partially applied function` with the second argument.

```scala
def dividedBy(a: Int, b: Int) = { a/b }
val tenDividedBy = dividedBy(10, _: Int)
tenDividedBy(10) // should be 1
```

## Currying

It could easily be confused with partially applied function. I'd like to think of currying as a subset of partially applied function. We decompose a function with multiple parameters into a chain of functions taking one argument at a time.

# So, what's the difference?

 - Passing a block in a function can be syntactically concise

```scala
def eachOfMap(m: Map[String, Int])(fn: ((String, Int)) => Unit) = {
    m.foreach(fn)
}
val aMap = Map("a" -> 1, "b" -> 2, "c" -> 3)
eachOfMap(aMap) {
    case (str: String, in: Int) =>
        println(s"$str, $in")
}
// a, 1
// b, 2
// c, 3
```


 - Referring to an argument from previous parameters

```scala
def getKeysFirst(m: Map[String, Int])(k: Iterable[String] = m.keys) = {
    k.foreach(println(_))
}
```


 - Implicit variable cannot co-exist with regular parameters unless with multiple parameter lists
 
