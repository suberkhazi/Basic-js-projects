const clock = document.getElementById('clock');

setInterval(function timer(){
    let date = new Date;
    clock.innerHTML = date.toLocaleTimeString();
    console.log(clock)
}, 1000)