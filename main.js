"use strict";

import {URL} from "./const.js";

const getUserData = async (URL) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error(error);
    }
}


getUserData(URL)
export {getUserData}

//
// const currentUser = {
//     username: '',
//     password: ""
// };
//
// const getUserName = document.querySelector('input[name="username"]');
// const getUserPassword = document.querySelector('input[name="password"]');
// const signInBtn = document.querySelector('.signin');
// const signUpBtn = document.querySelector('.signup');
//
// getUserName.addEventListener('input', (event) => {
//     currentUser.username = event.target.value;
// });
//
// getUserPassword.addEventListener('input', (event) => {
//     currentUser.password = event.target.value;
// });
//
// signInBtn.addEventListener('click', async (event) => {
//     event.preventDefault();
//     const data = await getUserData();
//     checkUserData(data);
// });
//
// function checkUserData(data) {
//     let found = false;
//     for (const user of data) {
//         if (user.name === currentUser.username && user.password === currentUser.password) {
//             window.location.href = 'test.html';
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         signUp();
//     }
// }
//
// function signUp() {
//     const showText = document.getElementById('ErrorText');
//     showText.classList.toggle('hidden');
//
//     setTimeout(() => {
//         signUpBtn.style.backgroundColor = 'green';
//     }, 8000);
//
//     setTimeout(() => {
//         getUserName.style.backgroundColor = 'white';
//         getUserPassword.style.backgroundColor = 'white';
//     }, 8000);
//
//     getUserName.style.backgroundColor = 'red';
//     getUserPassword.style.backgroundColor = 'red';
// }
//
// const hideEmail = document.getElementById('email');
// const hideAge = document.getElementById('age');
//
// signUpBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     hideEmail.classList.toggle('hidden');
//     hideAge.classList.toggle('hidden');
//
//     let newUser = {
//         "name": "",
//         "email": "",
//         "password": "",
//         "age": "",
//     };
//
//     getUserName.addEventListener('input', (event) => {
//         newUser.name = event.target.value;
//     });
//
//     hideEmail.addEventListener('input', (event) => {
//         newUser.email = event.target.value;
//     });
//
//     getUserPassword.addEventListener('input', (event) => {
//         newUser.password = event.target.value;
//     });
//
//     hideAge.addEventListener('input', (event) => {
//         newUser.age = event.target.value;
//     });
//
//     const logInBtn = document.querySelector('.logIn');
//
//     logInBtn.addEventListener('click', async () => {
//         try {
//             const response = await fetch(URL, {
//                 method: 'POST',
//                 body: JSON.stringify(newUser)
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     });
// });
