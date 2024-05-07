'use strict';

import {
  base_URL,
  logInBtn,
  getUserName,
  signUpBtn,
  getUserAge,
  getUserEmail,
  signInBtn,
  getUserPassword,
} from '../const/const.js';
import { checkEmail, checkName, checkPassword } from './check.js';

signUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getUserEmail.classList.toggle('hidden');
  getUserAge.classList.toggle('hidden');
  signInBtn.classList.toggle('hidden');
  logInBtn.classList.toggle('hidden');
});

const newUser = {
  name: '',
  email: '',
  password: '',
  age: '',
};

const setupNameInput = () => {
  getUserName.addEventListener('input', (event) => {
    const inputName = event.target.value.trim();
    const correctName = checkName(inputName);

    if (correctName) {
      logInBtn.style.backgroundColor = '';
      newUser.name = inputName;
    } else {
      logInBtn.style.backgroundColor = 'red';
    }
  });
};
setupNameInput();

const setupPasswordInput = () => {
  getUserPassword.addEventListener('input', (event) => {
    const inputPassword = event.target.value.trim();
    const correctPassword = checkPassword(inputPassword);

    if (correctPassword) {
      logInBtn.style.backgroundColor = '';
      newUser.password = inputPassword;
    } else {
      logInBtn.style.backgroundColor = 'red';
    }
  });
};
setupPasswordInput();

const setupEmailInput = () => {
  getUserEmail.addEventListener('input', (event) => {
    const inputEmail = event.target.value.trim();
    const correctEmail = checkEmail(inputEmail);

    if (correctEmail) {
      logInBtn.style.backgroundColor = '';
      newUser.email = inputEmail;
    } else {
      logInBtn.style.backgroundColor = 'red';
    }
  });
};
setupEmailInput();

const setupAgeInput = () => {
  getUserAge.addEventListener('input', (event) => {
    const inputAge = Number(event.target.value.trim());

    if (inputAge <= 100 && inputAge > 0) {
      logInBtn.style.backgroundColor = '';
      newUser.age = String(inputAge);
    } else {
      logInBtn.style.backgroundColor = 'red';
    }
  });
};
setupAgeInput();

logInBtn.addEventListener('click', async () => {
  try {
    await fetch(base_URL, {
      method: 'POST',
      body: JSON.stringify(newUser),
    });
  } catch (error) {
    console.error(error);
  }
});

export { setupNameInput };
