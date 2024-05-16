'use strict';

const SIGN_URL = 'http://localhost:8000/users';
const LOGIN_URL = 'http://localhost:9000/users';
const getUserName = document.querySelector('#username');
const getUserPassword = document.querySelector('#password');
const signInBtn = document.querySelector('#signinStatus');
const signUpBtn = document.querySelector('.signup');
const getUserEmail = document.querySelector('#email');
const getUserAge = document.querySelector('#age');
const logInBtn = document.querySelector('#loginStatus');
const errorText = document.querySelector('#ErrorText');
const passwordBtn = document.querySelector('#passwordGenerator');
const botCheckBTN = document.querySelector('#botCheck');
const animalCheck = document.querySelectorAll(
  '#animalContainer div, #animalContainer h3, #animalContainer table',
);
const img = document.createElement('img');
const regForm = document.querySelector('.login');
const passwordLength = 19;

export {
  SIGN_URL,
  LOGIN_URL,
  getUserName,
  getUserPassword,
  signUpBtn,
  signInBtn,
  getUserEmail,
  getUserAge,
  logInBtn,
  errorText,
  passwordBtn,
  passwordLength,
  botCheckBTN,
  animalCheck,
  img,
  regForm,
};
