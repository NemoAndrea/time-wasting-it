// Required to have the HTML interface (./interface directory) work with the clock
const { animationLibrary } = require('../animations.js');

var express = require('express');
var path = require('path');
var open = require('open');
var fs = require('fs');
const bodyParser = require('body-parser');

module.exports = function startWebInterface(clock, local_port) {
    console.log(`<< Launching the WebInterface on localhost:${local_port} >>`);
    const  port = local_port;
    let app = express();
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );
    app.use(express.static(__dirname));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'interface.html'));
    });
    app.get('/clock/lights', function (req, res) {
        res.json({'lights': clock.lightArray.lights, 'PWMlimits': clock.PWMlimits});
    });
    app.get('/clock/animation/name', function (req, res) {
        res.json(clock.animation ? clock.animation.name : false);
    });
    app.get('/clock/animation/random-frequency', function (req, res) {
        res.json(clock.randomAnimationFrequency);
    });
    app.get('/clock/animation/available', function (req, res) {
        res.json(Object.keys(animationLibrary));
    });
    app.get('/clock/time_mode', function (req, res) {
        res.json({'mode': clock.timeMode, 'time': clock.time});
    });

    app.post('/', function (request, respond) {
        console.log(request.body)
        for (let item of Object.keys(request.body)) {
            if (item === 'animate') {
                clock.startAnimating()
            }
        }
    });

    app.post('/manual-time', function (request, respond) {
        console.log('setting the manual time (via web): ', request.body, ' or ', (request.body.hour + ':' + request.body.minute));
        clock.setManualTime(request.body.hour + ':' + request.body.minute);
    });

    app.post('/add-time', function (request, respond) {
        console.log(request.body);
        for (let item of Object.keys(request.body)) {
            if (item === 'add-minute') {
                clock.time.addMinutes(1);
            } else if (item === 'add-5-minute') {
                clock.time.addMinutes(5);
            } else if (item === 'add-hour') {
                clock.time.addMinutes(60);
            } else {
                console.log('Failed to manually add time (minutes) to clock')
            }
        }
    });

    app.post('/toggle-time-mode', function (request, respond) {
        console.log('Toggling time mode');
        if (clock.timeMode === 'auto') {
            clock.timeMode = 'manual'
            console.log('time mode: going manual')
        } else if (clock.timeMode === 'manual') {
            clock.timeMode = 'auto';
            console.log('time mode: going auto')
        } else {
            console.log('Error toggling time mode...')
        }
    });

    app.post('/play-animation', function (request, respond) {
        console.log('Playing html selected animation: ', request.body);
        const animationName = Object.keys(request.body)[0];
        clock.startAnimating(animationName);
    });

    app.listen(port, function (err) {
        if (err) {
            console.log(err);
        } else {
            open('http://localhost:' + port);
        }
    });
}
