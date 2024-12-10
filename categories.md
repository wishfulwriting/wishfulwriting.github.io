---
layout: default
title: Categories | Ian Moore
header: Categories
link: /categories/
---
{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date_to_string }}</li>
    {% endfor %}
  </ul>
{% endfor %}