const subtractButton = document.querySelector("#subtract");
const myTime = document.querySelector("#myTimer");
const addButton = document.querySelector("#addition");
const resetButton = document.querySelector("#reset");
const startButton = document.querySelector("#start");

let timer = 0;
let interval;

function initTimer() {
  console.log("Timer initialized");
  interval = setInterval(() => {
    if (timer < 0) return;
    myTime.textContent = timer + "S";
    timer++;
    console.log(timer);
  }, 1000);
}

function startTimer() {
  timer++;
}

function subtractTime() {
  timer--;
  if (timer < 0) {
    timer = 0;
  }
}

function resetTimer() {
  timer = 0;
}

startButton.addEventListener("click", startTimer);
subtractButton.addEventListener("click", subtractTime);
resetButton.addEventListener("click", resetTimer);

window.onload = initTimer;
window.onbeforeunload = function () {
  clearInterval(interval);
};
