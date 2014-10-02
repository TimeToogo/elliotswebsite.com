---
layout: thing
title:  Caulfield South Weather Station
subtitle: Redesign from scratch
date: '2014-10-01 12:00:00'
---

Some backstory first, my dad loves the weather, so much so he studied meteorology at University and he 
was offered a position at the [Bureau of Meteorology][0] some time ago. Although he did not pursue 
this path, he had never lost interest. So a while back, he bought a small backyard weather station 
and began a project creatively named Caulfield South Weather Station (we live in caulfield south). 
He used the data from the weather station to power a simple site that was friendly to kids. 
Interestingly enough, this site was hosted on this domain and can be viewed in the archives [here][1]. 

As you can probably tell, even in 2006, he was not the best when it comes to building websites 
that were appealing to the eye. And I myself have never been a talented designer but after 8 years,
I felt it was time for a redesign.

The backend of the new site was built on [Silex][2] which acts as a simple router and IOC container. It is fed data
via ftp from [WeatherLink][3], a program which integrates with the weather station. The frontend uses
is utilises [gridster.js][4] to provide the nice UI features for the weather widgets.

The new site can be found [here][5].

[0]: http://www.bom.gov.au/
[1]: http://web.archive.org/web/20060220001116/http://www.elliotswebsite.com/cws/eec1.php
[2]: http://silex.sensiolabs.org/
[3]: http://www.davisnet.com/weather/products/weather_product.asp?pnum=06510SER
[4]: http://gridster.net/
[5]: http://caulfieldsouthweatherstation.com/