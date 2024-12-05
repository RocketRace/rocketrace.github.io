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

## December 0

Today, I set up this page! I will be updating this page every day as my
adventure log. I have some plans for the projects I'll be working on -- in
particular I have ideas and a half-baked playground open on a different VSCode
window. More on that tomorrow :)

## December 1

By the way, these updates will be in chronological order. Even though it's
worse for catching updates it seems easier to read through as a whole.

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

## December 2

Who says the updates have to be paragraphs long? Today, I just read about the 
JavaScript events and methods I could use for dynamically loading a list of
2^65472 images while maintaining an accurate scrollbar. Fun fact! The
otherwise-reasonable strategy of "compute a fixed full height for the body
and populate the page as it becomes visible" is not feasible due to the simple
fact that the maximum value you can plug into a `height` CSS property is on
the order of 2^24 pixels on my Firefox. (Coincidence? That's very close to the 
[safe integer limit on 32-bit floats][f32 safe ints]. Not going to dig out the 
specification for this one.) It's so astronomically far off from fitting the 
space for 2^6472 images it's not even worth calculating. I'll likely have to 
resort to a simulacrum using a reasonably-tall document (so that regular 
scrolling won't move the bar) and gamedev-esque 
[viewing-frustum culling][fancy culling].

I would ideally like to have the whole page on a single infinite scroll, like 
all the information in this page is just at your (literal) fingertips. If only 
you could scroll forever and never get fatigued, you could learn all there is 
to know in this world...

## December 3

Slight change of pace! I worked on my portfolio today. Currently, the page is
certifiably empty. I would like the page to contain a reverse chronological
list of my highlighted work. Each entry has a visual element if possible, a
title, date (to the nearest month), description, and outgoing links. While
individual projects distinguish themselves from the others, the overall
experience should be a smooth dive back in time.

So, to start I've been formulating lists of what to put there. I have a lot of
projects stretching back a few years, with various themes and foci. I wonder
what would be the best way to unify all of them? On one hand it feels crass
to assign an "artness" metric to a project, on the other it feels odd to put
conceptual work next to practical work. Maybe a different form of categorizing?

In terms of implementation, I think I will be using Jekyll's 
[include system][jekyll include] to have a folder of portfolio entries that
are compiled into a static page. That way I can store both structured (front
matter YAML) and unstructured (HTML content) information. Though... I could 
also use [data files][jekyll data files] to make *every* entry structured --
if my goal is indeed to have an image, description, and other fields. That
sounds quite reasonable, actually.

I also added some missing links around my site, such as a "home" link in 
[breathing-geometry][breathing-geometry]. That was a fun use of CSS grid.

## December 4

Hmm, using a real scroll whell as a replacement for a fake scroll wheel seems
like an awfully fragile solution. And I don't think it'll be particularly
portable. Perhaps it's best to not try my luck overengineering a small feature
and instead focus on the necessary elements of the experience.

## December 5

Today, as I was exploring dynamically generated 88x31 images, I realized that
the page should load with the first page of content pregenerated. That sent me
down a bit of a rabbithole with JS bundlers and static site generators. In the
end I chose to use Hugo for some of the basic templating. I engulfed myself in
the documentation until I figured out how to a) compile typescript, b) create
elements in a loop, and c) pass configuration to typescript in a way that my
editor didn't complain (the solution was to add a `.d.ts` file and define a
custom `"paths": ...` configuration in my `.tsconfig`!) But in the end I have
a clean setup with templating, local hosting, and static generation! I can
proceed to work more on the actual site code without getting side-tracked.

[decadv]: https://eli.li/december-adventure
[aoc]: https://adventofcode.com/
[my aoc2023]: https://github.com/RocketRace/aoc2023

[babel website]: https://libraryofbabel.info
[88x31 grapher]: https://eightyeightthirty.one/
[88x31 lister]: https://88x31db.com/

[f32 safe ints]: https://en.wikipedia.org/wiki/Single-precision_floating-point_format#Precision_limitations_on_integer_values
[fancy culling]: https://en.wikipedia.org/wiki/Hidden-surface_determination#Viewing-frustum_culling

[jekyll include]: https://jekyllrb.com/docs/includes/
[jekyll data files]: https://jekyllrb.com/docs/datafiles/
[breathing-geometry]: https://olivialta.cc/breathing-geometry
