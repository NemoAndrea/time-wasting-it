const Gpio = require('pigpio').Gpio;

class LightClock {
    constructor() {
        console.log('intialising time');
        this.time = new SimpleTime();
        this.time.setTime(2, 34);
        this.time_mode = 'auto';
        this.animating = false;
        this.lights = new Array(12).fill(0);
    }

    setupGPIO(pins, maxPWM) {
        this.gpio_pins = this._setupPins(pins);
        this._setPWMlimit(maxPWM);
    }

    setManualTime(timestring) {
        this.time_mode = 'manual';
        // todo validate this
        this.time.fromString(timestring);
    }

    setAutoTime() {
        this.time_mode = 'auto';
        this.time.fromDate()
    }

    updateLights() {
        if (this.time_mode === 'auto') {
            this.time.fromDate()
        }
        this.timeToLights()

        // if we have GPIO output enabled, we should also write LIGHTS to the gpio pins
        if (this.gpio_pins) {
            this.lightsToGpio()
        }
    }

    timeToLights() {
        this.lights[this.time.hours] = 255;
        let minute_low = Math.floor(this.time.minutes / 5) % 12;
        let minute_high = Math.ceil(this.time.minutes / 5) % 12;
        this.lights[minute_high] = (this.time.minutes % 5) * 14 ;
        this.lights[minute_low] =  (5-(this.time.minutes % 5)) * 14 ;
    }

    // write values in this.lights to gpio
    lightsToGpio(){
        this.gpio_pins.forEach((pin, index) => {
            let brightness= Math.min(this.lights[index], this.PWMlimit);
            pin.pwmWrite(brightness);
        });
    }

    _setupPins(pins){
        let gpio = [];
        for (const pin of pins) {
            gpio.push(new Gpio(pin, {mode: Gpio.OUTPUT}))
        }
        return gpio
    }

    _setPWMlimit(maxPWM) {
        this.PWMlimit = maxPWM;  // maximum value for PWM (at most 255) //TODO: check value
    }
}

module.exports = LightClock;

class SimpleTime {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
    }

    setTime(hours, minutes) {
        this.hours = hours % 12;
        this.minutes = minutes;
    }

    fromString(timestring) {

    }

    fromDate() {
        const time = new Date();
        this.hours = time.getHours() % 12;
        this.minutes = time.getMinutes()
    }
}

