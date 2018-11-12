---
layout: post
title: I'm trying to launch a site. About time.
date: 2018-11-11
---

Finally getting around to getting a website together. Part of this is an experiment in Jekyll - I've heard it's a good thing to know, and so I figure it'll be worth at least dipping my toe in.

Other part of this - I've been thinking of getting a site together for a while. Some kind of blog/record/wedding planning thing (if that's what you're here for, thanks for looking around I guess?).

Since this is apparently running on Markdown, here's a quick copy/paste job from my e011 library README, just to see how it handles...

---------

...
### Preparing the hardware:

The quad is flashed using a ST-Link v2, included with your kit. The quad's flight controller is fitted with a socket:

![Picture of socket](/images/header-jumper-connections.jpg)

The Header Jumper and Jumper Wires should be connected to the ST-Link. The Header Jumper wires should (through the Jumper Wires) be connected as such:  

| Color   | Pin                 |  
| ------- | ------------------: |  
| Red     | GND                 |  
| Black   | 5V or disconnected  |  
| Yellow  | SWDIO               |  
| White   |	SWCLK               |  

Note: the black and red wires aren't attached to their conventional connections.

If you're using the included Header Jumper, it should plug neatly into the Jumper Wires. When attached, it should look like this:

![Quadcopter attached to the Header Jumper, Jumper Wires, and ST-Link](/images/quadcopter-stlink-connection.jpg)

*Do Not* connect both the +5V pin if the battery is also connected. This *will* damage the board

If connector is not available, wires can be soldered to the board instead. Note that the CLK and DAT labels on the Flight Controller are reversed.  
3 wires are needed, Ground ( GND) , CLK ( SWCLK on stlink) and DAT( SWDIO on stlink). Connect the pads / plug to the equivalent place on the ST-Link: GnD <-> Gnd , DAT <-> SWCLK and CLK <-> SWDIO.

At this stage, we'll assume you have a compiled firmware you wish to flash. This may be from the Firmware Compilation step above, or it may be a precompiled firmware. Either way, make sure you have something to upload after erasing the factory firmware.

### Erasing the factory firmware:

If this is the first time you're flashing new firmware, the factory firmware has to be erased. This step only needs to be performed once, it does not need to be done every time the board is flashed.

...