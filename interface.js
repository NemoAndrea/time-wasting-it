let clockstate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

async function fetchInitialValues() {
    displayTimeMode();

    const res2 = await fetch('http://localhost:3000/clock/animating');
    const animating = await res2.json();
    console.log('Is the clock initially animating?: ', animating)
};

fetchInitialValues();

async function refreshClock() {
    const response = await fetch('http://localhost:3000/clock/lights');
    const data = await response.json();
    return data
};

let javaClockEl = document.querySelector('#javascriptTime');

let clockupdate =  (clock, intensity_limit) => {
    clock.forEach(function (value, index) {
        svgLamp = document.querySelector('#hand_'+(index));
        svgLamp.setAttribute('stroke-width', 70*value/intensity_limit+'px')
    });
};

let JSclockUpdate = () =>{
    let JavascriptTime = new Date();
    javaClockEl.innerHTML = ('0 '+ JavascriptTime.getHours()).slice(-2) + ':' +
        ('0 '+ JavascriptTime.getMinutes()).slice(-2) + ':' +
        ('0 '+ JavascriptTime.getSeconds()).slice(-2);
};

function changeManualTime(){
    // since we have increased the manual time, we need to ensure this is reflected in the input boxes.
    setTimeout(async function (){
        const response = await fetch('http://localhost:3000/clock/time_mode');
        const data = await response.json();  // auto or manual
        document.querySelector('#manual-time-hours').value = data.time.hours;
        document.querySelector('#manual-time-minutes').value = data.time.minutes;
    }, 50);

}

function toggleTimeMode(state) {
    console.log(state);
    // send clock info that it should change time-mode
    document.querySelector('#toggle-time-mode-form').submit();
    setTimeout(function (){
        displayTimeMode();
    }, 50);
}

async function displayTimeMode() {
    const response = await fetch('http://localhost:3000/clock/time_mode');
    const data = await response.json();  // auto or manual
    const time_mode = data.mode;
    console.log('displayTimeMode: response is : ', time_mode);

    // change interface display
    if (time_mode === 'auto') {
        document.querySelector('#time-toggle-button').value = 'manual';
        document.querySelector('#auto-time').style.opacity = 1;
        document.querySelector('#manual-time').style.opacity = 0.3;
        document.querySelector('#manual-time').style.pointerEvents = "none";
        document.querySelector('#time-adder-buttons').style.opacity = 0.3;
        document.querySelector('#time-adder-buttons').style.pointerEvents = "none";
    } else if (time_mode === 'manual'){
        document.querySelector('#time-toggle-button').value = 'auto';
        console.log(document.querySelector('#auto-time'))
        document.querySelector('#auto-time').style.opacity = 0.3;
        document.querySelector('#manual-time').style.opacity = 1;
        document.querySelector('#manual-time').style.pointerEvents = "auto";
        document.querySelector('#time-adder-buttons').style.opacity = 1;
        document.querySelector('#time-adder-buttons').style.pointerEvents = "auto";
        setTimeout(function (){
            document.querySelector('#manual-time-form').submit(); // ensure we submit the manual time set in the HTML
            // element rather than have it reset to 00:00
        }, 50);
    }
}

setInterval(function () {
   //console.log(clockstate)
    refreshClock().then(newClockState => {
        clockstate = newClockState.lights;
        clockupdate(clockstate, newClockState.PWMlimit);
    });
    JSclockUpdate();
}, 500);
