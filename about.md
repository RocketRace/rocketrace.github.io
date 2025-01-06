---
layout: page
title: About
permalink: /about
---

I'm Olivia. I'm an artist and programmer creating in computational spaces. 
I study human-computer interactions and have a particular interest in 
programming language design -- I have designed a number of languages myself! 
I'm also broadly enthusiastic about mathematics, software, music, and video games.

The background image to this site is randomly generated! It's based on patterns I
often scribble down, forming these kinds of knight's-move cuboids on graph paper.

[December adventure 2024][december adventure]

I am in many places on the internet!
* You can send mail to <span id="mailer">[hi at this domain]</span>
* On Discord, my tag is `rocketrace`.
* My [esolangs.org][my esolangs] page! I've designed and implemented a number of
  [esoteric programming languages][esolangs] that demonstrate beautiful and unexpected
  aspects of what programming can be.
* My [GitHub][github] has a record of all sorts of projects I've made in the past.

If you like this site, you might enjoy
* The Esolangs [Code Guessing][code guessing] competition. It features imaginative
  and cursed solutions to simple tasks, hosted frequently on the Esolangs Discord server!
  (Join in if you want!) My personal submissions are also [here][my cg], with commentary
  on each round.
* Other cool websites! This list is in no particular order :) <em id="marker"></em>
  * [coral.shoes](https://coral.shoes/)
  * [olus2000.pl](https://olus2000.pl/)
  * [esoteric.codes](https://esoteric.codes/)
  * [razetime.github.io](http://razetime.github.io/)
  * [rachel.cafe](https://rachel.cafe/)
  * [ultlang.github.io](https://ultlang.github.io/)
  * [zptr.cc](https://zptr.cc/)
  * [balt.sno.mba](https://balt.sno.mba/)
  * [xxiivv.com](https://xxiivv.com/)
  * [jennyodell.com](https://www.jennyodell.com/)
  * [tom7.org](http://tom7.org/)
  * [cjthex.com](https://cjthex.com/)

<script defer>
  // a tiny feature, but I prefer it like this
  const marker = document.getElementById("marker");
  const list = marker.nextElementSibling;
  const links = [...list.children];
  links.forEach(link => list.removeChild(link));
  for (let i = links.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [links[i - 1], links[j]] = [links[j], links[i - 1]];
  }
  links.forEach(link => list.appendChild(link));
  marker.innerText = "In fact, it's randomized!";

  const mailer = document.getElementById("mailer");
  mailer.innerText = "[hi@" + "olivialta.cc]";
</script>

[my esolangs]: https://esolangs.org/wiki/User:RocketRace
[esolangs]: https://en.wikipedia.org/wiki/Esoteric_programming_language
[github]: https://github.com/RocketRace
[code guessing]: https://cg.esolangs.gay
[my cg]: https://github.com/RocketRace/code-guessing
[december adventure]: {{ "/decadv-2024" | relative_url }}
