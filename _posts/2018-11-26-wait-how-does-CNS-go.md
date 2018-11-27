---
layout: post
title: "Let's see if I can get CNS working properly"
date: 2018-11-26
categories: projects
---

# So CNS

This is a bit awkward and has taken the site down for a bit.
Turns out that the CNS path I'd taken (point the google domain I have at urhokarila.github.io) didn't quite work as I was expecting it to.  
It, as you know if you're reading this and competent with DNS, redirected things from my custom domain to the aforementioned urhokarila.github.io.

What I wanted was for urhokarila.github.io to redirect to urhokarila.com, and for urhokarila.com to serve content from urhokarila.github.io.


I've found a [Medium article that should handle this](https://medium.com/employbl/launch-a-website-with-a-custom-url-using-github-pages-and-google-domains-3dd8d90cc33b).  
We'll see how this goes.

### Key point here  
seems to be the addition of the CNAME record -- this is something I vaguely remember from my college days (not all that long ago).  
Updating the `Canonical NAME` on the DNS record to pointo the github site seems to be the way to get what I want. Only one way to find out!

At least I did this at night, right?