const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const range = document.querySelector(['input']);

control.addEventListener('input', () => {
  let fontSize = range.value;
  text.style.fontSize = `${fontSize}px`;
});
