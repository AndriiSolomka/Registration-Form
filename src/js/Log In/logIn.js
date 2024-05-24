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
  botCheckBTN,
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
  logInBtn.style.opacity = '0.5';
  logInBtn.style.pointerEvents = 'none';
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
      newUser.username = inputName;
    } else {
      newUser.username = '';
    }
    validateForm();
  });
};
setupNameInput();

const setupPasswordInput = () => {
  getUserPassword.addEventListener('input', (event) => {
    const inputPassword = event.target.value.trim();
    const correctPassword = checkPassword(inputPassword);

    if (correctPassword) {
      newUser.password = inputPassword;
    }
    validateForm();
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
      newUser.email = inputEmail;
    }
    validateForm();
  });
};
setupEmailInput();

const setupAgeInput = () => {
  getUserAge.addEventListener('input', (event) => {
    const inputAge = Number(event.target.value.trim());
    if (inputAge < 100 && inputAge > 5) {
      newUser.age = inputAge;
    }
    validateForm();
  });
};
setupAgeInput();

const validateForm = (human) => {
  const { username, email, password, age } = newUser;
  if (username && email && password && age) {
    botCheckBTN.classList.toggle('hidden');
    if (human) {
      doBtnOn();
    }
  } else {
    doBtnOff();
  }
};

const doBtnOn = () => {
  logInBtn.disabled = false;
  logInBtn.style.pointerEvents = 'auto';
  logInBtn.style.opacity = '1';
};

const doBtnOff = () => {
  logInBtn.disabled = true;
  logInBtn.style.pointerEvents = 'none';
  logInBtn.style.opacity = '0.5';
};

logInBtn.addEventListener('click', async () => {
  checkUserData(newUser);
});

const checkUserData = async (newUser) => {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify(newUser),
  });

  if (response.ok) {
    location.reload();
  } else {
    alert('Такий юзер вже є');
  }
};

export { validateForm };
