function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const background = document.querySelector('.color');
const widget = document.querySelector('.widget');

button.addEventListener(
  'click',
  () => (
    (background.textContent = getRandomHexColor()),
    (widget.style.backgroundColor = background.textContent)
  )
);
