---
layout: thing
title:  Schmick.js
subtitle: A drop in replacement for browser navigation behaviour
date: '2015-06-29 12:00:00'
---

This is another quick *I wonder...* project on a sunday. The goal of this
library is to emulate behaviour of sites that are built with ajax and only
only load a portion of the page content, often with a graceful animation to
transition between old to new content. 

To emulate this behaviour, it overrides the browser's native handling of
clicking links and submitting forms, converting these to ajax requests
behind the scenes and then updating the page content where applicable
with a nice transition animation. As such this library works well with
sites that have a consistent static header and footer so only the changing
content will be updated.

The result of this library after a day is not bad, it is now powering this
site (notice the fading between pages) and seems to work pretty smoothly on
modern browsers. I am not a frontend javascript man so I am sure there is 
much I have missed. Next on the agenda: how the hell to test this?

UPDATE: [Mocha](http://mochajs.org/) running in browser turned out to be
a workable solution.

[You can view the repository here](https://github.com/TimeToogo/Schmick).