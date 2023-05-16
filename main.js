let stopWatch = document.querySelector(".stopwatch");
let startButtonTag = document.querySelector(".startButton");
let pauseButtonTag = document.querySelector(".pauseButton");
let continueButtonTag = document.querySelector(".continueButton");
let resetButtonTag = document.querySelector(".resetButton");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

let timeStart = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }
  let secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  let minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  let hourText = hours < 10 ? "0" + hours.toString() : hours;
  stopWatch.textContent = hourText + ":" + minuteText + ":" + secondText;
}

startButtonTag.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(timeStart, 1000);
  }
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

continueButtonTag.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(timeStart, 1000);
  }
});

resetButtonTag.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopWatch.textContent = "00:00:00";
});
