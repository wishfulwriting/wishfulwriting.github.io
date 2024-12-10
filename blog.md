---
layout: default
title: Blog | Ian Moore
header: Blog
summary: Where the magic happens - this is the blog!
link: /blog/
---

{% for post in site.posts %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p>{{ post.summary }}<br>
    <br>
    {{ post.date | date_to_string }}</p>
  </article>
{% endfor %}