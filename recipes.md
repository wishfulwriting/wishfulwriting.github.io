---
layout: default
# Blog | Simple Jekyll
header: Recipes
summary: A few recipes I love.
link: /recipes/
---
<h1>Recipes</h1>
<ul>
{% for post in site.recipes  %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
