'use strict';

import { botCheckBTN, animalCheck, img, regForm } from '../const/const.js';
import { validateForm } from './logIn.js';

botCheckBTN.addEventListener('click', () => {
  for (let i = 0; i < animalCheck.length; i++) {
    animalCheck[i].style.display = 'block';
  }
});

const getRandomAnimal = () => {
  const animals = [
    'CAT.jpg',
    'DOG.jpg',
    'ELEPHANT.jpg',
    'LION.jpg',
    'GIRAFFE.jpg',
  ];
  const randomIndex = Math.floor(Math.random() * animals.length);
  const randomAnimal = animals[randomIndex];

  return randomAnimal;
};

const randomAnimal = getRandomAnimal();
img.src = 'images/'.concat(randomAnimal);

const container = document.getElementById('imageContainer');
container.appendChild(img);

const checkValue = document.querySelector('#animalTable');

checkValue.addEventListener('click', (event) => {
  if (event.target.tagName === 'TD') {
    const animalTableName = event.target.innerText.toLowerCase();
    const animalPictureName = randomAnimal.split('.')[0].toLowerCase();
    if (animalTableName === animalPictureName) {
      validateForm(true);
      for (let i = 0; i < animalCheck.length; i++) {
        animalCheck[i].style.display = 'none';
      }
    } else {
      validateForm(false);
      regForm.style.opacity = '0';
      regForm.style.pointerEvents = 'none';
      alert('Ти бот!');
    }
  }
});
