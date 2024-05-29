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
import { checkEmail, checkName, checkPassword, checkAge } from './check.js';
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

  for (const element of elementsToToggle) {
    element.classList.toggle('hidden');
  }

  const elementsToDisable = [logInBtn, botCheckBTN];

  for (const element of elementsToDisable) {
    element.style.opacity = '0.5';
    element.style.pointerEvents = 'none';
  }
});

const newUser = {
  username: '',
  email: '',
  password: '',
  age: '',
};

const setupNameInput = (event) => {
  const inputName = event.target.value.trim();
  const correctName = checkName(inputName);
  const resetName = '';

  newUser['username'] = correctName ? inputName : resetName;

  validateForm();
};
getUserName.addEventListener('input', (event) => setupNameInput(event));

const setupPasswordInput = (event) => {
  const inputPassword = event.target.value.trim();
  const correctPassword = checkPassword(inputPassword);
  const resetPassword = '';

  newUser['password'] = correctPassword ? inputPassword : resetPassword;

  validateForm();
};
getUserPassword.addEventListener('input', (event) => setupPasswordInput(event));

const doGenerate = () => {
  const passwordField = document.getElementById('password');

  const generatedPassword = generatePassword(passwordLength);
  newUser['password'] = generatedPassword;
  passwordField.type = 'text';
  passwordField.value = generatedPassword;
};
passwordBtn.addEventListener('click', () => doGenerate());

const setupEmailInput = (event) => {
  const inputEmail = event.target.value.trim();
  const correctEmail = checkEmail(inputEmail);
  const resetEmail = '';

  newUser['email'] = correctEmail ? inputEmail : resetEmail;

  validateForm();
};
getUserEmail.addEventListener('input', (event) => setupEmailInput(event));

const setupAgeInput = (event) => {
  const inputAge = Number(event.target.value.trim());
  const correctAge = checkAge(inputAge);
  const resetAge = '';

  newUser['age'] = correctAge ? inputAge : resetAge;

  validateForm();
};
getUserAge.addEventListener('input', (event) => setupAgeInput(event));

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
