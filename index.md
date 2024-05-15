---
layout: default
---

<h2>Recent blogposts (<a class="posts-link" href="{{ '/blog' | relative_url }}">View all</a>)</h2>
<ul class="feed">
  {%- for post in site.posts limit: 10 -%}
  <li class="feed-entry">
    <div class="feed-header">  
      <a class="excerpt-title" href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
      </a>
      <span class="published-at">Published at {{ post.date | date: "%b %-d, %Y" }}</span>
    </div>
    <div class="excerpt-content">
      {{ post.excerpt }}
    </div>
  </li>
  {%- else -%}
    uh oh, no posts
  {%- endfor -%}
</ul>


