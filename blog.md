---
permalink: /blog
---

<h2>All blogposts</h2>
<ul class="feed">
  {%- for post in site.posts -%}
  <li class="feed-entry">
    <div class="post-header">  
      <h3>
        <a class="header-link" href="{{ post.url | relative_url }}">
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
  </li>
  {%- else -%}
    uh oh, no posts
  {%- endfor -%}
</ul>