const LightClock = require('./src/clock.js');
const startWebInterface = require('./src/interface/webserver');
const fs = require('fs');
const Gpio = require('pigpio').Gpio;

// load config file
let clockConfig = JSON.parse(fs.readFileSync('clock-config.json'));


let myClock = new LightClock();
/// setup the GPIO pins numbers (if it is an empty array it means we dont want to use any GPIO; e.g. for testing)
if (clockConfig.GPIO.length > 0) { myClock.setupGPIO(clockConfig.GPIO, clockConfig.mirroredGPIO) }
// set limits for PWM, which you should determine for your light and current values
myClock.setPWMlimit(clockConfig.PWMlimits);
// set the NightMode time limits e.g. [20, 8] means night mode is active between 20:00-8:00
myClock.setNightModeLimits(clockConfig.nightModeTimeLimits);
// Set the random animation state (true/false)
myClock.randomAnimationFrequency = clockConfig.randomAnimationFrequency;
// if timeMode does not equal 'auto', it should be some time string e.g. '12:45' or '15:32:55'
if (clockConfig.timeMode !== "auto") { myClock.setManualTime(clockConfig.timeMode)}
// we can choose to not run the web interface, and if we do, choose a localhost port.
if (clockConfig.webInterface.enabled) {
    startWebInterface(myClock, clockConfig.webInterface.port);
} else {
    console.log('<< Clock running in terminal mode (no web interface) >>');
}

// buttons
for ([i, button_pin] of clockConfig.GPIObuttons.entries()) {
    console.assert(i <= 1, "Only (up to) two buttons have a registered action, please add more if you want to use more buttons");
    let button = new Gpio(button_pin, {
        mode: Gpio.INPUT,
        pullUpDown: Gpio.PUD_UP,
        alert: true
    });
    button.glitchFilter(50000);
    // for the first registered button, make it trigger the 'pulseAll' named animation
    if (i===0) { button.on("alert", (level, tick)=> { if (level===0) {myClock.startAnimating("pulseAll")}})}
    // the second registered button, trigger a random animation
    if (i===1) { button.on("alert", (level, tick)=> { if (level===0) {myClock.startAnimating()}})}
}

// start the clock
myClock.start();

// handle manual closing of the script with CTRL+C
process.on('SIGINT', function() {
    console.log("Caught interrupt signal - stopping LightClock");
    if (myClock.gpio_pins) {
        for (let led of myClock.gpio_pins) {
            led.digitalWrite(0);
        }
    }
    process.exit();
});
