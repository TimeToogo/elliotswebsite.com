---
layout: thing
title:  RapidRoute
subtitle: Another exceptionally fast PHP router
date: '2015-05-18 12:00:00'
---

RapidRoute is another little side project of mine that was heavily
inspired by [nikic's FastRoute][0] and the seemingly endless pursuit of ultra
fast uri routing in PHP. The goal of the package not just to match pretty urls
into useful data telling the application what to do but to it *fast, very fast*.

The traditional method of routing, as used by FastRoute, is by compiling the route
definitions to regular expressions which will be run against the url. RapidRoute
takes a somewhat different approach to this problem by compiling the route definitions
to PHP code. This has the benefit of allowing much room for optimization. Specifically,
minimizing the number of comparisons necessary to match a route and using native PHP functions
instead of regular expressions when available. The obvious downside is now being limited to 
speed of PHP itself, but with PHP7 currently in the works and much hype about substantial 
performance gains, who knows what is possible?

RapidRoute, as it stands, is pretty much a working implementation at this point. It is
well tested with 99% code coverage and implements all the necessary API for usage in a
framework or as a standalone package. In terms of performance (of non-realistic benchmarks), 
when compared to FastRoute, the results are mixed. For static routes FastRoute
is a clear winner but for dynamic routes, non-existent routes (404) and invalid HTTP method (405)
RapidRoute shows substantial performance improvements.

[You can view the repository here](https://github.com/TimeToogo/RapidRoute)

[0]: https://github.com/nikic/FastRoute