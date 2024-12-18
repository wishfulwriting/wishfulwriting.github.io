---
layout: default
title: Categories | Ian Moore
header: Categories
link: /categories/
---
<!-- {% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date_to_string }}</li>
    {% endfor %}
  </ul>
{% endfor %} -->

{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | title %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in sorted_posts %}
    <li><a href="{{  post.url }}">{{  post.title }}</a> - {{ post.date | date_to_string }} </li>
    {% endfor %}
  </ul>
{% endfor %}

