class LightClock {
    constructor() {
        console.log('intialising time')
        this.time = new SimpleTime();
        this.time.setTime(2, 34);
        console.log('andddd: ', this.time)
        this.time_mode = 'auto';
        this.animating = false;
        this.lights = new Array(12).fill(0);
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
    }

    timeToLights() {
        this.lights[this.time.hours] = 255;
        let minute_low = Math.floor(this.time.minutes / 5) % 12;
        let minute_high = Math.ceil(this.time.minutes / 5) % 12;
        this.lights[minute_high] = (this.time.minutes % 5) * 14 ;
        this.lights[minute_low] =  (5-(this.time.minutes % 5)) * 14 ;
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

