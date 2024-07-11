---
layout: default
permalink: /furthest-neighbor
---

<script src="{{ "/assets/scripts/furthest-neighbor.js" | relative_url }}"></script>

<img hidden id="furthest-neighbor-image" src="{{ "/assets/images/badbad.png" | relative_url }}">

## *Furthest* neighbor interpolation?

<input type="range" id="furthest-neighbor-scale" min=1 max=1000 value=100/>

<canvas id="furthest-neighbor" width=200 height=200></canvas>
<canvas id="nearest-neighbor" width=200 height=200></canvas>
left: furthest, right: nearest