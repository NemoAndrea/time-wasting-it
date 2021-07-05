const Gpio = require('pigpio').Gpio;


led = new Gpio(22, {mode: Gpio.OUTPUT})

let dutyCycle = 50;

led.pwmWrite(dutyCycle);

setInterval(() => {

    led.pwmWrite(dutyCycle);
}, 200);

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    led.digitalWrite(0);
    process.exit();
});
