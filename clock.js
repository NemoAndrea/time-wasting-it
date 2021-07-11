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
        // reset the time array
        this.lights = new Array(12).fill(0);

        if (this.time_mode === 'auto') {
            this.time.fromDate()
        }
        this.timeToLights();

        // if we have GPIO output enabled, we should also write LIGHTS to the gpio pins
        if (this.gpio_pins) {
            this.lightsToGpio()
        }
    }

    timeToLights() {
        this.lights[this.time.hours] = this.PWMlimit;
        let minute_low = Math.floor(this.time.minutes / 5) % 12;
        let minute_high = Math.ceil(this.time.minutes / 5) % 12;
        this.lights[minute_high] =  Math.round((this.time.minutes % 5) /4 * this.PWMlimit/2);
        this.lights[minute_low] = Math.round((5-(this.time.minutes % 5))/4 * this.PWMlimit/2);
        //console.log('Current lights:', this.lights)
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
        this.hours = Number(timestring.split(':')[0]) % 12;
        this.minutes = Number(timestring.split(':')[1]);
    }

    fromDate() {
        const time = new Date();
        this.hours = time.getHours() % 12;
        this.minutes = time.getMinutes()
    }

    addMinutes(amount) {
        let newMinutes = this.minutes + amount;
        // carry any hours (if we crossed the 60 minute marks
        this.hours = (this.hours + Math.floor(newMinutes/60)) % 12;
        // and set the new minutes
        this.minutes = newMinutes % 60;
    }
}

