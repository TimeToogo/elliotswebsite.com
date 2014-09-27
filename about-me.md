---
layout: default
title:  About me
---

I am a <span class='years-from' data-date='1997-04-05'></span> year old student living in Melbourne, Australia, 
currently attending Brighton Secondary College in year <span class='years-from' data-date='2003-01-01'></span>.

Stuff I've made:
{% capture list %}
{% assign sorted_stuff = (site.stuff | sort: 'date')  %}
{% for thing in sorted_stuff %}
 - [{{ thing.title }}]({{ thing.url }}) - {{ thing.subtitle }}
{% endfor %}
{% endcapture %}
{{ list | markdownify }}

Places I've worked:
{% capture list %}
{% assign sorted_work = (site.work | sort: 'start-date')  %}
{% for job in sorted_work %}
 - [{{ job.title }}]({{ job.url }}) - {{ job.subtitle }} ({{ job.start-date | date: "%b %Y"  }} - {% if job.end-date != '' %}{{job.end-date | date: "%b %Y" }}{% else %}Today{% endif %})
{% endfor %}
{% endcapture %}
{{ list | markdownify }}

Over the years I have taught my self various skills that have allowed me to realise my ideas.

Skills:

 - C# - My first programming language, no regrets, elegant and statically typed allowed me to build a great foundation on OOP.
 - PHP - Although it may not be as elegant, full-featured or nice to work with, it is everywhere, maintains a large open source community and remains the largest part in my current job.
 - Webstack - HTML, CSS, JS, MySQL, stuff that is just a necessity for PHP web development.