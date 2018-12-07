---
layout: workshop
title: Install instructions for the silverware firmware
---


{::options parse_block_html="true"/}

<div class="container">
## Flashing firmware

Much of this section is taken from the [source thread on RC groups](https://www.rcgroups.com/forums/showthread.php?2876797-Boldclash-bwhoop-B-03-opensource-firmware) and mirrored here for readibility.

Flashing is the process of saving the opensource firmware to the board, so that it can be used. It's not very hard, and the board usually does not break unless power is connected incorrectly or the step in bold is performed differently.

### Preparing the hardware:

The quad is flashed using a ST-Link v2, included with your kit. The quad's flight controller is fitted with a socket:

![Picture of socket](/assets/images/header-jumper-connections.jpg)

The Header Jumper and Jumper Wires should be connected to the ST-Link. The Header Jumper wires should (through the Jumper Wires) be connected as such:  

| Color   | Pin                 |  
| ------- | ------------------: |  
| Red     | GND                 |  
| Black   | 5V or disconnected  |  
| Yellow  | SWDIO               |  
| White   |	SWCLK               |  

Note: the black and red wires aren't attached to their conventional connections.

If you're using the included Header Jumper, it should plug neatly into the Jumper Wires. When attached, it should look like this:

![Quadcopter attached to the Header Jumper, Jumper Wires, and ST-Link](/assets/images/quadcopter-stlink-connection.jpg)

*Do Not* connect both the +5V pin if the battery is also connected. This *will* damage the board

If connector is not available, wires can be soldered to the board instead. Note that the CLK and DAT labels on the Flight Controller are reversed.  
3 wires are needed, Ground ( GND) , CLK ( SWCLK on stlink) and DAT( SWDIO on stlink). Connect the pads / plug to the equivalent place on the ST-Link: GnD <-> Gnd , DAT <-> SWCLK and CLK <-> SWDIO.

At this stage, we'll assume you have a compiled firmware you wish to flash. This may be from the Firmware Compilation step above, or it may be a precompiled firmware. Either way, make sure you have something to upload after erasing the factory firmware.

### Erasing the factory firmware:

If this is the first time you're flashing new firmware, the factory firmware has to be erased. This step only needs to be performed once, it does not need to be done every time the board is flashed.

The pristine factory firmware cannot be restored after this step. However, there is a factory-like firmware included in the `/bin/` folder of this repository.

1. Connect the board to the ST-Link. Do not connect the 5V pin from the ST-Link - we'll be getting power from a battery for this step.
    You need to complete the next step within a few seconds because current firmware repurposes the programming port to control a camera. If you can't connect, cycle power and try again.

2. Using the St-utility, connect to the board. You should get a message saying the board is protected ( "Cannot read memory").

3. In the Target menu, select "Option bytes".

    1. Select "Level 0" ( Should have been Level 1 originally )  
    Do not select an incorrect Level and apply it as it will kill the board.

	2. **Double check you have "level 0" selected**

	3. Click Apply ( this will erase the factory firmware - click cancel instead to abort)

4. At this the factory firmware should erased. Click disconnect, and remove power from the board. You can now proceed to the next part.

### Flashing a new firmware:

1. Connect the ST-Link to the board, and connect power. This may use either the 5V pin or the battery, **but not both**.

2. Open the ST-Link Utility program , and press the "connect" button. The program should show connection progress in the bottom part.

3. In the target menu, select "Program and verify" or "program". A popup will ask for the file to program. Select the firmware downloaded or compiled `.hex` firmware file here. After the file selection, click start, and wait a few seconds for the process to complete.

The new firmware is flashed at this point, and the drone is ready to be used.

</div>