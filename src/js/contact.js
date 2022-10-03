const form = document.querySelector('#contact-form');
const inputs = document.querySelectorAll('.form-input');
const labels = document.querySelectorAll('.form-label');
const textArea = document.getElementById('message');

let textAreaValue = '';

const textErrorMessage = textArea.nextElementSibling;
textArea.addEventListener('keyup', (e) => {
  textAreaValue = textArea.value;
  if (textArea.value !== '') {
    e.target.previousElementSibling.classList.add('hide');
    textArea.style.borderBottom = '3px solid #6c8294';
    textErrorMessage.classList.remove('showError');
  } else {
    e.target.previousElementSibling.classList.remove('hide');
    e.target.previousElementSibling.style.color = '#ff0000';
    textArea.style.borderBottom = '1px solid #ff0000';
    textErrorMessage.classList.add('showError');
  }
});

inputs.forEach((input, index) => {
  const errorMessage = input.nextElementSibling;
  input.addEventListener('keyup', (e) => {
    inputValue = input.value;
    if (input.value !== '') {
      labels[index].classList.add('hide');
      input.style.borderBottom = '2px solid #6c8294';
      errorMessage.classList.remove('showError');
    } else {
      labels[index].classList.remove('hide');
      labels[index].style.color = '#ff0000';
      input.style.borderBottom = '1px solid #ff0000';
      errorMessage.classList.add('showError');
    }
  });
});

let check = false;
function validateEmail() {
  const email = inputs[1];
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    document.querySelector('.email-format-error').classList.add('showError');
    email.style.borderBottom = '1px solid #ff0000';
    try {
      document.querySelector('.email-error').classList.remove('showError');
    } catch {}
  } else {
    document.querySelector('.email-format-error').classList.remove('showError');
    email.style.borderBottom = '2px solid #6c8294';
    check = true;
  }
}

form.addEventListener('submit', (e) => {
  inputs.forEach((input, index) => {
    const errorMessage = input.nextElementSibling;
    if (input.value == '') {
      errorMessage.classList.add('showError');
      labels[index].style.color = '#ff0000';
      input.style.borderBottom = '1px solid #ff0000';
    } else {
      errorMessage.classList.remove('showError');
      labels[index].style.color = '#6c8294';
      input.style.borderBottom = '1px solid #6c8294';
      validateEmail();
    }
  });

  if (textArea.value == '') {
    textErrorMessage.classList.add('showError');
    textArea.style.borderBottom = '1px solid #ff0000';
    textArea.previousElementSibling.style.color = '#ff0000';
  } else {
    textErrorMessage.classList.remove('showError');
    textArea.style.borderBottom = '1px solid #6c8294';
    textArea.previousElementSibling.style.color = '#6c8294';
  }

  try {
    if (
      check &&
      inputs[0].value != '' &&
      inputs[1].value != '' &&
      inputs[2].value != '' &&
      textArea.value != ''
    ) {
      inputs.forEach((input, index) => {
        input.value = '';
        input.style.borderBottom = '1px solid #6c8294';
        labels[index].classList.remove('hide');
      });

      textArea.value = '';
      textArea.style.borderBottom = '1px solid #6c8294';
      textArea.previousElementSibling.classList.remove('hide');

      document.querySelector('#checkbox').classList.add('remove');
    } else {
      e.preventDefault();
    }
  } catch (err) {}
});
