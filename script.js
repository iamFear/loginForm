"use strict";

// FUNCTIONS:

// DISPLAY ERROR MESSAGE
const displayError = (message) => {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
};

const hideElement = (element) => {
  element.classList.add("hidden");
};

// VALIDATES THE USER EMAIL
const validateEmail = () => {
  const email = emailInput.value;
  if (!email.includes("@")) {
    displayError("Invalid Email");
    return 1;
  }
  hideElement(errorMessage);
  accounts[email] = 0;
  currentUser = email;
  validEmail = true;
};

// VALIDATES THE USER PASSWORD
const validatePassword = () => {
  const password = passwordInput.value;
  const hasUppercase = /[A-Z]/.test(password);

  if (password.length < 6) {
    displayError("Password must have at least 6 characters");
    return 1;
  } else if (!hasUppercase) {
    displayError("Password must have at least 1 uppercase letter");
    return 1;
  } else {
    hideElement(errorMessage);
    accounts[currentUser] = password;
    validPassword = true;
    console.log(accounts);
  }
};

// HTML ELEMENTS:
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const passwordConfirmInput = document.querySelector(".confirm-password");
const signUpBtn = document.querySelector(".sign-up");
const signUpForm = document.querySelector(".sign-up-form");
const errorMessage = document.querySelector(".error");

// PROGRAM LOGIC:

// AVOID DEFAULT BEHAVIORS
signUpForm.addEventListener("submit", (e) => e.preventDefault());

// OBJECT THAT STORE ACCOUNTS:
const accounts = {};

// TEMPORARY VARIABLE FOR THE CURRENT EMAIL
let currentUser;

// VALIDATIONS:
let validEmail = false;
let validPassword = false;
let validPasswordConfirmation = false;

// EVENT LISTENERS
signUpBtn.addEventListener("click", validateEmail);
signUpBtn.addEventListener("click", validatePassword);
