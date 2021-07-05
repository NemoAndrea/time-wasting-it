const Gpio = require('pigpio').Gpio;

leds = [
    new Gpio(18, {mode: Gpio.OUTPUT}),
    new Gpio(17, {mode: Gpio.OUTPUT}),
    new Gpio(23, {mode: Gpio.OUTPUT}),
    new Gpio(22, {mode: Gpio.OUTPUT}),
];


let currentTime = 0;
let addfactor = 0.1;
const maxPWMval = 30;
const maxTime = 4;  // 4 lights, 12 for a clock

console.log('Now running basic_clock.js...')

setInterval(() => {
    currentTime += addfactor;
    currentTime = currentTime % 4
    floor_led = Math.floor(currentTime) % 4
    ceil_led = Math.ceil(currentTime) % 4

    for (let led of leds) {
        led.pwmWrite(0);
    }

    let floor_val = currentTime % 1;
    console.log('Current time is: ', currentTime,' setting value ', floor_val, 'set on lamp nr: ', floor_led, ' and inv lamp: ', ceil_led)
    leds[floor_led].pwmWrite( Math.round(maxPWMval*(1-floor_val)) );
    leds[ceil_led].pwmWrite( Math.round(maxPWMval*floor_val) );

}, 200);

process.on('SIGINT', function() {
    console.log("Caught interrupt signal - stopping basic_clock.js");
    for (let led of leds) {
        led.digitalWrite(0);
    }
    process.exit();
});
