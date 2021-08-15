const range = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i);

// javascript mod function doesn't handle negative numbers as you may expect. This will fix it
function mod(n, m) {
    return ((n % m) + m) % m;
}

// list of animations (generator functions)
// Add your own by picking a unique name and then follow the general 'Animationframe' and 'yield' formula
// The default tickrate for  the clock is 50, so 300 animation frames is 300/50 = 6 seconds.
let animations = {

    pulseAll: function* (maxPWM) {
        let animationFrame = 0;
        let intensity = 0;
        let direction = 1;

        while (animationFrame < 300) {
            animationFrame++;

            if (intensity === maxPWM/4) {
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

    // roundTheClock: function* () {
    //     let animationFrame = 0;
    //     let intensity = 50;
    //     let lightindex = 0;
    //
    //     while (animationFrame < 200) {
    //         animationFrame++;
    //
    //         let lights =  new LightArray(12);
    //         lightindex = (lightindex + 0.1) % 12;
    //         lights.setValue(lightindex, intensity);
    //
    //         yield lights
    //     }
    // },

    roundTheClockSnake: function* (maxPWM) {
        let animationFrame = 0;
        let intensity = maxPWM;
        let lightindex = 0;

        while (animationFrame < 300) {
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

    roundTheClockSnakeDouble: function* (maxPWM) {
        let animationFrame = 0;
        let intensity = maxPWM;
        let lightindex = 0;

        while (animationFrame < 300) {
            animationFrame++;

            let lights =  new LightArray(12);
            lightindex = mod(lightindex + 0.2, 12);
            let floorindex = Math.floor(lightindex);
            lights.setValue(floorindex-3, intensity*1/4);
            lights.setValue(floorindex-2, intensity*2/4);
            lights.setValue(floorindex-1, intensity*3/4);
            lights.setValue(floorindex, intensity);

            let floorindexTwo = mod(floorindex+6, 12);
            lights.setValue(floorindexTwo-3, intensity*1/4);
            lights.setValue(floorindexTwo-2, intensity*2/4);
            lights.setValue(floorindexTwo-1, intensity*3/4);
            lights.setValue(floorindexTwo, intensity);


            yield lights
        }
    },

    quarterWheel: function* (maxPWM) {
        let animationFrame = 0;
        let intensity = maxPWM;
        let lightindex = 0;

        while (animationFrame <300) {
            animationFrame++;

            let lights = new LightArray(12);
            lightindex = (lightindex + 0.1) % 12;
            lights.setValue(lightindex, intensity);
            lights.setValue((lightindex + 3) % 12,intensity);
            lights.setValue((lightindex + 6) % 12, intensity);
            lights.setValue((lightindex + 9) % 12, intensity);

            yield lights
        }
    },

    // random lights intensities, updated every 10 animation frames
    // randomAll: function* (maxPWM) {
    //     let animationFrame = 0;
    //     let lastLights = new LightArray(12,1);
    //
    //     while (animationFrame < 300) {
    //         animationFrame++;
    //
    //         if (animationFrame % 10 === 0) {
    //             for (let i = 0; i < 12; i++) {
    //                 lastLights.setValue(i, Math.random() * maxPWM / 2)
    //             }
    //         }
    //
    //         yield lastLights
    //     }
    // },

    // random lights intensities (for 6 locations only), updated every 10 animation frames
    randomSix: function* (maxPWM) {
        let animationFrame = 0;
        let lastLights = new LightArray(12);

        while (animationFrame < 300) {
            animationFrame++;

            if (animationFrame % 10 === 0) {
                // clear the old random values
                lastLights =  new LightArray(12);
                // set new random values (only for 6 (or less) random lights)
                for (let i = 0; i < 6; i++) {
                    const lightIndex = Math.floor(Math.random()*12);
                    lastLights.setValue(lightIndex, Math.random() * maxPWM / 2)
                }
            }

            yield lastLights
        }
    },

    // two lights that go around the clock, one faster than the other
    turtleAndHare: function* (maxPWM) {
        let animationFrame = 0;
        let turtle = 0;
        let hare = 0;

        while (animationFrame < 300) {
            animationFrame++;

            let lights = new LightArray(12);

            turtle = (turtle + 0.1) % 12;
            lights.setValue(turtle, maxPWM*3/4);

            hare = (hare + 0.2) % 12;
            lights.setValue(hare, maxPWM*3/4);

            yield lights
        }
    },

    // Sequentially turn on lights and then sequentially turn off lights
    theWave: function* (maxPWM) {
        let animationFrame = 0;
        let mode = 1;
        let lightFront = 0;
        let lastLight = new LightArray(12);

        while (animationFrame < 300) {
            animationFrame++;
            //et lights = new LightArray(12);

            if (lightFront > 12) {
                lightFront = 0;
                mode = mode===1 ? mode = 0 : mode = 1
            }
            lightFront += 0.15;

            lastLight.setValue(lightFront, maxPWM/2 * mode);
            for (const index of range(0, Math.max((lightFront),0))) {
                lastLight.setValue(index, maxPWM/2 * mode);
            }

            yield lastLight
        }
    },

    // 5 neighbouring lights will light up; updated every 20 animation frames
    randomBlock: function* (maxPWM) {
        let animationFrame = 0;
        let lastLights = new LightArray(12);

        while (animationFrame < 300) {
            if (animationFrame % 10 === 0) {
                let blockCenter = Math.floor( Math.random() * 12 );
                lastLights = new LightArray(12); // remove the old block

                lastLights.setValue(blockCenter-2, maxPWM / 3)
                lastLights.setValue(blockCenter-1, maxPWM / 2)
                lastLights.setValue(blockCenter, maxPWM *2/3)
                lastLights.setValue(blockCenter+1, maxPWM / 2)
                lastLights.setValue(blockCenter+2, maxPWM / 3)
            }

            animationFrame++;

            yield lastLights
        }
    },




};

function* minuteHand(framerate, maxIntensity) {
    let animationFrame = 0;
    let decreasing = false;

    while (true) {
        animationFrame++;
        let cycle = (animationFrame/framerate) % 1;
        if (cycle === 0) {
            decreasing = !decreasing;  // flip mode (increasing/decreasing)
            animationFrame=0;
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
        let position_high = mod( Math.ceil(position), this.lights.length);
        let position_low = mod( Math.floor(position), this.lights.length);
        if  (position_high !== position_low) {
            // now distribute the value between the two lights
            let value_high = (position % 1) * value;
            this.lights[position_high] = Math.round(value_high);  // the remainder
            this.lights[position_low] = Math.round(value - value_high);
        } else {
            this.lights[position_low] = Math.round(value);
        }
    }
}

exports.animationLibrary = animations;
exports.LightArray = LightArray;
exports.minuteAnimation = minuteHand;
