let d = new Date();
let second = 1000;
setInterval(printTime, second)
function printTime() {
    let time = d.toLocaleTimeString();
    console.log(time);
}
