---
layout: page
title: December Adventure 2024
permalink: /decadv-2024
---

Hi! I'm participating in [December Adventure][decadv] this year! In contrast
to a competitive advent calendar like [Advent of Code][aoc], it is a low-stakes
programming and journaling calendar taking place throughout december. I've
participated in AoC for the past few years, for example solving 2023's puzzle 
set [using a different programming language each day][my aoc2023]. But I feel
like now is the ideal time for me to take it easier and not to fuss about
completion times or implementating algorithms. I welcome the change of pace.

## Day 0

Today, I set up this page! I will be updating this page every day as my
adventure log. I have some plans for the projects I'll be working on -- in
particular I have ideas and a half-baked playground open on a different VSCode
window. More on that tomorrow :)


## Day 1

By the way, these updates will be in chronological order. Even though it's
better for catching updates it seems easier to read through as a whole this way.

I've had this idea floating in my head for a little bit now: 
[the Library of Babel in its modern form][babel website] is still ultimately
a digital recreation of a physical library. It maintains in spirit the feel of
interacting with a library, through browsing and random stumbling, though
it does add a string search as a form of "oracle" emphasizing the inscrutability
of the library. How could the philosophical concept of the Library be 
reimagined in the era of the internet? 

One particular thought that has bubbled in my mind is that of 88x31 badges.
Seemingly popularized in geocities, they are a form of building interconnected
social networks across websites. The badges act as a symbol of these digital
relationships and the graph that they encode, which I think represents one goal
of the internet (even if idealistic).

Fascinatingly, people have attempted to scrape and curate collections of these 
88x31 badges forever, through [a graph visualizations][88x31 grapher] or 
[plain old long lists][88x31 lister]. I say attempted because such a task is
inherently impossible (that is, unless the internet were to become controlled
by a couple of monopolistic platforms... yes this site is sadly hosted through
GitHub). The internet is just too large and too dynamic to store as a list.

But what if you could? What if you did have an ultimate repository of all our
relationships on the internet? *This* is indeed where I find the metaphor of
the Library has the most potential. And that is what I have been working on
for the past couple of weeks, including today. I have a skeleton webpage
set up to display 1000 different random 88x31s generated on a server. I'm
toying around with minimal features currently: old-web aesthetic without old-web
inaccessibility, relatively sane dynamic scrolling of appallingly long lists, 
the specifics of the randomization algorithm. I have lots of things to work on
this month and I am feeling motivated! Even though today I only tweaked some CSS
(hehe, repeating JPEG backgrounds) I won't say that I accomplished little (that
would be false).

## Day 2

Who says the updates have to be paragraphs long? Today, I just read about the 
JavaScript events and methods I could use for dynamically loading a list of
2^65472 images while maintaining an accurate scrollbar. Fun fact! The
otherwise-reasonable strategy of "compute a fixed full height for the body
and populate the page as it becomes visible" is not feasible due to the simple
fact that the maximum value you can plug into a `height` CSS property is on
the order of 2^24 pixels. (Coincidence? That's very close to the 
[safe integer limit on 32-bit floats][f32 safe ints]. Not going to dig out the 
specification for this one.) It's so astronomically far off from fitting the 
space for 2^6472 images it's not even worth calculating. I'll likely have to 
resort to a simulacrum using a reasonably-tall document (so that regular 
scrolling won't move the bar) and gamedev-esque 
[Viewing-frustum culling][fancy culling].

I would ideally like to have the whole page on a single infinite scroll, like 
all the information in this page is just at your (literal) fingertips. If only 
you could scroll forever and never get fatigued, you could learn all there is 
to know in this world...

[decadv]: https://eli.li/december-adventure
[aoc]: https://adventofcode.com/
[my aoc2023]: https://github.com/RocketRace/aoc2023

[babel website]: https://libraryofbabel.info
[88x31 grapher]: https://eightyeightthirty.one/
[88x31 lister]: https://88x31db.com/

[f32 safe ints]: https://en.wikipedia.org/wiki/Single-precision_floating-point_format#Precision_limitations_on_integer_values
[fancy culling]: https://en.wikipedia.org/wiki/Hidden-surface_determination#Viewing-frustum_culling

