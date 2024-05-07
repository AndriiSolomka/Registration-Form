'use strict';

const base_URL = 'http://localhost:3000/posts';
const getUserName = document.querySelector('#username');
const getUserPassword = document.querySelector('#password');
const signInBtn = document.querySelector('#signinStatus');
const signUpBtn = document.querySelector('.signup');
const getUserEmail = document.querySelector('#email');
const getUserAge = document.querySelector('#age');
const logInBtn = document.querySelector('#loginStatus');
const errorText = document.querySelector('#ErrorText');

export {
  base_URL,
  getUserName,
  getUserPassword,
  signUpBtn,
  signInBtn,
  getUserEmail,
  getUserAge,
  logInBtn,
  errorText,
};
