'use strict';

import {
  SIGN_URL,
  getUserName,
  getUserPassword,
  signInBtn,
  signUpBtn,
  nextPage,
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
  await checkUserData(currentUser);
});

const checkUserData = async (currentUser) => {
  try {
    const response = await fetch(SIGN_URL, {
      method: 'POST',
      body: JSON.stringify(currentUser),
    });

    const responseData = await response.json();

    if (response.ok) {
      window.location.href = nextPage;
    } else {
      console.error('Error:', responseData);
      signUp();
    }
  } catch (error) {
    console.error(error);
    signUp();
  }
};

const signUp = () => {
  setTimeout(() => {
    signUpBtn.style.backgroundColor = 'green';
  }, 8000);

  setTimeout(() => {
    getUserName.style.backgroundColor = '';
    getUserPassword.style.backgroundColor = '';
  }, 8000);

  getUserName.style.backgroundColor = '#c97575';
  getUserPassword.style.backgroundColor = '#c97575';
};
