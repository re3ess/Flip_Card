const cards = document.querySelectorAll('.card');
timeTag = document.querySelector('.time b');
flipsTag = document.querySelector('.flips b');
refreshBtn = document.querySelector('.details button');

let maxTime = 20;
let timeLeft = maxTime;
let flips = 0;
let matchedCards = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
  if (timeLeft <= 0) {
    return clearInterval(timer);
  }
  timeLeft--;
  timeTag.innerText = timeLeft;
}

function flipCard({ target: clickedCard }) {
  if (!isPlaying) {
    isPlaying = true;
    timer = setInterval(initTimer, 1000)
  }
}
