const LightClock = require('./clock.js')

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
console.log('intiial time state', myClock.time)

function chonkchonk(){
    console.log('CATS should not be CHONKS')
}

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
    } else {
        myClock.updateLights()
    }
}, 500);
