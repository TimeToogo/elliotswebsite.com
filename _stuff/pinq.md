---
layout: thing
title:  PINQ
subtitle: PHP Integrated Query
date: '2014-04-24 12:00:00'
---

PINQ short for PHP Integrated Query, is a library for working with collections.
Coming from a C# background, [LINQ][0], being by far my most widely used tool,
provided terse and readable list comprehensions. Not only this, but also
the ability to integrate seamlessly with external data sources via C#'s
native expression trees.

Coming to PHP, it was quite a change to lose the ability to cleanly handle collections.
So I created PINQ which aimed to provide a similar set of tools and functionality.

The library currently V3, provides a solid implementation of in-memory list comprehensions
as well as the infrastructure required to integrate the API with external data sources.

Some sample code using PINQ:

{% highlight php startinline %}

$youngPeopleDetails = $people
        ->where(function ($row) { return $row['age'] <= 50; })
        ->orderByAscending(function ($row) { return $row['firstName']; })
        ->thenByAscending(function ($row) { return $row['lastName']; })
        ->take(50)
        ->indexBy(function ($row) { return $row['phoneNumber']; })
        ->select(function ($row) {
            return [
                'fullName'     => $row['firstName'] . ' ' . $row['lastName'],
                'address'       => $row['address'],
                'dateOfBirth' => $row['dateOfBirth'],
            ];
        });

{% endhighlight %}

Sadly this does not maintain the same readability aspect as in C# due to the
verbosity of closures. If [Hack's lambda expressions][1] were adopted the above would become:

{% highlight php startinline %}

$youngPeopleDetails = $people
        ->where($row ==> $row['age'] <= 50)
        ->orderByAscending($row ==> $row['firstName'])
        ->thenByAscending($row ==> $row['lastName'])
        ->take(50)
        ->indexBy($row ==> $row['phoneNumber'])
        ->select($row ==> [
            'fullName'     => $row['firstName'] . ' ' . $row['lastName'],
            'address'       => $row['address'],
            'dateOfBirth' => $row['dateOfBirth'],
        ]);

{% endhighlight %}

[You can view the repository here](https://github.com/TimeToogo/Pinq)

[You can view the project site here](https://timetoogo.github.io/Pinq)

[0]: http://msdn.microsoft.com/en-us/library/bb397926.aspx
[1]: http://docs.hhvm.com/manual/en/hack.lambda.php