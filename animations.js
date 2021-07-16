let animations = {

    pulseAll: function* () {
        let animationFrame = 0;
        let intensity = 0;
        let direction = 1;

        while (animationFrame < 200) {
            animationFrame++;

            if (intensity === 50) {
                direction = -1;
            }
            if (intensity === 0) {
                direction = 1
            }
            intensity += direction;
            let lights = new Array(12).fill(intensity);

            yield lights
        }
    },

    roundTheClock: function* () {
        let animationFrame = 0;
        let intensity = 50;
        let lightindex = 0;

        while (animationFrame < 200) {
            animationFrame++;

            let lights = new Array(12).fill(0);
            if (animationFrame % 10 === 0) {
                lightindex = (lightindex + 1) % 12
            }
            lights[lightindex] = intensity;

            yield lights
        }
    },

    quarterWheel: function* () {
        let animationFrame = 0;
        let intensity = 50;
        let lightindex = 0;

        while (animationFrame < 200) {
            animationFrame++;

            let lights = new Array(12).fill(0);
            if (animationFrame % 10 === 0) {
                lightindex = (lightindex + 1) % 12
            }
            lights[lightindex] = intensity;
            lights[(lightindex + 3) % 12] = intensity;
            lights[(lightindex + 6) % 12] = intensity;
            lights[(lightindex + 9) % 12] = intensity;

            yield lights
        }
    }

};

module.exports = {animations};


// for (const value of pulseAll()) {
//     console.log(value);
// }
