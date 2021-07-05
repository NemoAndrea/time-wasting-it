let clockstate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

async function refreshClock() {
    const response = await fetch('http://localhost:3000/clockstate');
    const data = await response.json();
    return data
};

let javaClockEl = document.querySelector('#javascriptTime');

let clockupdate =  (clock) => {
    clock.forEach(function (value, index) {
        let test = '#hand_'+(index);
        svgLamp = document.querySelector(test);
        svgLamp.setAttribute('stroke-width', 70/255*value+'px')
    });
};

let JSclockUpdate = () =>{
    let JavascriptTime = new Date();
    javaClockEl.innerHTML = ('0 '+ JavascriptTime.getHours()).slice(-2) + ':' +
        ('0 '+ JavascriptTime.getMinutes()).slice(-2) + ':' +
        ('0 '+ JavascriptTime.getSeconds()).slice(-2);
};

function toggleTimeMode(state) {
    console.log(state);
    if (state === 'auto') {
        document.querySelector('#time-toggle-button').value = 'manual';
        document.querySelector('#auto-time').style.opacity = 1;
        document.querySelector('#manual-time').style.opacity = 0.3;
    } else if (state === 'manual'){
        document.querySelector('#time-toggle-button').value = 'auto';
        console.log(document.querySelector('#auto-time'))
        document.querySelector('#auto-time').style.opacity = 0.3;
        document.querySelector('#manual-time').style.opacity = 1;
    }
}

setInterval(function () {
   //console.log(clockstate)
    refreshClock().then(newClockState => {
        clockstate = newClockState
        clockupdate(clockstate);
    });
    JSclockUpdate();
}, 500);
