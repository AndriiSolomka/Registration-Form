"use strict"

const URL = "http://localhost:3000/posts";
const getUserName = document.querySelector('input[name="username"]');
const getUserPassword = document.querySelector('input[name="password"]');
const signInBtn = document.querySelector('.signin');
const signUpBtn = document.querySelector('.signup');
const hideEmail = document.getElementById('email');
const hideAge = document.getElementById('age');


export {URL, getUserName,getUserPassword,signUpBtn,signInBtn,hideEmail,hideAge}