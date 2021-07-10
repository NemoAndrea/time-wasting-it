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
myClock.animating=true;
// we want to have light values be output to GPIO
myClock.setupGPIO([18,17,23,22], 50);


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'interface.html'));
});
app.get('/clockstate', function(req, res){
    res.json(myClock.lights); //also tried to do it through .send, but there data only on window in browser
});

app.post('/', function(request, respond) {
    console.log(request.body)
    for (let item of Object.keys(request.body)) {
        if (item === 'animate') {
            animating = !animating;
        } else {
            console.log('some other button...')
        }
    }
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});

setInterval(function(){
    if (myClock.animating) {
        myClock.lights.forEach( function (value, index){
            myClock.lights[index]=Math.floor(Math.random() * 244)

        });
        myClock.lightsToGpio();
    } else {
        myClock.updateLights();
        console.log('Updating lights...')
    }
}, 500);


process.on('SIGINT', function() {
    console.log("Caught interrupt signal - stopping LightClock");
    for (let led of myClock.gpio_pins) {
        led.digitalWrite(0);
    }
    process.exit();
});
