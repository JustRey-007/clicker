let clicks = 1;

const TIMEOUT = 10500;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;


function start() {
    const startTime = Date.now();

    display.textContent = formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 1);

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Молодець!';

        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}

const showButton = document.getElementById('button');
const invisibleButton = document.getElementById('myButton');

showButton.addEventListener('click', () => {

  invisibleButton.style.display = 'block';

  showButton.classList.add('visible');
});

volumeControl = document.getElementById("volume");
audio = document.getElementById("myAudio");

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function setVolume() {
  audio.volume = volumeControl.value;
}