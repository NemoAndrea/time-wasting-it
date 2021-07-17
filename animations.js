let animations = {

    pulseAll: function* () {
        let animationFrame = 0;
        let intensity = 0;
        let direction = 1;

        while (animationFrame < 200) {
            animationFrame++;

            if (intensity === 30) {
                direction = -1;
            }
            if (intensity === 0) {
                direction = 1
            }
            intensity += direction;
            let lights = new LightArray(12, intensity);

            yield lights
        }
    },

    roundTheClock: function* () {
        let animationFrame = 0;
        let intensity = 50;
        let lightindex = 0;

        while (animationFrame < 200) {
            animationFrame++;

            let lights =  new LightArray(12);
            lightindex = (lightindex + 0.1) % 12;
            lights.setValue(lightindex, intensity);

            yield lights
        }
    },

    roundTheClockSnake: function* () {
        let animationFrame = 0;
        let intensity = 50;
        let lightindex = 0;

        while (animationFrame < 200) {
            animationFrame++;

            let lights =  new LightArray(12);
            lightindex = (lightindex + 0.2) % 12;
            let floorindex = Math.floor(lightindex);
            lights.setValue(floorindex-3, intensity*1/4);
            lights.setValue(floorindex-2, intensity*2/4);
            lights.setValue(floorindex-1, intensity*3/4);
            lights.setValue(floorindex, intensity);

            yield lights
        }
    },

    quarterWheel: function* () {
        let animationFrame = 0;
        let intensity = 50;
        let lightindex = 0;

        while (animationFrame < 200) {
            animationFrame++;

            let lights = new LightArray(12);
            lightindex = (lightindex + 0.1) % 12;
            lights.setValue(lightindex, intensity);
            lights.setValue((lightindex + 3) % 12,intensity);
            lights.setValue((lightindex + 6) % 12, intensity);
            lights.setValue((lightindex + 9) % 12, intensity);

            yield lights
        }
    }

};

function* minuteHand(framerate, maxIntensity) {
    let animationFrame = 0;
    let decreasing = false;

    while (true) {
        animationFrame++;
        let cycle = (animationFrame/framerate) % 1;
        if (cycle === 0) {
            decreasing = !decreasing;  // flip mode (increasing/decreasing)
        }

        // return the target intensity
        let raw_intensity = (cycle) * maxIntensity;
        let intensity = decreasing ?  maxIntensity - raw_intensity : raw_intensity;
        yield Math.round(intensity);
    }
}

class LightArray {
    constructor(numberOfLights, fillVal=0) {
        this.lights = new Array(numberOfLights).fill(fillVal);
    }

    setValue(position, value) {
        // determine which two lights the <position> falls in between (position should be [0, this.lights.length) )
        let position_high = Math.ceil(position) % this.lights.length;
        let position_low = Math.floor(position) % this.lights.length;
        // now distribute the value between the two lights
        let value_high = (position % 1) * value;
        this.lights[position_high] = Math.round(value_high);  // the remainder
        this.lights[position_low] =  Math.round(value-value_high);
    }
}

exports.animationLibrary = animations;
exports.LightArray = LightArray;
exports.minuteAnimation = minuteHand;
