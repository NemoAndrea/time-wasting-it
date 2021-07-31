# LightClock

### Starting the LightClock

Simply navigate to the repository directory on the raspberry pi, and type

```
sudo node start-clock.js
```

> If you just cloned this repository, you will have to install the dependencies first, by running `node install`

### Web interface

Running main.js will also run a HTML interface at `localhost:3000` on the raspberry pi. To forward this to your local machine, type (on your local machine):

```
ssh -L <yourlocalhost>:<raspberry_pi_ip>:3000 pi@<raspberry_pi_ip>
```

### Config

You can configure the most common clock settings in `clock-config.json`.

The values settable are:

* `GPIO` : array of integers indicating the GPIO pin numbers as specified in `pigpio`. 

  > If an empty array is provided `[]` the clock will not do any GPIO operations. This is useful if you want to run test's without the hardware and use only the web interface

* `mirroredGPIO`: Boolean value indicating whether to reverse the order of the values in `GPIO`, resulting in the clock pattern being mirrored along the vertical axis. Useful if your hardware layout is mirrored. (e.g. your PCB orientation is backwards w.r.t. the lights of the clock). 

* `GPIObuttons`: array of integers indication GPIO pin numbers to be used for buttons. Used in `PUD_UP` mode. **Only two actions are registered, so the maximum number of GPIO pins that can be entered here is 2.** Leaving it as an empty array  `[]` means no buttons will be used. 

* `PWMlimits` : Object that specifies three limits for PWM values, which in  `pigpio`  can be set between [0,255]

  * `PWMlimits.upper` : maximum PWM value that can be set for GPIO. Safety value and maximum intensity for animations.
  * `PWMlimits.hourHand`: PWM value for the hour hand. Clamped to `PWMlimits.upper`.
  * `PWMlimits.minuteHand`:PWM value for the minute hand. Clamped to `PWMlimits.upper`.

* `timeMode`: String value that either sets the clock to automatic mode (i.e. internet time)  by `"auto"` or to a specific manual time (which will not update with passing time) as `"hh:mm"` or `"hh:mm:ss".`

  > The manual time formats are useful for testing purposes. In normal use there is little reason to change it from `"auto"`

* `randomAnimationFrequency`: a number indicating the mean time (in seconds) it takes for the clock to switch to animation mode. Animation probability is a geometric distribution. Hence the actual time between animation can vary quite a bit 

  > E.g. if you set it to `60` then the mean time at which the animation will play is 60 seconds, but it may well be 40 seconds or 85.

* `webInterface` : options for the html interface that can be used to play with or control the `LightClock`

  * `webInterface.port`: port number to run application at `e.g. localhost:6969`
  * `webInterface.enabled`: Boolean value determining whether to launch the web interface. The web Interface is not required for clock operation, so if you are not testing anything or need direct control over the clock, you could set it to `false`. 