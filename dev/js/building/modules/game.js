import { qs } from './helpers';

const gameField = qs('.js-game');
const gameTimer = qs('.js-game-time');
const gameScore = qs('.js-game-score');
const gameRestart = qs('.js-game-restart');
const gameRestext = qs('.js-game-restext');

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

class Apple {
  constructor() {
    this.lifeCycle = 3;

    this.create();
  }

  create() {
    this.element = document.createElement('span');
    this.element.className = 'game__apple';
    this.element.style = `top: ${randomInteger(1, window.innerHeight - 160)}px; left: ${randomInteger(1, window.innerWidth - 135)}px;`;
    this.element.dataset.type = randomInteger(1, 3);
    gameField.appendChild(this.element);
  }

  destroy() {
    this.element.remove();
  }

  daysGone() {
    if (--this.lifeCycle <= 0) {
      this.element.remove();
    }
  }
}

export default class Game {
  constructor() {
    this.points = 0;

    this.time = 60;
    
    this.apples = [];
    this.gameEnd = false;
    this.gameStart = false;

    this.gameField = gameField;

    this.observer();
    this.eventListerer();

    if (window.location.hash && window.location.hash.substring(1) === 'wantgame' && window.innerWidth > 767) {
      gameField.classList.add('start');
      this.timerStart();
      this.gameStart = true;
      document.body.classList.add('game-start');
    }
  }

  observer() {
    if (this.gameEnd) return;

    this.apples.forEach((apple, ind) => {
      apple.daysGone();
      if (apple.lifeCycle <= 0) this.apples.splice(ind, 1);
    });

    if (this.apples.length < 3) {
      this.apples.push(new Apple());
    }

    setTimeout(this.observer.bind(this), this.gameStart ? (150 + 150 * (80 - this.points) / 80) : 1000);
  }

  eventListerer() {
    gameField.addEventListener('click', ({ target }) => {
      while (target && target.className !== 'game__apple') {
        target = target.parentNode
      }
      if (target && gameField.classList.contains('start')) {
        target.classList.add('kill');
        this.points++;

        this.apples.forEach((apple, ind) => {
          if (apple.element.classList.contains('kill')) {
            apple.destroy();
            this.apples.splice(ind, 1);
          }
        });
      } 
      if (target && !this.gameStart) {
        gameField.classList.add('start');
        this.timerStart();
        this.gameStart = true;
        document.body.classList.add('game-start');
      }
    }, false)

    gameRestart.addEventListener('click', () => {
      this.gameEnd = false;
      gameField.classList.remove('end');
      gameField.classList.add('start');
      this.observer();
    });
  }

  textChanger(points) {
    if (points > 75) {
      gameRestext.innerHTML = `
        <p>Вот это да! ${points} в минуту. Вы там не жульничали, случайно? Возможно все дело в том, что Кубань у вас в крови.</p>
        <p>Вам не за чем пробовать еще раз. Если только вы не хотите устроить мастер-класс.</p>
      `;
    } else if (points >= 55) {
      gameRestext.innerHTML = `
        <p>Отличный результат. ${points} в минуту. Вы очень хорошо собираете яблоки. Приезжайте к нам на Кубань.</p>
        <p>Или хотите попробовать еще разок?</p>
      `;
    } else {
      gameRestext.innerHTML = `
        <p>Что-то слабовато. Всего ${points} в минуту. Вы явно еще не бывали на Кубани. Или вы просто съели половину собранных яблок?</p>
        <p>Хотите попробовать еще разок?</p>
      `;
    }
  }

  timerStart() {
    const minutes = ('0' + Math.floor(this.time / 60)).slice(-2);
    const secs = ('0' + this.time % 60).slice(-2);
    if (minutes !== '00' || secs !== '00') {
      gameTimer.textContent = `${minutes}:${secs}`;
      this.time--;
      setTimeout(this.timerStart.bind(this), 1000);
    } else {
      gameTimer.textContent = `00:00`;
      this.textChanger(this.points);
      gameScore.textContent = this.points;

      this.gameEnd = true;
      gameField.classList.remove('start');
      gameField.classList.add('end');

      this.gameDrop();
    }
  }

  gameDrop() {
    document.body.classList.remove('game-start');
    gameTimer.textContent = `01:00`;
    this.apples.forEach(apple => apple.destroy());
    this.gameStart = false;
    this.points = 0;
    this.time = 60;
  }
}