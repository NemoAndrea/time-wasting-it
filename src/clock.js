//const Gpio = require('pigpio').Gpio;
const { animationLibrary, LightArray, minuteAnimation } = require('./animations.js');

class LightClock {
    constructor() {
        this.time = new SimpleTime();
        this.timeMode = 'auto';
        this.animation = null;
        this.randomAnimationFrequency = 0;
        this.animationHistory = {name:'', time: null};
        this.lightArray = new LightArray(12);
        this.PWMlimits = { "upper": 120, "hourHand": 100, "minuteHand": 50};
        this.tickrate = 50;  // clock updates tickrate times per second. Higher is faster.
        this.minuteHand = minuteAnimation(this.tickrate, this.PWMlimits.minuteHand);
        console.log('LightClock created...');
    }

    start() {  // have the clock start ticking, by repeatedly calling the updateLights() function
        const tickInterval = 1000/this.tickrate;
        setInterval(()=>{
            this.updateLights();
            // }
        }, tickInterval);
    }

    setupGPIO(pins, mirrored=false) {
        console.assert(pins.length > 0, "No pin numbers specified for GPIO (got empty array)");
        let gpio = [];
        // For some applications, you may want to have the lights mirrored along the vertical axis
        // This is simply a matter of reversing the pin order. This is preferred over providing the GPIO pins
        // in reversed order, as this way you can set mirrored=false and get a meaningful output during testing.
        const gpio_pins = mirrored? pins.reverse() : pins;
        for (const pin of gpio_pins) {
            gpio.push(new Gpio(pin, {mode: Gpio.OUTPUT}))
        }
        this.gpio_pins = gpio;
        console.log('<< Using GPIO outputs: ', gpio_pins, ' >>');
    }

    setManualTime(timestring) {
        this.timeMode = 'manual';
        // todo validate this
        this.time.fromString(timestring);
    }

    setAutoTime() {
        this.timeMode = 'auto';
        this.time.fromDate()
    }

    startAnimating(animationName=null) {
        if (animationName) { // load specific animation
            if (animationName in animationLibrary) {
                this.animation = {name:animationName, generator:animationLibrary[animationName](this.PWMlimits.upper)};
            } else {
                throw new Error(`requested animation ${animationName} not in animation library.`)
            }
        } else { // select random animation that is NOT the last animation
            let keyoptions = Object.keys(animationLibrary).filter(name => name !== this.animationHistory.name);
            const chosenAnimation = keyoptions[Math.floor(Math.random() * keyoptions.length)];
            this.animation = {name:chosenAnimation, generator:animationLibrary[chosenAnimation](this.PWMlimits.upper)};
            this.animationHistory.name = chosenAnimation;
            console.log('Randomly selected the following animation: ', this.animation.name)
        }
    }

    updateLights() {
        // reset the time array
        this.lightArray = new LightArray(12);

        if (this.animation) { // play animation
            let animation = this.animation.generator.next();
            if (animation.done){
                console.log('ANIMATION FINISHED, BACK TO CLOCK MODE');
                this.animation = null;
            } else {  // animation in progress. set lights.
                this.lightArray = animation.value;
            }
        } else {  // we are not animating, just show the time
            if (this.timeMode === 'auto') { // if we are on auto time, we need to fetch the time first
                this.time.fromDate()
            }
            this.timeToLights();  // convert the SimpleTime to values for the lights

            // check if we should switch to a random animation.
            if (this.randomAnimationFrequency > 0) {
                this.checkAnimation()
            }
        }

        // if we have GPIO output enabled, we should also write LIGHTS to the gpio pins
        if (this.gpio_pins) {
            this.lightsToGpio()
        }
    }

    timeToLights() {
        // set minutes
        this.lightArray.setValue(this.time.getDecimalMinutes() / 5, this.minuteHand.next().value);
        // set hour
        this.lightArray.setValue(this.time.hours, this.PWMlimits.hourHand);
    }

    // write values in this.lightArray to gpio
    lightsToGpio(){
        this.gpio_pins.forEach((pin, index) => {
            let brightness= Math.min(this.lightArray.lights[index], this.PWMlimits.upper);
            pin.pwmWrite(brightness);
        });
    }

    // toss a coin and see if we should animate now
    checkAnimation() {
        if (this.randomAnimationFrequency !== 0) {  // if it is zero it would be pointless to compute the next step
            // toss a (biased) coin and see if we should animate based on outcome
            // the randomAnimationFrequency sets the time (s) it takes from the last animation
            // for a 50% chance for the next event. -> geometric distribution E[X]=1/p
            // we know E[x] = this.randomAnimationFrequency * this.tickrate
            const p = 1 / (this.randomAnimationFrequency * this.tickrate);
            if (Math.random() < p) {
                this.startAnimating()
            }
        }
    }

    setPWMlimit(PWMlimits) {
        // check if values are proper
        for (const [key, pwmValue] of Object.entries(PWMlimits)) {
            if (pwmValue > 255 && pwmValue >= 0) {
                throw `The PWM limit for ${key} is not within the correct range [0,255] with a value of ${pwmValue}`
            } else {  // value range is okay, but let's make sure it is an integer
                PWMlimits[key] = Math.round(pwmValue)
            }
        }
        // set limits
        this.PWMlimits = PWMlimits;
        // update the minutehand
        this.minuteHand = minuteAnimation(this.tickrate, this.PWMlimits.minuteHand);
    }
}

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

module.exports = LightClock;

