---
layout: thing
title:  Casio Classpad Programs
subtitle: Programming for exams
date: '2015-11-12 12:00:00'
---

As part of my year 12 studies I chose math as one of my core subjects.
Unsurprisingly this involved using a calculator where appropriate, but
not just any calculator, a [CAS calculator][calc], a calculator that can
draw graphs, solve algebraic statements, perform calculus, you name it.
So, naturally, a big part of this subject is merely becoming proficient 
with this device, learning how to get it to do the dirty work for you.

There is one other feature I didn't mention: it has its only programming
language. A derivative of [BASIC][basic] that is geared for math and
calculations, something I had to look into. For most of my tests and
one of my exams, I would have the calculator available to me, so this
was an opportunity where I could excel, my programming could directly
benefit my school career.

I started small, automating little tasks here and there, such as finding
the polar roots of a complex number using [De Moivre's theorem][moivre]
or determining if some vectors are linearly dependent. Gradually working 
out some quirks of the language and discovering how to use its basic features,
most of which are undocumented.

One night before the day of a test I decided to play around with it
some more, I had the idea that I make a quick helper function to quickly
sketch graphs within a domain and range. However, the ideas did not stop,
I began to add one thing after another, first axial intercepts, those are
easy, then horizontal and vertical asymptotes, ok how do I draw a dotted
line? Then stationary points and their nature, need some derivatives, 
and so the hours started ticking. By sometime in the morning a had a
functional sketching program. Yet I was nervous, I had little idea what
would be on tomorrow's test, and how would I fair with 4 hours sleep?

Well, thankfully, the stars aligned, and the test consisted of sketching
around five graphs of varying nature. Being encouraged I continued to
work on more advanced problems, I setup an emulator so I can program on 
the computer instead of a touchscreen. I wanted to be able to find the implied
domain of a function. Ok well, there doesn't seem to be anything built-in,
so I somehow need to interpret and expression and go from there. The language
allowed you to solve expressions, but there was little functionality inspect
the structure of an expression. However, you could convert it to a string 
representation, `"sin(2x)"`, and this, although a difficult task, could be
parsed. So I did my research, implemented a [Shunting-yard parser][shunting],
then converting from RPN, to my favourite data structure, an AST, I can
deal with an AST. Cool, so I got my AST representing the expression, now
I can finally determine the implied domain! So I go ahead and do that,
get everything working as expected, `arcsin(2x+1) => [0, 1]`, excitedly transfer
it to my calculator, test it out, and for a while it doesn't seem to work,
maybe some bug in the emulator? But 15 seconds later out pops the same answer,
my heart sinks. I try a more complex expression, it begins taking minutes
where it took one second on the emulator, no good! I could do it quicker by
hand! I attempted optimizations but to no avail, I seem to have hit the limit
of the execution speed of the BASIC interpreter on the calculator :(

After realising these limits, I continued with other ideas throughout
the year, I ended up with some other cool programs such as converting
complex relations and parametric equations to cartesian form, `y=f(x)`,
performing [Euler's method][euler] to approximate definite integrals
and finding the integrand after using [u-substitution][u-sub]. 
All inspired by the goal of saving time during my end of year exam.

Today, after my exam, I would estimate that this effort saved in the order
of 5 minutes during my two hour exam, not especially remarkable, but
nonetheless I have no regrets as it was a learning experience where by
implementing these programs I dramatically increased my understanding
of the problems, perhaps even more valuable than the programs themselves.

[Here is the documentation](/assets/things/cas/program-reference.docx).

[Here are the programs](/assets/things/cas/cas-programs.zip).

[calc]: http://www.casio.edu.shriro.com.au/classpad330.php
[basic]: https://en.wikipedia.org/wiki/BASIC
[moivre]: https://en.wikipedia.org/wiki/De_Moivre%27s_formula
[shunting]: https://en.wikipedia.org/wiki/Shunting-yard_algorithm
[euler]: https://en.wikipedia.org/wiki/Euler_method
[u-sub]: https://en.wikipedia.org/wiki/Integration_by_substitution