'use strict';

const checkName = (name) => {
  const nameRegex = /^[a-zA-Z]{3,12}$/;
  return nameRegex.test(name);
};

const checkPassword = (password) => {
  const options = {
    minLength: 8,
    maxLength: 20,
    specialChars: '!@#$%^&*()_+-=[]{};:\'"\\|,.<>/?',
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasNeedLength: false,
    hasSpace: false,
  };

  const minLength = password.length >= options.minLength;
  const maxLength = password.length <= options.maxLength;

  if (!minLength && !maxLength) {
    return false;
  }

  for (const char of password) {
    if (options.hasUpperCase === char >= 'A' && char <= 'Z') {
      options.hasUpperCase = true;
    }
    if (char >= 'a' && char <= 'z') {
      options.hasLowerCase = true;
    }
    if (char >= '0' && char <= '9') {
      options.hasNumber = true;
    }
    if (options.specialChars.includes(char)) {
      options.hasSpecialChar = true;
    }
    if (char === ' ') {
      options.hasSpace = true;
    }
  }

  if (!options.hasUpperCase) {
    return false;
  }

  if (!options.hasLowerCase) {
    return false;
  }

  if (!options.hasNumber) {
    return false;
  }

  if (!options.hasSpecialChar) {
    return false;
  }

  if (options.hasSpace) {
    return false;
  }

  return true;
};

const checkEmail = (email) => {
  const options = {
    maxLength: 50,
    minLength: 2,
    specialChars: '!#$%^&*()_+-=[]{};:\'"\\|,<>/?',
    domain: 'ru',
  };

  const unCorrectChars =
    options.specialChars && email.endsWith('.' + options.domain);

  if (email.length > options.maxLength) {
    return false;
  }
  if (email.length < options.minLength) {
    return false;
  }
  if (unCorrectChars) {
    return false;
  }
  if (!email.includes('@')) {
    return false;
  }
  if (email.indexOf('@') > email.lastIndexOf('.')) {
    return false;
  }

  return true;
};

export { checkName, checkEmail, checkPassword };
