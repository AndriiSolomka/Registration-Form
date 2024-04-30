"use strict"

import {URL,getUserPassword,signUpBtn,getUserName} from "../const.js";


const hideEmail = document.getElementById('email');
const hideAge = document.getElementById('age');

signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    hideEmail.classList.toggle('hidden');
    hideAge.classList.toggle('hidden');

    let newUser = {
        "name": "",
        "email": "",
        "password": "",
        "age": "",
    };

    getUserName.addEventListener('input', (event) => {
        newUser.name = event.target.value;
    });

    hideEmail.addEventListener('input', (event) => {
        newUser.email = event.target.value;
    });

    getUserPassword.addEventListener('input', (event) => {
        newUser.password = event.target.value;
    });

    hideAge.addEventListener('input', (event) => {
        newUser.age = event.target.value;
    });

    const logInBtn = document.querySelector('.logIn');

    logInBtn.addEventListener('click', async () => {
        try {
            const response = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify(newUser)
            });
        } catch (error) {
            console.error(error);
        }
    });
});
