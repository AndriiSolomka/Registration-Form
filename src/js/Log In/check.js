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
    status: null,
  };

  const minLength = password.length >= options.minLength;
  const maxLength = password.length <= options.maxLength;

  if (minLength && maxLength) {
    options.hasNeedLength = true;
  }

  for (const char of password) {
    if (char >= 'A' && char <= 'Z') {
      options.hasUpperCase = true;
    } else if (char >= 'a' && char <= 'z') {
      options.hasLowerCase = true;
    } else if (char >= '0' && char <= '9') {
      options.hasNumber = true;
    } else if (options.specialChars.includes(char)) {
      options.hasSpecialChar = true;
    } else if (char === ' ') {
      options.hasSpace = true;
    }
  }

  if (
    options.hasUpperCase &&
    options.hasLowerCase &&
    options.hasNumber &&
    options.hasSpecialChar &&
    options.hasNeedLength &&
    !options.hasSpace
  ) {
    options.status = true;
  } else {
    options.status = false;
  }

  return options.status;
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

  if (email.length > options.maxLength || email.length < options.minLength) {
    return false;
  } else if (unCorrectChars) {
    return false;
  } else if (!email.includes('@')) {
    return false;
  } else if (email.indexOf('@') > email.lastIndexOf('.')) {
    return false;
  }

  return true;
};

export { checkName, checkEmail, checkPassword };
