---
layout: default
---

<h2>Recent blogposts (<a class="posts-link" href="{{ '/blog' | relative_url }}">View all</a>)</h2>
<div class="feed">
  {%- for post in site.posts limit: 10 -%}
  <div class="feed-entry">
    <a class="excerpt-title" href="{{ post.url | relative_url }}">
      {{ post.title | escape }}
    </a>
    <div class="feed-header">  
      <span class="published-at">Published at {{ post.date | date: "%b %-d, %Y" }}</span>
      {% for category in post.categories %}
        <span class="category">{{ category }}</span>
      {% endfor %}
    </div>
    <div class="excerpt-content">
      {{ post.excerpt }}
    </div>
  </div>
  {%- endfor -%}
</div>
