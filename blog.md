---
permalink: /blog
---

<h2>All blogposts</h2>
<ul class="feed">
  {%- for post in site.posts -%}
  <li class="feed-entry">
    {% include post-header.html depth="h3" post=post %}
    <div class="excerpt-content">
      {{ post.excerpt }}
    </div>
  </li>
  {%- else -%}
    uh oh, no posts
  {%- endfor -%}
</ul>