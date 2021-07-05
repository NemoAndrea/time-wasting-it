const Gpio = require('pigpio').Gpio;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

leds = [
    new Gpio(18, {mode: Gpio.OUTPUT}),
    new Gpio(17, {mode: Gpio.OUTPUT}),
    new Gpio(23, {mode: Gpio.OUTPUT}),
    new Gpio(22, {mode: Gpio.OUTPUT}),
];

let dutyCycle = 0;
let addfactor =1;
const maxval = 30;

let led_to_change = getRandomInt(4);

setInterval(() => {

    leds[led_to_change].pwmWrite(dutyCycle);

    dutyCycle += addfactor;
    if (dutyCycle >= maxval) {
        dutyCycle = maxval;
        addfactor = -addfactor
    } else if (dutyCycle <= 0) {
        dutyCycle = 0;
        addfactor = -addfactor;
        // pick a random new LED to pulse
        led_to_change = getRandomInt(4);
    }
}, 20);

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    for (let led of leds) {
        led.digitalWrite(0);
    }
    process.exit();
});
