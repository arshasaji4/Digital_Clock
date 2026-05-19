
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
const section=document.querySelector("#sections");


const displayTime=()=>{
let date = new Date();

let hrs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

if (hrs >= 12) {
    section.innerHTML = "PM";
} else {
    section.innerHTML = "AM";
}

if (hrs > 12) {
    hrs = hrs - 12;
}
if (sec < 10) {
    sec = "0" + sec;
}

if (min < 10) {
    min = "0" + min;
}

if (hrs < 10) {
    hrs = "0" + hrs;
}

hours.innerHTML = hrs;
minutes.innerHTML = min;
seconds.innerHTML = sec;
};

setInterval(displayTime, 10);