const input = document.querySelector('#validation-input');

input.addEventListener('blur', () =>
  input.value.length <= input.dataset.length
    ? (input.classList = 'invalid')
    : (input.classList = 'valid')
);
