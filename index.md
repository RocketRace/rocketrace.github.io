---
layout: default
---

<h2>Recent blogposts (<a class="header-link" href="{{ '/blog' | relative_url }}">View all</a>)</h2>
<div class="feed">
  {%- for post in site.posts limit: 10 -%}
  <div>
    {% include post-header.html depth="h3" post=post %}
    {{ post.excerpt }}
  </div>
  {%- endfor -%}
</div>
