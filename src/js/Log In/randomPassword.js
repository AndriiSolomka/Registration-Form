'use strict';

const generatePassword = (passwordLength) => {
  const options = {
    numberChars: '0123456789',
    upperChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerChars: 'abcdefghijklmnopqrstuvwxyz',
    symbolChars: '!@#$%^&*()_+',
  };

  const allChars =
    options.numberChars +
    options.upperChars +
    options.lowerChars +
    options.symbolChars;
  const allCharsLength = allChars.length;

  let randomString = '';

  randomString += getRandomChar(options.numberChars);
  randomString += getRandomChar(options.upperChars);
  randomString += getRandomChar(options.lowerChars);
  randomString += getRandomChar(options.symbolChars);

  let reservedChars = 4;
  for (let i = reservedChars; i < passwordLength; i++) {
    randomString += allChars.charAt(Math.floor(Math.random() * allCharsLength));
  }

  randomString = shuffleString(randomString);

  return randomString;
};

const getRandomChar = (characters) => {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
};

const shuffleString = (string) => {
  let array = string.split('');
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
};

export { generatePassword };
