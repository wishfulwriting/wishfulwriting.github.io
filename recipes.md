---
layout: default
# Blog | Simple Jekyll
header: Recipes
summary: A few favorite recipes.
link: /recipes/
---

{% for post in site.recipes %}
  <p><a href="{{ post.url }}">{{ post.title }}</a><br>
  {{ post.description }}<br>
  {{ post.date | date_to_string }}</p>
{% endfor %}