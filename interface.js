let clockstate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

async function refreshClock() {
    const response = await fetch('http://localhost:3000/clockstate');
    const data = await response.json();
    return data
};

let javaClockEl = document.querySelector('#javascriptTime');

console.log('clockEL is : >>>>> : ', javaClockEl)

let clockupdate =  (clock) => {
    clock.forEach(function (value, index) {
        test = '#hand_'+(index)
        console.log(test)
        svgLamp = document.querySelector(test);
        svgLamp.setAttribute('stroke-width', 70/255*value+'px')
    });
};

let JSclockUpdate = () =>{
    let JavascriptTime = new Date();
    javaClockEl.innerHTML = JavascriptTime.getHours() + ':' + JavascriptTime.getMinutes() + ':' + JavascriptTime.getSeconds();
};

setInterval(function () {
    console.log(clockstate)
    refreshClock().then(newClockState => {
        clockstate = newClockState
        clockupdate(clockstate);
    });
    JSclockUpdate();

    console.log('clockstate', clockstate);
}, 500);
