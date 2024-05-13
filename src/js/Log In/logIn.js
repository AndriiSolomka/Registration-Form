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
  passwordBtn,
  passwordLength,
} from '../const/const.js';
import { getUserData } from '../main/main.js';
import { checkEmail, checkName, checkPassword } from './check.js';
import { generatePassword } from './randomPassword.js';
//console.log(generatePassword(12));

signUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getUserEmail.classList.toggle('hidden');
  getUserAge.classList.toggle('hidden');
  signInBtn.classList.toggle('hidden');
  logInBtn.classList.toggle('hidden');
  passwordBtn.classList.toggle('hidden');
});

const newUser = {
  name: '',
  email: '',
  password: '',
  age: '',
  id: '',
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
  try {
    const allUsers = await getUserData(base_URL);
    const registeredName = allUsers.map((person) => person.name);
    const registeredEmail = allUsers.map((person) => person.email);
    const userId = allUsers.map((person) => parseFloat(person.id));
    if (
      registeredName.includes(newUser.name) ||
      registeredEmail.includes(newUser.email)
    ) {
      logInBtn.style.backgroundColor = 'red';
    } else {
      newUser.id = userId.at(-1) + 1;
      fetch(base_URL, {
        method: 'POST',
        body: JSON.stringify(newUser),
      });
    }
  } catch (error) {
    console.error(error);
  }
});

setTimeout(() => {
  console.log(newUser);
}, 10000);
export { setupNameInput };
