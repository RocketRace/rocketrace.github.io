---
layout: default
---

<h2>Recent blogposts (<a class="static-link" href="{{ '/blog' | relative_url }}">View all</a>)</h2>
<div class="feed">
  {%- for post in site.posts limit: 10 -%}
  <div class="feed-entry">
    <div class="post-header">  
      <h3>
        <a href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      <span class="post-metadata">
        <time datetime="{{ post.date | date_to_xmlschema }}" >
          {{ post.date | date: "%b %-d, %Y" }}
        </time>
        {% for category in post.categories %}
          | <span class="category">{{ category }}</span>
        {% endfor %}
      </span>
    </div>
    <div class="excerpt-content">
      {{ post.excerpt }}
    </div>
  </div>
  {%- endfor -%}
</div>
