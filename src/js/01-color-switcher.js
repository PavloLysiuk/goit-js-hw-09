// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const selectors = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

selectors.startBtn.addEventListener('click', onClickStartBtn);
selectors.stopBtn.setAttribute('disabled', '');

let timer;

function onClickStartBtn() {
  selectors.body.style.backgroundColor = getRandomHexColor();
  timer = setInterval(
    () => (selectors.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  selectors.startBtn.setAttribute('disabled', '');
  selectors.stopBtn.removeAttribute('disabled');
  selectors.stopBtn.addEventListener('click', onClickStopBtn);
}

function onClickStopBtn() {
  clearInterval(timer);
  selectors.startBtn.removeAttribute('disabled');
  selectors.stopBtn.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
