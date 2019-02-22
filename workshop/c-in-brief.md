---
layout: workshop
title: C in brief
---

{::options parse_block_html="true"/}


<div class="container">

## This page is meant to convey some of the basics of reading C code. There are a few constructs you should keep in mind...

<sup>If I were you, I'd keep this open in a seperate tab for reference throughout the workshop.</sup>

~~~ c
#include <stdbool.h>
#include <stdlib.h>
#include "pid.h"
#include "util.h"
#include "config.h"
#include "led.h"
#include "defines.h"


// B-03 firmware with modified hardware.h for E011


// Kp	                  ROLL       PITCH     YAW
float pidkp[PIDNUMBER] = { 13.0e-2 , 13.0e-2  , 6e-1 }; 

// Ki		              ROLL       PITCH     YAW
float pidki[PIDNUMBER] = { 12.8e-1  , 12.8e-1 , 3e-1 };	

// Kd			          ROLL       PITCH     YAW
float pidkd[PIDNUMBER] = { 5.5e-1 , 5.5e-1  , 0.0e-1 };	


// "setpoint weighting" 0.0 - 1.0 where 1.0 = normal pid
// #define ENABLE_SETPOINT_WEIGHTING
float b[3] = { 1.0 , 1.0 , 1.0};
~~~

There are lots of moving pieces to keep track of here - but the most important ones are probably as follows.

<hr>

## Comments

~~~ c
//This is a comment
//The computer doesn't pay attention to this
~~~

As the comment suggests, `//` is used to preface a comment. The computer disregards these when compiling code - they're only there for your (the human reader's) benefit. They're kind of like color-coded wires - they don't change any functionality, but they do make it easier on you.

<hr>

## Preprocessor directives

It's a complex name, but this covers code that helps the computer building the firmware put all the pieces together for itself, before it puts it onto the quadcopter.

There are two main flavors we're going to run into here...

## Includes

~~~ c
#include <stdlib.h>
#include "pid.h"
#include "util.h"
~~~

These are "includes". The reason they're called that is pretty obvious.

The meaning of them is pretty straightforward as well - They tell the computer that this file needs (includes) code that's defined in other files. In this snippet, we're going to be talking about things from `pid.h`, `util.h`, and so on.

## Variable Definitions

~~~ c
// level mode "manual" trims ( in degrees)
// pitch positive forward
// roll positive right
#define TRIM_PITCH 0.0
#define TRIM_ROLL 1.0
~~~

These are again, pretty straightforward.

This is setting a variable to a particular value. When the computer's preprocessor sees these, it'll know that it can replace all instances of `TRIM_PITCH` in the code with `0.0`, and all instances of `TRIM_ROLL` with `1.0`.

## Other Definitions

~~~ c
// throttle direct to motors for thrust measure
// #define MOTORS_TO_THROTTLE

// overclock to 64Mhz
#define ENABLE_OVERCLOCK

// used for pwm calculations
#ifdef ENABLE_OVERCLOCK
#define SYS_CLOCK_FREQ_HZ 64000000
#else
#define SYS_CLOCK_FREQ_HZ 48000000
#endif
~~~

These are pretty similar to the above Variable definitions. However, instead of setting a variable to a _value_ (like how `TRIM_PITCH` is set to `0.0`) these definitions simply declare that this variable _exists_. This comes in handy later on down the line - we can then use the `#ifdef` directive to see if it exists. `#else` tells the preprocessor what to do if it _doesn't_ exist, and `#endif` tells the preprocessor when the end of that switch is.

Bear in mind that comments (`//`) can affect these declarations. In the above clode block, `ENABLE_OVERCLOCK` exists while `MOTORS_TO_THROTTLE` is treated as a comment, and so isn't defined.

## Once you're done here

[Go check out the install instructions for the new firmware.](/workshop/install)
</div>