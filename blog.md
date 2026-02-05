---
permalink: /blog
layout: page
---

<h2>All blogposts</h2>
<ul class="feed">
  {%- for post in site.posts -%}
  <li class="feed-entry">
    {% include post-header.html depth="h3" post=post %}
    <div class="excerpt-content">
      {{ post.excerpt }}
      <a href="{{ post.url | relative_url }}">
        Continue reading
      </a>
    </div>
    {% unless forloop.last %}
      <hr class="small-divider">
    {% endunless %}
  </li>
  {%- else -%}
    uh oh, no posts
  {%- endfor -%}
</ul>
<hr />
<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>