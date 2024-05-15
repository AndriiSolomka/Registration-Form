'use strict';

import {
  SIGN_URL,
  getUserName,
  getUserPassword,
  signInBtn,
  signUpBtn,
} from '../const/const.js';

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
  checkUserData(currentUser);
});

const checkUserData = async (currentUser) => {
  const response = await fetch(SIGN_URL, {
    method: 'POST',
    body: JSON.stringify(currentUser),
  });

  if (response.ok) {
    window.location.href = './src/js/Next Page/test.html';
  } else {
    signUp();
  }
};

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
