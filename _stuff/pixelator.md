---
layout: thing
title:  Pixelator.io
subtitle: Secure data in pictures
date: '2014-12-19 18:47:00'
---

This idea started as a stroke of curiosity back in year 8. Still being relatively new to programming
I had an extremely limited understanding of many concepts which I chose to work with. One of many
revelations came from the fact that files and data stored on disk are represented as a structured
series of numbers known as bytes. And on a seemingly unrelated occurrence I had another surprise, that
the data that constructed pictures stored on a computer was just an array of organized pixels which in
turn consisted of bytes! And there was something very intriguing about the fact that normal files and
the pixels in images were constructed of the same thing. As an an exercise to prove the above fact (to myself)
I made the first iteration of this project called *File to image* and soon renamed to *Snapshot*. 

[Download application](/assets/things/mini-projects/2011-8 File to image (Snapshot)/Snapshot.exe)

[Download solution](/assets/things/mini-projects/2011-8 File to image (Snapshot)/solution.zip)

This idea stuck and I enjoyed building on it very much. One of the limitations of the V1 above was
that it created the image in memory and hence had a size limit in the MBs. This turned
out the be a very difficult problem to solve but became a interesting learning experience as I dived
into the byte-level structure of image formatting. And for some reason I had chosen the [PNG][0] format
and begun learning the basics of the png specification. After much trial and error I had produced a
working implementation of of PNG streams which allowed the processing of virtually unlimited amounts 
of data into valid png images. Snapshot V2 was born.

[Download application](/assets/things/mini-projects/2012-3 Snapshot V2/Snapshot v2.exe)

[Download solution](/assets/things/mini-projects/2012-3 Snapshot V2/solution.zip)

In retrospect the GB png files were not the most useful of ideas. Some time later when I aimed to make
this more usable I decided to turn it into a web service. This was right about the time I went through 
a phase of attempting to learn how to write maintainable code. So in the pursuit of perfection I iterated
the web service itself 5 or 6 times before becoming satisfied and soon later forgot about it.

Some two years later I came back to revive this project and to finally finish it. I looked through the project
and I had mixed feelings about quality. Yes, I had definitely illustrated my determination to decouple
fairly logical portions of code by following a strict architectural design known as many names but commonly
[the clean architecture][1]. But I didn't view it as *clean* in the aspect of my original goal, to create 
maintainable code, it far was too big and complex to rather than a simple input output system. I had not matched
the architecture to the system but rather the system to the architecture and it was clear
that I had overlooked any value in *simplicity*. So I begun once again but not from scratch, I had reused
the majority of the front-end user interface but rewrote most of the backend in a far simpler design, 
aiming to finally release this project rather than the *endless* pursuit of perfecting it.

And that is how I built pixelator.io, perhaps it is not perfect, but it is live and it is usable.

[Visit pixerlator.io](https://pixelator.io)

[0]: http://en.wikipedia.org/wiki/Portable_Network_Graphics
[1]: http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html