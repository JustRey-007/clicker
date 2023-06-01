let clicks = 1;

// объявление основных переменных
const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;

// основной функционал
function start() {
  const achievements = [
    { clicksRequired: 11, imageSrc: 'Досягнення(1).png' },
    { clicksRequired: 101, imageSrc: 'Досягнення(2).png' },
    { clicksRequired: 201, imageSrc: 'Досягнення(3).png' },
    { clicksRequired: 301, imageSrc: 'Досягнення(4).png' },
    { clicksRequired: 401, imageSrc: 'Досягнення(5).png' },
    { clicksRequired: 701, imageSrc: 'Досягнення(6).png' },
    { clicksRequired: 1201, imageSrc: 'Досягнення(7).png' },
    { clicksRequired: 2001, imageSrc: 'Досягнення(8).png' },
    { clicksRequired: 4001, imageSrc: 'Досягнення(9).png' },
    { clicksRequired: 8001, imageSrc: 'Досягнення(10).png' },
    { clicksRequired: 15001, imageSrc: 'Досягнення(11).png' },
    { clicksRequired: 30001, imageSrc: 'Досягнення(12).png' },
  ];

  const achievedAchievements = [];
  // клики
  button.onclick = () => {
    counter.textContent = clicks++;

    // Проверка достижений
    achievements.forEach((achievement) => {
      if (clicks === achievement.clicksRequired  && !achievedAchievements.includes(achievement)) {
        addToAchievements(achievement);
        achievedAchievements.push(achievement);
      }
    });
  };
}
  // вывод достижений на экран
function addToAchievements(achievement) {
  const image = document.createElement('img');
  image.src = achievement.imageSrc;
  image.classList.add('animated-image');
  display.appendChild(image);

  playAchievementSound();

  setTimeout(() => {
    image.classList.add('exit');
    setTimeout(() => {
      display.removeChild(image);
    }, 3000); // Время задержки перед исчезновением (в миллисекундах)
  }, 3000); // Время задержки перед запуском анимации исчезновения (в миллисекундах)

  // Добавление изображения в список достижений
  const achievementsList = document.getElementById('achievements-list');
  const listItem = document.createElement('li');
  const listItemImage = document.createElement('img');
  listItemImage.src = achievement.imageSrc;
  listItem.appendChild(listItemImage);
  achievementsList.appendChild(listItem);
}start();

  // воспроизведение музыки при получении достижения
function playAchievementSound() {
  const achieveSound = new Audio('rare-achievement.mp3')
  achieveSound.play();
}

  // кнопка проигрыватель + ползунок громкости
let audio = document.getElementById('audio');
let playIcon = document.getElementById('playIcon');
let volumeControl = document.getElementById('volumeControl');
let soundContainer = document.getElementById('soundContainer');
let isPlaying = false;

  // изменение кнопки при клике
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
