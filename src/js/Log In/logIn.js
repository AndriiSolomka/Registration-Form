'use strict';

import {
  LOGIN_URL,
  logInBtn,
  getUserName,
  signUpBtn,
  getUserAge,
  getUserEmail,
  signInBtn,
  getUserPassword,
  passwordBtn,
  passwordLength,
} from '../const/const.js';
import { checkEmail, checkName, checkPassword } from './check.js';
import { generatePassword } from './randomPassword.js';

signUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getUserEmail.classList.toggle('hidden');
  getUserAge.classList.toggle('hidden');
  signInBtn.classList.toggle('hidden');
  logInBtn.classList.toggle('hidden');
  passwordBtn.classList.toggle('hidden');
});

const newUser = {
  username: '',
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
      newUser.username = inputName;
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

const doGenerate = () => {
  const passwordField = document.getElementById('password');

  passwordBtn.addEventListener('click', () => {
    const generatedPassword = generatePassword(passwordLength);
    newUser.password = generatedPassword;
    passwordField.type = 'text';
    passwordField.value = generatedPassword;
  });
};
doGenerate();

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
      newUser.age = inputAge;
    } else {
      logInBtn.style.backgroundColor = 'red';
    }
  });
};
setupAgeInput();

logInBtn.addEventListener('click', async () => {
  checkUserData(newUser);
});

const checkUserData = async (newUser) => {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify(newUser),
  });

  if (response.ok) {
    alert('Такий юзер вже є');
  } 
};
