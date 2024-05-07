'use strict';

import {
  base_URL,
  getUserName,
  getUserPassword,
  signInBtn,
  signUpBtn,
} from '../const/const.js';
import { getUserData } from '../main/main.js';

const currentUser = {
  username: '',
  password: '',
};

getUserName.addEventListener('input', (event) => {
  currentUser.username = event.target.value;
});

getUserPassword.addEventListener('input', (event) => {
  currentUser.password = event.target.value;
});

signInBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const data = await getUserData(base_URL);
  checkUserData(data);
});

function checkUserData(data) {
  let found = false;
  for (const user of data) {
    if (
      user.name === currentUser.username &&
      user.password === currentUser.password
    ) {
      localStorage.setItem('username', currentUser.username);
      localStorage.setItem('password', currentUser.password);
      window.location.href = './src/js/Next Page/test.html';
      found = true;
      break;
    }
  }
  if (!found) {
    signUp();
  }
}

function signUp() {
  setTimeout(() => {
    signUpBtn.style.backgroundColor = 'green';
  }, 8000);

  setTimeout(() => {
    getUserName.style.backgroundColor = '';
    getUserPassword.style.backgroundColor = '';
  }, 8000);

  getUserName.style.backgroundColor = '#c97575';
  getUserPassword.style.backgroundColor = '#c97575';
}
