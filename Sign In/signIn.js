"use strict";

import {URL,getUserName,getUserPassword,signInBtn,signUpBtn} from "../const.js";
import {getUserData} from '../main.js'


const currentUser = {
    username: '',
    password: ""
};


getUserName.addEventListener('input', (event) => {
    currentUser.username = event.target.value;
});

getUserPassword.addEventListener('input', (event) => {
    currentUser.password = event.target.value;
});

signInBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const data = await getUserData(URL);
    checkUserData(data);
});

function checkUserData(data) {
    let found = false;
    for (const user of data) {
        if (user.name === currentUser.username && user.password === currentUser.password) {
            window.location.href = 'test.html';
            found = true;
            break;
        }
    }
    if (!found) {
        signUp();
    }
}

function signUp() {
    const showText = document.getElementById('ErrorText');
    showText.classList.toggle('hidden');

    setTimeout(() => {
        signUpBtn.style.backgroundColor = 'green';
    }, 8000);

    setTimeout(() => {
        getUserName.style.backgroundColor = 'white';
        getUserPassword.style.backgroundColor = 'white';
    }, 8000);

    getUserName.style.backgroundColor = 'red';
    getUserPassword.style.backgroundColor = 'red';
}
