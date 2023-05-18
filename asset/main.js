let stopWatch = document.querySelector(".stopwatch");
let startButtonTag = document.querySelector(".startButton");
let pauseButtonTag = document.querySelector(".pauseButton");
let continueButtonTag = document.querySelector(".continueButton");
let resetButtonTag = document.querySelector(".resetButton");
let dateNow = document.getElementsByClassName("dateNow")[0];
let clockNow = document.getElementsByClassName("clock")[0]


let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() +1 ;
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second1 = date.getSeconds()


let time = "Today : " + day + "/ " +month+" /" + year



dateNow.textContent = time;

function clockOfNow() {
	
	let secText = second1 <10 ? "0" + second1.toString() : second1
	let minText = minute < 10 ? "0" + minute.toString() :minute;
	let hourText1 = hour <10 ? "0" + hour.toString() : hour;
	
	let AmPm = hour < 12 ? "AM" : "PM";

	let clock = hourText1 + " : " +minText+ " : " + secText +
	" " + AmPm
	
	second1+=1
	if(second1 === 60){
		second1=0;
		minute+=1
	}
	
	if(minute===60){
		minute =0;
		hour +=1;
	}
	clockNow.textContent = clock
}

setInterval(clockOfNow,1000)

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
