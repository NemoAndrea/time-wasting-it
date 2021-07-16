const LightClock = require('./clock.js');

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
//myClock.setManualTime('03:37:30');


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'interface.html'));
});
app.get('/clock/lights', function(req, res){
    res.json({'lights':myClock.lights, 'PWMlimit':myClock.PWMlimit});
});
app.get('/clock/animating', function(req, res){
    res.json(myClock.animating);
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

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});

//myClock.animating=false;
myClock.startAnimating();
console.log("LightClock Started, with animation set to: ", myClock.animation!==null," !\n");
setInterval(function(){
    // if (myClock.animating) {
    //     myClock.lights.forEach( function (value, index){
    //         myClock.lights[index]=Math.floor(Math.random() * 50)
    //
    //     });
    //     if (myClock.gpio_pins) {
    //         myClock.lightsToGpio();
    //     }
    // } else {
        myClock.updateLights();
    // }
}, 50);


process.on('SIGINT', function() {
    console.log("Caught interrupt signal - stopping LightClock");
    if (myClock.gpio_pins) {
        for (let led of myClock.gpio_pins) {
            led.digitalWrite(0);
        }
    }
    process.exit();
});
