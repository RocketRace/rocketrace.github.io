---
layout: default
---

<div class="home">
    <h2 class="page-title">Posts</h2>
    <ul class="feed">
      {%- for post in site.posts -%}
      <li class="feed-entry">
        <span class="published-at">Published at {{ post.date | date: "%b %-d, %Y" }}</span>
        <h3 class="excerpt-title">
          <a href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {{ post.excerpt }}
      </li>
      {%- else -%}
        uh oh, no posts
      {%- endfor -%}
    </ul>
    <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>
</div>
