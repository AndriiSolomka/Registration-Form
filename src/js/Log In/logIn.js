'use strict';

import {
  URL,
  logInBtn,
  getUserName,
  signUpBtn,
  getUserAge,
  getUserEmail,
  signInBtn,
  getUserPassword,
} from '../const/const.js';
import { getUserData } from '../main/main.js';
import { checkEmail, checkName, checkPassword } from './check.js';

signUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getUserEmail.classList.toggle('hidden');
  getUserAge.classList.toggle('hidden');
  signInBtn.classList.toggle('hidden');
  logInBtn.classList.toggle('hidden');
});

const getUserInformation = async (URL) => {
  const data = await getUserData(URL);
  const names = data.map((person) => person.name);
  const passwords = data.map((person) => person.password);
  const emails = data.map((person) => person.email);
  setupNameInput(names);
  setupPassword(passwords);
  setupEmail(emails);
  setupAge();
};

let newUser = {
  name: '',
  email: '',
  password: '',
  age: '',
};

const setupNameInput = (names) => {
  getUserName.addEventListener('input', (event) => {
    const inputName = event.target.value.trim();
    const isNameTaken = names.includes(inputName);
    const correctName = checkName(inputName);

    if (!isNameTaken && correctName) {
      logInBtn.style.backgroundColor = '';
      newUser.name = inputName;
    } else {
      logInBtn.style.backgroundColor = 'red';
    }
  });
};

const setupPassword = (passwords) => {
  getUserPassword.addEventListener('input', (event) => {
    const inputPassword = event.target.value.trim();
    const isPasswordTaken = passwords.includes(inputPassword);
    const correctPassword = checkPassword(inputPassword);

    if (!isPasswordTaken && correctPassword) {
      logInBtn.style.backgroundColor = '';
      newUser.password = inputPassword;
    } else {
      logInBtn.style.backgroundColor = 'red';
    }
  });
};

const setupEmail = (emails) => {
  getUserEmail.addEventListener('input', (event) => {
    const inputEmail = event.target.value.trim();
    const isEmailTaken = emails.includes(inputEmail);
    const correctEmail = checkEmail(inputEmail);

    if (!isEmailTaken && correctEmail) {
      logInBtn.style.backgroundColor = '';
      newUser.email = inputEmail;
    } else {
      logInBtn.style.backgroundColor = 'red';
    }
  });
};

const setupAge = () => {
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

logInBtn.addEventListener('click', async () => {
  try {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(newUser),
    });
  } catch (error) {
    console.error(error);
  }
});

getUserInformation(URL);
export { setupNameInput };
