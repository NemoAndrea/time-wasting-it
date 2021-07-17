const LightClock = require('./clock.js');
const { animationLibrary } = require('./animations.js');

var express = require('express');
var path = require('path');
var open = require('open');
var fs = require('fs');
const bodyParser = require('body-parser');

var port = 3000;
var app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(express.static(__dirname));

let myClock = new LightClock();
// we want to have light values be output to GPIO
myClock.setupGPIO([18,23,24,25,8,7,11,9,10,22,27,17], 50);

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'interface.html'));
});
app.get('/clock/lights', function(req, res){
    res.json({'lights':myClock.lightArray.lights, 'PWMlimit':myClock.PWMlimit});
});
app.get('/clock/animation/name', function(req, res){
    res.json(myClock.animation ? myClock.animation.name : false);
});
app.get('/clock/animation/random', function(req, res){
    res.json(myClock.randomAnimations);
});
app.get('/clock/animation/available', function(req, res){
    res.json(Object.keys(animationLibrary));
});
app.get('/clock/time_mode', function(req, res){
    res.json({'mode':myClock.time_mode, 'time':myClock.time});
});

app.post('/', function(request, respond) {
    console.log(request.body)
    for (let item of Object.keys(request.body)) {
        if (item === 'animate') {
            myClock.startAnimating()
        } else {
            console.log('some other button...')
        }
    }
});

app.post('/manual-time', function(request, respond) {
    console.log('setting the manual time (via web): ', request.body, ' or ', (request.body.hour + ':' + request.body.minute));
    myClock.setManualTime(request.body.hour + ':' + request.body.minute);
});

app.post('/add-time', function(request, respond) {
    console.log(request.body);
    for (let item of Object.keys(request.body)) {
        if (item === 'add-minute') {
            myClock.time.addMinutes(1);
        } else if (item === 'add-5-minute') {
            myClock.time.addMinutes(5);
        } else if (item === 'add-hour') {
            myClock.time.addMinutes(60);
        } else {
            console.log('Failed to manually add time (minutes) to clock')
        }
    }
});

app.post('/toggle-time-mode', function(request, respond) {
    console.log('Toggling time mode');
    if (myClock.time_mode === 'auto') {
        myClock.time_mode='manual'
        console.log('time mode: going manual')
    } else if (myClock.time_mode === 'manual') {
        myClock.time_mode = 'auto';
        console.log('time mode: going auto')
    } else {
        console.log('Error toggling time mode...')
    }
});

app.post('/play-animation', function(request, respond) {
    console.log('Playing html selected animation: ', request.body);
    const animationName = Object.keys(request.body)[0];
    myClock.startAnimating(animationName);
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});

myClock.randomAnimations = false;
//myClock.setManualTime('03:33:20');
//myClock.startAnimating();
console.log("LightClock Started, with animation set to: ", myClock.animation!==null,"\n");
setInterval(function(){
        myClock.updateLights();
    // }
}, 50);

// handle manual closing of the script with CTRL+C
process.on('SIGINT', function() {
    console.log("Caught interrupt signal - stopping LightClock");
    if (myClock.gpio_pins) {
        for (let led of myClock.gpio_pins) {
            led.digitalWrite(0);
        }
    }
    process.exit();
});
