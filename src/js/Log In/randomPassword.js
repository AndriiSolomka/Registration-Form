'use strict';

const generatePassword = (passwordLength) => {
  const options = {
    numberChars: '0123456789',
    upperChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerChars: 'abcdefghijklmnopqrstuvwxyz',
    symbolChars: '!@#$%^&*()_+',
  };

  const allChars = Object.values(options).join('');
  const allCharsLength = allChars.length;
  const reservedChars = Object.keys(options).length;
  let randomString = '';

  const getRandomChar = (characters) => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  };

  const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
  };

  for (const chars of Object.values(options)) {
    randomString = randomString.concat(getRandomChar(chars));
  }

  for (let i = reservedChars; i < passwordLength; i++) {
    const randomChar = allChars.charAt(getRandomIndex(allCharsLength));
    randomString = randomString.concat(randomChar);
  }

  randomString = shuffleString(randomString);

  return randomString;
};

const shuffleString = (string) => {
  const array = string.split('');
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
};

export { generatePassword };
