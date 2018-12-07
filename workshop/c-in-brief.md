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


## Once you're done here

[Go check out the install instructions for the new firmware.](/workshop/install)
</div>