function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// print the time every 1000 milisecond (every 1 second)
setInterval(printTime, [1000]);