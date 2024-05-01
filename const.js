"use strict"

const URL = "http://localhost:3000/posts";
const getUserName = document.querySelector('#username');
const getUserPassword = document.querySelector('#password');
const signInBtn = document.querySelector('#signinStatus');
const signUpBtn = document.querySelector('.signup');
const hideEmail = document.querySelector('#email');
const hideAge = document.querySelector('#age');

const logInBtn = document.querySelector('#loginStatus');
const errorText = document.querySelector('#ErrorText')

export {URL, getUserName,getUserPassword,signUpBtn,signInBtn,hideEmail,hideAge,logInBtn, errorText}