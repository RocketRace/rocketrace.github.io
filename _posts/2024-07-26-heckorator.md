---
layout: post
title: Heckorator, AKA why you should always check up on old unfinished projects
slug: heckorator
categories: post
---

I recently published [heckorator][gh] on [pypi][pypi]. It's a cursed little project to make Python decorators more readable. But I actually started (and abandoned) the project 4 years ago!

<!--more-->

## What is heckorator?

For a full introduction (which I recommend you read, as I think it's entertaining), see the [project's README file][gh]. But as a brief hook, compare the following two blocks of code:

```py
x = [Button(position=i) for i in range(10)]

@x[0].on
def handle_click():
    print("First button clicked!")
```

(you may have to scroll for this one)

```py
from heckorator import _

x = [Button(position=i) for i in range(10)]

@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_
@_._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._@_
@_._._._._._._._._@_@_@_._._._._._._._._._@_@_@_._._._._._._._._._._._._._._._._._._._._@_
@_._._._._._._._._@_._._._._._@_@_@_._._._._._@_._._._._._._._._._._._._._._._._._._._._@_
@_._._._._._._._._@_._._._._@_._._._@_._._._._@_._._._._._._._._._._._._._._._._._._._._@_
@_._@_._._._@_._._@_._._._._@_._._._@_._._._._@_._._._._._._._._._@_@_@_._._@_@_@_@_._._@_
@_._._@_._@_._._._@_._._._._@_._@_._@_._._._._@_._._._._._._._._@_._._._@_._@_._._._@_._@_
@_._._._@_._._._._@_._._._._@_._@_._@_._._._._@_._._._._._._._._@_._._._@_._@_._._._@_._@_
@_._._._@_._._._._@_._._._._@_._._._@_._._._._@_._._._._._._._._@_._._._@_._@_._._._@_._@_
@_._._@_._@_._._._@_._._._._@_._._._@_._._._._@_._._._@_@_._._._@_._._._@_._@_._._._@_._@_
@_._@_._._._@_._._@_._._._._._@_@_@_._._._._._@_._._._@_@_._._._._@_@_@_._._@_._._._@_._@_
@_._._._._._._._._@_._._._._._._._._._._._._._@_._._._._._._._._._._._._._._._._._._._._@_
@_._._._._._._._._@_@_@_._._._._._._._._._@_@_@_._._._._._._._._._._._._._._._._._._._._@_
@_._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._@_
@_._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._@_
@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_
def handle_click():
    print("First button clicked!")
```

It is obvious that the latter version is much more readable!

## This was initially made 4 years ago?

It's true! I had the initial idea for this library back in 2020, and thought it was cool.
I got stuck with a design decision, however - at the time I wanted the decorators to be plain
and without a border, but decorator syntax requires at least one column of `@`s at the start of 
each line. I didn't exactly want there to be just a random column of pixels there (or for users
to be restricted to using characters whose bitmap has its left column filled). So I gave up on
the idea and moved on to other silly things.

When I found this folder on my laptop yesterday, I was reminded of how cool and silly I thought
the idea was. It felt like a shame for it to never see the light of day, so I immediately fixed
the design flaws by adding a border 😄 A little break helps a lot with problem-solving!

I guess I don't have much else to add there. If you have old projects that you never got around
to finishing, go take a look! You might have forgotten about them, but there could be uncut gems
lying around!

That's all! Bye bye, have fun with your projects! 😄

[pypi]: https://pypi.org/project/heckorator
[gh]: https://github.com/RocketRace/heckorator
