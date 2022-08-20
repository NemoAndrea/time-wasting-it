# *Time, wasting it* — a simple raspberry pi powered light clock

'Time, wasting-it' is a simple, raspberry pi-powered clock that uses **lights** instead of hands or digits to convey the time. At random points in time (configurable), the clock will show a playful light pattern. The demonstration and original build uses incandescent lights, but other types of lights can be used without modification.

![lightclock](img/lightclock.webp)

> The project is a reimaging of the original artwork "*Time, wasting it...*" by **Bo Andrea**. The rebuilt version uses modern hardware to capture the original functionality, which was encoded by much lower level components. The main features (time to light method) and animations (random light patterns at random intervals) are carried over from this original art concept. The original description of the artwork was (in Dutch):
>
> "Koperdraad, buisgloeilampen, microprocessor. Meestal wordt slaafs de tijd aangegeven, zo nu en dan echter..."

The light clock synchronises with internet time, and hence will automatically adjust to winter and summer time. The clock runs a web interface that can be accessed via SSH and exposes manual controls to the user. A different time can be set, some of the config options can be seen at a glance, and an animation can be played back. The web interface also has a virtual mimic of the current clock lights (intensity/PWM) settings, which is handy for debugging if you are hooking up your own custom lights.

![[web interface screenshot]](img/web_interface.png)

### Assembly

Assembling your own clock is not very difficult, provided you have soldering tools, a bit of time, and basic SSH knowledge. 

Briefly, you will need the following components

1. Raspberry pi zero (any variant will do, but a version with wireless connectivity is strongly recommended)
2. The project PCB, which can be ordered online using the `gerber` files in this repository
3. A power supply that has enough power to run your lights of choice
4. A buck converter, if your lights of choice do not run at 5V (the raspberry pi will need 5V)
5. 12 primary lights, that will convey the time. *must be PWM dimmable*
6. Wires, through-hole components and soldering tools

For a more detailed list of the required components and assembly guide, consult [the hardware setup section 📖](./docs/hardware.md)

### Software setup & usage

The software setup for the project (assuming the hardware is assembled and ready)  and configuration starts with the cloning of this repository onto the Raspberry Pi, and then a few simple commands, outlined in greater detail in [the software setup section 📖](./docs/software.md).

> The code is all JavaScript, which at the time was chosen for easy interfacing with the web UI. 

### Project state

The project is complete, and is no longer seeing active development. A running version of the light clock is operational, and has been reliable in use for almost a year (as of time of writing).







