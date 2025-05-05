---
layout: post
title: Breathing new life to Breathing Geometry
slug: breathing-breathing-geometry
---

A few months ago, I created *Breathing Geometry*, a geometric breathing exercise centered around
regular polyhedra. At the time, I considered it complete, albeit minimally. Now, I've returned to
give a breath of new life into it.

<!--more-->

If you wish to jump straight to the juice, [click here to see the new page in action][breathing-geometry]!
I'll be waiting back here. Otherwise, read on.

I initially created the page for a university course. As a consequence, I had a fairly strict timeline for
the project. I do appreciate a more fixed time limit, and I find it helps me get a project standing on its
legs faster. Faster than my typical ballooning scope monsters!

That being said, time limits do also necessitate some level of prioritization. Not all tasks or ideas can fit
inside a period of time, and thus some must be left out. This was also the case with Breathing Geometry.
While I was able to complete the project, I didn't feel as if it was fully featured yet. For example, while
one of the goals of the projects was to visually incorporate shapes' [spherical geometries][spherical geometries],
I was not able to get a satisfying implementation done in time; hence, it was left only implied.

Now that it's been a little while, I thought to return and give the project its finishing touches. At this point
it's been long enough for me to feel confident in any lingering features. The foremost of these is, of course,
the visual spherical geometry!

I wanted to visually convey the [fundamental domain][fundamental domain] of each of the shapes' symmetry groups.
While the shapes smoothly oscillate between spheres and polyhedra, the fundamental domain (drawn as a set of
lines on top of the shape) stay constant. This representing the fact that these oscillations do not impact the
underlying symmetry of the shapes themselves. I found that quite fascinating!

I chose to embed the fundamental domain within the meshes of each of the polyhedra. Given that all of the meshes
are programmatically generated, I thought it would be appropriate for this addition to also be algorithmic.
I then spent some time tinkering with the algorithm on the back of an envelope:

![Fundamental domain notes][/assets/images/breathing-geometry-fd-notes.png]

I find that code, especially something very algorithmic, is a lot easier for me to design on paper. It's very visual,
and it lets me sort out my thoughts spatially. That's why I keep a little notebook with me!

Now, the results looked fairly good. The lines are subtle but still clearly impact how you see the shape. The shapes
look a bit more lively and multidimensional thanks to the additional shade of green. I later on added a small animation
that slowly pulses the colors of the lines, imitating a sort of abstract heartbeat. Combined with the imagery
of breathing polyhedra, a heartbeat was a natural addition.

You can see a rough comparison (not accounting for animation) below:

![Original icosahedron][/assets/images/breathing-geometry-icosahedron-original.png]
![Icosahedron with fundamental domain][/assets/images/breathing-geometry-icosahedron-fd.png]

Now, I wanted to add one more feature before considering the project complete. A little bit of spice to extend the
basic themes. I therefore chose to add one additional polyhedron to the list of companions. I deemed one to be 
enough, since otherwise the selector UI would become cramped and steal the focus away from the animation itself.

Strictly speaking, I have already included all of the basic regular polyhedra, i.e. the Platonic solids. Thus, any
addition would have to be in a class of more "exotic" polyhedra. Some of these classes include the
[Kepler-Poinsot polyhedra][kpp], the [Archimedean solids][archimedean solid], and other kinds of
[uniform polyhedra][uniform polyhedra]. I chose my addition from the Kepler-Poinsot polyhedra, since they are 
closely connected to the Platonic solids and are also visually the most interesting in my opinion.

I had some difficulty choosing a fitting shape, but eventually settled on the [great dodecahedron][great dodecahedron].
I found it struck the right balance of finality and groundedness. Plus, the name "great dodecahedron" just fits
so well as the last element of a list!

Since the great dodecahedron uses the same edges as an icosahedron, I was able to reuse some of my previous code
in this new mesh. I did manually compute the edges in each face, though: 

![Great dodecahedron notes][/assets/images/breathing-geometry-great-dodecahedron-notes.png]

Finally I can say that the project is fully featured! I love how the little touches have made the whole thing
feel a lot more complete. There is of course room to improve on the performance front (such as computing normals
inside a shader), but I am very happy with the results overall.

[See it for yourself!][breathing-geometry]

![Great dodecahedron][/assets/images/breathing-geometry-great-dodecahedron.png]

[breathing-geometry]: {{ "/breathing-geometry" | relative_url }}
[spherical geometries]: https://en.wikipedia.org/wiki/List_of_spherical_symmetry_groups
[fundamental domain]: https://en.wikipedia.org/wiki/Fundamental_domain
[kpp]: https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron
[archimedean solid]: https://en.wikipedia.org/wiki/Archimedean_solid
[uniform polyhedra]: https://en.wikipedia.org/wiki/Uniform_polyhedron
[great dodecahedron]: https://en.wikipedia.org/wiki/Great_dodecahedron