---
layout: default
# Blog | Simple Jekyll
header: Recipes
summary: A few recipes I love.
link: /recipes/
---
<h1>Recipes</h1>
<ul>
{% for item in site.recipes  %}
  <li><a href="{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
</ul>
