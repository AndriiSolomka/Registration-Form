'use strict';

import {
  URL,
  logInBtn,
  getUserName,
  signUpBtn,
  hideAge,
  hideEmail,
  signInBtn,
  getUserPassword,
} from '../const/const.js';
import { getUserData } from '../main/main.js';

const getUserInformation = async (URL) => {
  const data = await getUserData(URL);
  const names = data.map((person) => person.name);
  const passwords = data.map((person) => person.password);
  setupNameInput(names);
  setupPassword(passwords);
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

const checkName = (name) => {
  const nameRegex = /^[a-zA-Z]{3,12}$/;
  return nameRegex.test(name);
};

const setupPassword = (passwords) => {
  getUserPassword.addEventListener('input', (event) => {
    const inputPassword = event.target.value.trim();
    const isPasswordTaken = passwords.includes(inputPassword);
    const correctPassword = checkPassword(inputPassword);
    console.log(inputPassword);
    if (!isPasswordTaken && correctPassword) {
      logInBtn.style.backgroundColor = '';
      newUser.password = inputPassword;
    } else {
      logInBtn.style.backgroundColor = 'red';
    }
  });
};

const checkPassword = (password) => {
  const options = {
    minLength: 8,
    maxLength: 20,
    specialChars: '!@#$%^&*()_+-=[]{};:\'"\\|,.<>/?',
  };

  /*  if (
    password.length < options.minLength ||
    password.length > options.maxLength
  ) {
    return false;
  }
 */
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for (const char of password) {
    if (char >= 'A' && char <= 'Z') {
      hasUpperCase = true;
    } else if (char >= 'a' && char <= 'z') {
      hasLowerCase = true;
    } else if (char >= '0' && char <= '9') {
      hasNumber = true;
    } else if (options.specialChars.includes(char)) {
      hasSpecialChar = true;
    }
  }

  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

signUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  hideEmail.classList.toggle('hidden');
  hideAge.classList.toggle('hidden');
  signInBtn.classList.toggle('hidden');
  logInBtn.classList.toggle('hidden');
});

getUserInformation(URL);

/* setTimeout(() => {
  console.log(newUser);
}, 8000); */

export { setupNameInput };
