/* 'use strict';

import {
  URL,
  getUserPassword,
  signUpBtn,
  getUserName,
  hideAge,
  hideEmail,
  logInBtn,
  signInBtn,
} from '../const/const.js';
import { checkName } from './check.js';

/* signUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  hideEmail.classList.toggle('hidden');
  hideAge.classList.toggle('hidden');
  signInBtn.classList.toggle('hidden');
  logInBtn.classList.toggle('hidden');

  let newUser = {
    name: '',
    email: '',
    password: '',
    age: '',
  };

  getUserName.value = '';
  getUserName.addEventListener('input', (event) => {
    newUser.name = event.target.value;
    checkName(newUser.name);
  });

  hideEmail.addEventListener('input', (event) => {
    newUser.email = event.target.value;
  });

  getUserPassword.value = '';
  getUserPassword.addEventListener('input', (event) => {
    newUser.password = event.target.value;
  });

  hideAge.addEventListener('input', (event) => {
    newUser.age = event.target.value;
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
});
 */
