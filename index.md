---
layout: default
---

<h2>Recent blogposts (<a class="big-link" href="{{ '/blog' | relative_url }}">View all</a>)</h2>
<div class="feed">
  {%- for post in site.posts limit: 10 -%}
  <div class="feed-entry">
    <div class="post-header">  
      <h3>
        <a class="big-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      {% for category in post.categories %}
        <span class="category">{{ category }}</span>
      {% endfor %}
      <br />
    </div>
    <time class="published-at">{{ post.date | date: "%b %-d, %Y" }}</time>
    <div class="excerpt-content">
      {{ post.excerpt }}
    </div>
  </div>
  {%- endfor -%}
</div>
