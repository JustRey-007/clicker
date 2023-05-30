let clicks = 1;

// объявление основных переменных
const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;

// функция клики
function start() {
  button.onclick = () => {
    counter.textContent = clicks++;
    // достижение
    if (clicks === 11) {
      const image = document.createElement('img');
      image.src = 'Досягнення.png'; // Замените на путь к вашему изображению
      image.classList.add('animated-image');
      display.appendChild(image);

      setTimeout(() => {
        image.classList.add('exit');
        setTimeout(() => {
          display.removeChild(image);
        }, 2000); // Время задержки перед исчезновением (в миллисекундах)
      }, 3000); // Время задержки перед запуском анимации исчезновения (в миллисекундах)
    }
  };
}

start();

// кнопка проигрыватель + ползунок громкости
let audio = document.getElementById('audio');
let playIcon = document.getElementById('playIcon');
let volumeControl = document.getElementById('volumeControl');
let soundContainer = document.getElementById('soundContainer');
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playIcon.src = 'no-sound-icon.png';
    playIcon.alt = 'Pause Icon';
  } else {
    audio.play();
    playIcon.src = 'sound-icon.png';
    playIcon.alt = 'Play Icon';
  }

  isPlaying = !isPlaying;
}

function showVolumeControl() {
  volumeControl.style.display = 'block';
}

function hideVolumeControl() {
  volumeControl.style.display = 'none';
}

function setVolume() {
  audio.volume = volumeControl.value;
}

soundContainer.addEventListener('mouseenter', showVolumeControl);
soundContainer.addEventListener('mouseleave', hideVolumeControl);
