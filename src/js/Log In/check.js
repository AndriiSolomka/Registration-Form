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
    hasUpperCase: /[A-Z]/,
    hasLowerCase: /[a-z]/,
    hasNumber: /[0-9]/,
    hasSpace: /\s/,
  };

  const checks = [
    password.length >= options.minLength,
    password.length <= options.maxLength,
    options.hasUpperCase.test(password),
    options.hasLowerCase.test(password),
    options.hasNumber.test(password),
    options.specialChars.test(password),
    !options.hasSpace.test(password),
  ];

  return checks.every(Boolean);
};

const checkEmail = (email) => {
  const options = {
    maxLength: 50,
    minLength: 2,
    specialChars: /[!#$%^&*()_+\-=[\]{};:'"\\|,<>/?]/,
    domain: 'ru',
  };

  const checks = [
    email.length <= options.maxLength,
    email.length >= options.minLength,
    !options.specialChars.test(email),
    !email.endsWith(`.${options.domain}`),
    email.includes('@'),
    email.indexOf('@') < email.lastIndexOf('.'),
  ];

  return checks.every(Boolean);
};

const checkAge = (age) => {
  const minAge = 5;
  const maxAge = 100;
  const isAgeValid = age <= maxAge && age >= minAge;
  return isAgeValid;
};
export { checkName, checkEmail, checkPassword, checkAge };
