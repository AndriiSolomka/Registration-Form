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
  const elementsToToggle = [
    getUserEmail,
    getUserAge,
    signInBtn,
    logInBtn,
    botCheckBTN,
    passwordBtn,
  ];

  elementsToToggle.forEach((element) => element.classList.toggle('hidden'));
  const elementsToDisable = [logInBtn, botCheckBTN];

  elementsToDisable.forEach((element) => {
    element.style.opacity = '0.5';
    element.style.pointerEvents = 'none';
  });
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
    const resetName = '';

    newUser['username'] = correctName ? inputName : resetName;

    validateForm();
  });
};
setupNameInput();

const setupPasswordInput = () => {
  getUserPassword.addEventListener('input', (event) => {
    const inputPassword = event.target.value.trim();
    const correctPassword = checkPassword(inputPassword);
    const resetPassword = '';

    newUser['password'] = correctPassword ? inputPassword : resetPassword;

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
    const resetEmail = '';

    newUser['email'] = correctEmail ? inputEmail : resetEmail;

    validateForm();
  });
};
setupEmailInput();

const setupAgeInput = () => {
  getUserAge.addEventListener('input', (event) => {
    const inputAge = Number(event.target.value.trim());
    const minAge = 5;
    const maxAge = 100;
    const isAgeValid = inputAge <= maxAge && inputAge >= minAge;
    const resetAge = '';

    newUser.age = isAgeValid ? inputAge : resetAge;

    validateForm();
  });
};
setupAgeInput();

const validateForm = (human) => {
  const { username, email, password, age } = newUser;
  if (username && email && password && age) {
    setButtonState(botCheckBTN, true);
    if (human) {
      doBtnOn();
    }
  } else {
    doBtnOff();
  }
};

const setButtonState = (button, isEnabled) => {
  button.style.pointerEvents = isEnabled ? 'auto' : 'none';
  button.style.opacity = isEnabled ? '1' : '0.5';
};

const doBtnOn = () => {
  setButtonState(logInBtn, true);
};

const doBtnOff = () => {
  setButtonState(logInBtn, false);
  setButtonState(botCheckBTN, false);
};

logInBtn.addEventListener('click', async () => {
  await checkUserData(newUser);
});

const checkUserData = async (newUser) => {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify(newUser),
  });

  response.ok ? location.reload() : alert('Такий юзер вже є');
};

export { validateForm };
