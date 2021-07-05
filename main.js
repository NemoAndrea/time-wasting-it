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


// define numerical array that has intensity value for each of the 12 lamps
var lamps = new Array(12).fill(0);

function chonkchonk(){
    console.log('CATS should not be CHONKS')
}

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/clockstate', function(req, res){
    res.json(lamps); //also tried to do it through .send, but there data only on window in browser
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

function getTimeArray() {
    let JavascriptTime = new Date();
    let out = new Array(12).fill(0);
    let hour = Math.floor(JavascriptTime.getHours() % 12); // 12 hour format
    out[hour] = 255;
    let minute_low = Math.floor( JavascriptTime.getMinutes()/5);
    let minute_high = Math.ceil( JavascriptTime.getMinutes()/5);
    out[minute_high]=144;
    out[minute_low]=144;

    return out
}

let animating = false;

setInterval(function(){
    if (animating) {
        lamps.forEach( function (value, index){
            lamps[index]=Math.floor(Math.random() * 244)
        });
    } else {
        lamps = getTimeArray();
    }
}, 500);
