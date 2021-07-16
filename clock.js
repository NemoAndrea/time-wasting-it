const Gpio = require('pigpio').Gpio;
const ani = require('./animations.js');

class LightClock {
    constructor() {
        console.log('initialising time');
        this.time = new SimpleTime();
        this.time.setTime(2, 34);
        this.time_mode = 'auto';
        this.animation = null;
        this.animationHistory = {name:'', time: null};
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

    startAnimating(animationName=null) {
        if (animationName) { // load specific animation
            console.log('specific animation...')
            //TODO implement with checks
        } else { // select random animation that is NOT the last animation
            let keyoptions = Object.keys(ani.animations).filter(name => name !== this.animationHistory.name);
            const animationName = keyoptions[Math.floor(Math.random() * keyoptions.length)];
            this.animation = {name:animationName, generator:ani.animations[animationName]()};
            this.animationHistory.name = animationName;
            console.log('Randomly selected the following animation: ', this.animation.name)
        }
    }

    updateLights() {
        // reset the time array
        this.lights = new Array(12).fill(0);

        if (this.animation) { // play animation
            let animation = this.animation.generator.next();
            if (animation.done){
                console.log('ANIMATION FINISHED, BACK TO CLOCK MODE')
                this.animation = null;
            } else {  // animation in progress. set lights.
                this.lights = animation.value;
            }
        } else {  // we are not animating, just show the time
            if (this.time_mode === 'auto') { // if we are on auto time, we need to fetch the time first
                this.time.fromDate()
            }
            this.timeToLights();  // convert the SimpleTime to values for the lights
            this.checkAnimation()  // check if we should switch to a random animation.
        }

        // if we have GPIO output enabled, we should also write LIGHTS to the gpio pins
        if (this.gpio_pins) {
            this.lightsToGpio()
        }
    }

    timeToLights() {
        this.lights[this.time.hours] = this.PWMlimit;

        let minute_low = Math.floor(this.time.getDecimalMinutes() / 5) % 12;
        let minute_high = Math.ceil(this.time.getDecimalMinutes() / 5) % 12;
        this.lights[minute_high] =  Math.round((this.time.getDecimalMinutes() % 5) /4 * this.PWMlimit/2);
        this.lights[minute_low] = Math.round((5-(this.time.getDecimalMinutes() % 5))/4 * this.PWMlimit/2);
        //console.log('getDecimalMinutes ', this.time.getDecimalMinutes(), 'minutes:seconds', this.time.minutes, this.time.seconds, 'high:low', this.lights[minute_high],this.lights[minute_low]);
        //console.log('Current lights:', this.lights)
    }

    // write values in this.lights to gpio
    lightsToGpio(){
        this.gpio_pins.forEach((pin, index) => {
            let brightness= Math.min(this.lights[index], this.PWMlimit);
            pin.pwmWrite(brightness);
        });
    }

    checkAnimation() {
        if (Math.random() < 0.005) {  // once in a hundred frames (on average) it should animate
            this.startAnimating()
        }
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
        this.seconds = 0;
    }

    setTime(hours, minutes, seconds=0) {
        this.hours = hours % 12;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    getDecimalMinutes() {
        return this.minutes + this.seconds/60
    }

    fromString(timestring) {
        const split_time = timestring.split(':')
        this.hours = Number(split_time[0]) % 12;
        this.minutes = Number(split_time[1]) % 60;
        // if we specified seconds (e.g. HH:MM:SS)
        split_time.length===3 ? this.seconds = Number(split_time[2]) % 60 : this.seconds = 0;
    }

    fromDate() {
        const time = new Date();
        this.hours = time.getHours() % 12;
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
    }

    addMinutes(amount) {
        let newMinutes = this.minutes + amount;
        // carry any hours (if we crossed the 60 minute marks
        this.hours = (this.hours + Math.floor(newMinutes/60)) % 12;
        // and set the new minutes
        this.minutes = newMinutes % 60;
    }
}

