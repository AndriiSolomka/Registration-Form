'use strict';

const checkName = (name) => {
  const nameRegex = /^[a-zA-Z]{3,12}$/;
  return nameRegex.test(name);
};

const checkPassword = (password) => {
  const options = {
    minLength: 8,
    maxLength: 20,
    specialChars: /[!@#$%^&*()_+\-=[\]{};:'"\\|,.<>/?]/,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpace: false,
  };

  if (password.length < options.minLength) {
    return false;
  }

  if (password.length > options.maxLength) {
    return false;
  }

  if (options.hasUpperCase === /[A-Z]/.test(password)) {
    return false;
  }

  if (options.hasLowerCase === /[a-z]/.test(password)) {
    return false;
  }

  if (options.hasNumber === /[0-9]/.test(password)) {
    return false;
  }

  if (!options.specialChars.test(password)) {
    return false;
  }

  if (options.hasSpace !== /\s/.test(password)) {
    return false;
  }

  return true;
};

const checkEmail = (email) => {
  const options = {
    maxLength: 50,
    minLength: 2,
    specialChars: /[!#$%^&*()_+\-=[\]{};:'"\\|,<>/?]/,
    domain: 'ru',
  };

  if (email.length > options.maxLength) {
    return false;
  }

  if (email.length < options.minLength) {
    return false;
  }

  if (options.specialChars.test(email)) {
    return false;
  }

  if (email.endsWith('.' + options.domain)) {
    console.log(1);
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
