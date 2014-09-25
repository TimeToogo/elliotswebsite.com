---
layout: default
title:  Blog Archive
---

<ul class='posts'>
{% for post in site.posts %}
  {% capture current_year %}{{post.date | date: "%Y"}}{% endcapture %}
  {% if current_year != year %}
    <li class='year'>{{ current_year }}</li>
    {% capture year %}{{current_year}}{% endcapture %}
  {% endif %}
    <li><a href="{{ post.url }}"> {{ post.date | date: '%d %b' }} - {{ post.title }}</a></li>
{% endfor %}
</ul>