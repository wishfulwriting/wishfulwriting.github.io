---
layout: default
title: Recipes | Ian Moore
header: Recipes
summary: A few recipes I love.
link: /recipes/
---
<h1>Recipes</h1>
<ul>
{% for post in site.recipes  %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date_to_string }}</li>
{% endfor %}
</ul>
