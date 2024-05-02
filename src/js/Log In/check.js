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

const checkName = (name) => {
  const nameRegex = /^[a-zA-Z]{3,12}$/;
  return nameRegex.test(name);
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

const checkPassword = (password) => {
  const options = {
    minLength: 8,
    maxLength: 20,
    specialChars: '!@#$%^&*()_+-=[]{};:\'"\\|,.<>/?',
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasNeedLength: false,
    hasSpace: false,
    status: null,
  };

  const minLength = password.length >= options.minLength;
  const maxLength = password.length <= options.maxLength;

  if (minLength && maxLength) {
    options.hasNeedLength = true;
  }

  for (const char of password) {
    if (char >= 'A' && char <= 'Z') {
      options.hasUpperCase = true;
    } else if (char >= 'a' && char <= 'z') {
      options.hasLowerCase = true;
    } else if (char >= '0' && char <= '9') {
      options.hasNumber = true;
    } else if (options.specialChars.includes(char)) {
      options.hasSpecialChar = true;
    } else if (char === ' ') {
      options.hasSpace = true;
    }
  }

  if (
    options.hasUpperCase &&
    options.hasLowerCase &&
    options.hasNumber &&
    options.hasSpecialChar &&
    options.hasNeedLength &&
    !options.hasSpace
  ) {
    options.status = true;
  } else {
    options.status = false;
  }

  return options.status;
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

const checkEmail = (email) => {
  const options = {
    maxLength: 50,
    minLength: 2,
    specialChars: '!#$%^&*()_+-=[]{};:\'"\\|,<>/?',
    domain: 'ru',
  };

  const unCorrectChars =
    options.specialChars && email.endsWith('.' + options.domain);

  if (email.length > options.maxLength || email.length < options.minLength) {
    return false;
  } else if (unCorrectChars) {
    return false;
  } else if (!email.includes('@')) {
    return false;
  } else if (email.indexOf('@') > email.lastIndexOf('.')) {
    return false;
  }

  return true;
};

const setupAge = () => {
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

signUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getUserEmail.classList.toggle('hidden');
  getUserAge.classList.toggle('hidden');
  signInBtn.classList.toggle('hidden');
  logInBtn.classList.toggle('hidden');
});

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
