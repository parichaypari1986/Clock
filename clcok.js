let secondHand = document.querySelector(".second-hand");
let minuteHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function setDate() {
const nowTime  = new Date();
const seconds = nowTime.getSeconds();
const minutes = nowTime.getMinutes();
const hours = nowTime.getHours();

const secondsInDegree = ((seconds/60)*360) + 90;

secondHand.style.transform = `rotate(${secondsInDegree}deg)`;

const minutesInDegree = ((minutes / 60) * 360) + 90;
minuteHand.style.transform = `rotate(${minutesInDegree}deg)`;

const hoursInDegree = ((hours / 60) * 360) + 90;
hourHand.style.transform = `rotate(${hoursInDegree}deg)`;
}

setInterval(setDate, 1000);