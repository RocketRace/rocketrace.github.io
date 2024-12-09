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

## December 6

So, to make my task a little bit easier to work on, I've published the image
backend to the site on GitHub and deployed it to Vercel. Yes, unfortunately
this project is hosted on two different online platform corporations. In an
ideal world I would be running my own server to host. This site is static, 
running right now on GitHub pages (but SSGs can easily be interchangeable so 
long as you generate your static assets ahead of time). However, in order to 
have permalinks to Babel's seeded-random images, I need some server-side 
computation. As far as I can tell, using Vercel for free Next.js hosting is a 
functional solution in the short term. Even if in the free tier is shut down in 
the future, and I have no doubt it will, there will be enough time to navigate 
over to my own server by then. I have attempted to minimize the amount of 
reliance on platform-specific features on my site, such as GitHub's CI 
workflows, for similar reasons.

That is to say, the Vercel free tier's bandwidth limits have already become a
problem for my project. If each image displayed on the page is to be fetched 
from Vercel, and a single image equates to about 12KB of outbound traffic,
then it takes 8 million images -- aka about 9 hours of scrolling the 
infinite-scroll website -- to deny service to the page for a whole month.
Not good. I already managed to use up 50MB of traffic out of 100GB in my few
minutes of testing. To alleviate this, I have switched to using `<canvas>` 
elements initialized with JavaScript instead. The page actually loads a lot 
faster now that it's not waiting on a series of network requests.

The internet is increasingly controlled by a handful of digital giants. It is 
difficult not to partake in their platforms. I know many of us have a vision 
for a more open and indie web, building organic networks through interlinked 
personal sites and encouraging the use of open protocols. So, especially now in 
times of increasing political tension and threat of monopolistic deregulation 
in the tech sector, it is crucial for us to have backup plans. Do not rely on 
the whims of a single platform. Keep backups of your data. Keep alternate means 
of contact with your friends. Enshittification will come for us all. My own 
plan is to get personal web hosting running on a VPS, to distribute my Git 
repositories through alternate means such as the [radicle][radicle] protocol, 
and to ensure I have access to a backup of my cloud storage even if one service 
goes down. And perhaps my project could inspire others to contemplate the state 
of the internet today, and reach their own conclusions on the matter. Thank you.

## December 7
I haven't done much today aside from small code tweaks, but I did spot 
[every-uuid][every-uuid]. What a funny coincidence that we created such a 
similar project! More specifically, the projects are similar in their technical 
details, but quite different in terms of their audience, direction, and 
(eventual) presentation. I appreciate the contrast. (In fact, there's a lot of 
good tips in the technical implementation side!) I wouldn't say our projects 
are ideologically opposed, but the direction that Every UUID goes in is much 
closer to "viral internet spectacle". I have made projects like that before 
too, but it's not quite my thing anymore. I'm glad that there is a steady 
supply of imaginative code out there to make digital life interesting 😄 I was 
pleasantly surprised to see the rest of the author's portfolio, and I will 
follow them for more!

## December 8
I have implemented a simple reversible LCG to handle my seeded randomization.
I have taken inspiration from the [algorithm to the Library of Babel][lob algo]
as well as the [blogpost to every-uuid][every-uuid blog], hence LCG.
This was pretty straightforward and I was confident in my ability (it helps
that I am not trying to solve the task using an LLM). The goal here was to
implement a permutation of numbers $n \in [0, N)$ (with period N). Because 
LCGs are commonly used iteratively for PRNG purposes, it might be easy to 
implement that permutations as $x_i \mapsto \text{LCG}(x_{i-1})$. But that would
be a folly; since LCG with properly chosen parameters is *already* the 
permutation that we're looking for! So $x_i \mapsto \text{LCG}(i)$ is all it
takes. The author of every-uuid missed this trick and used a different 
algorithm in the end, whereas the Library of Babel intentionally adds extra
bitwise tricks to make the output look more random. It turns out that for
image content a simple LCG suffices and looks random enough! Even the
repetitiveness of lower-order bits is less significant when you realize that
even a single pixel is 24 bits and hence repeats with a period of $\le 2^24$.
When combined with the layout of the 88x31s this will be practically invisible.
I did notice a small issue with my implementation, which was performance; it
takes 150ms to parse the bigint literals from my code (that I selected randomly)
and rendering to 256 canvases is pretty slow at 2 seconds total. I can always 
optimize this, but it's a good starting point to compare to.

Wow I'm exhausted today... I should take a bit easier tomorrow. I sometimes get
sucked into working on a project for far too long, and I forget to do other
things in the meantime (such as drink my tea which is currently becoming cold).
It's a difficult balance to strike, enjoying myself while working on a thing and
also taking care of myself. I don't always balance myself very well. I think the
fact that this log is public is also pushing me towards working more, which is
counterintuitive... (The point of the adventure log is to journal, not to show
off!) In any case I do want to learn from this December Adventure, so good night

## December 9
Fixed some broken CSS in yesterday's log 😁 I also decided to look into the
performance issues with my code. The first thing I did was to replace two of
the bigint literals (the parameters to the LCG) with computed literals
satisfying the necessary properties and that made sufficiently random images.
This brought the parsing time down from 150ms to an acceptable 50ms, but that 
wasn't necessarily the biggest priority here... I was actually able to speed
up the rest of the code by a factor of 10 by replacing BigInt operations with
string operations:
```diff
+ // I'm using a hex string as a u8 buffer
+ let hex = bits.toString(16);
---
- const rgb = Number(BigInt.asUintN(24, bits));
- bits >>= 24n;
- data.data[i * 4] = rgb >> 16;
- data.data[i * 4 + 1] = (rgb >> 8) & 0xff;
- data.data[i * 4 + 2] = rgb & 0xff;
+ data.data[i * 4] = parseInt(hex.substring(i * 6, i * 6 + 2), 16);
+ data.data[i * 4 + 1] = parseInt(hex.substring(i * 6 + 2, i * 6 + 4), 16);
+ data.data[i * 4 + 2] = parseInt(hex.substring(i * 6 + 4, i * 6 + 6), 16);
```
It's cursed but the numbers don't lie. I was honestly surprised at how well it
worked, which probably goes to show how weak JavaScript's bigints are. (Or it
shows me that browsers can't always optimize your code away, and that creating
tons of GC pressure in a loop is a bad idea, or that sometimes the simplest
solution is the best. Pick your favorite really)

## December 10
Today, I implemented dynamic loading based on scroll position, as well as some
extra methods to jump to a page. I have a few functions that aren't hooked up
to anything yet; I'd like to get a persistent footer for navigation + reverse 
image search + scroll to top implemented tomorrow. Plus a fake scrollbar would
be nice. Pretty simple mindless code for now.

## December 11
I implemented a sticky footer and the functionality I mentioned yesterday.
There's still stuff to finish, it's not looking particularly pretty and the
scroll position doesn't have fidelity. I am happy chugging along with this :)
I'm also pondering on the philosophical implications of this project, as well
as the message that it'll communicate. Who is my intended audience? Certainly
not the general online programming population.

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
[breathing-geometry]: {{ "/breathing-geometry" | relative_url }}

[radicle]: https://radicle.xyz

[every-uuid]: https://everyuuid.com/

[lob algo]: https://github.com/librarianofbabel/libraryofbabel.info-algo
[every-uuid blog]: https://eieio.games/blog/writing-down-every-uuid/