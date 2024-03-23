const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');

// Function to handle signup form submission
signUpForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform registration logic (e.g., send data to Firebase)
  // After successful registration, prompt the user to login
  signInForm.classList.add('active');
  signUpForm.classList.remove('active');
});

// Function to handle login form submission
signInForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform login logic (e.g., validate credentials with Firebase)
  const username = signInForm.querySelector('input[type="text"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;
  // Dummy check for demonstration (replace with actual login logic)
  if (username === 'demo' && password === 'demo') {
    // Redirect user to dashboard.html
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});

// Function to toggle between sign-in and sign-up forms
const signUpBtn = document.getElementById('sign-up-btn');
const signInBtn = document.getElementById('sign-in-btn');
const container1 = document.querySelector('.container');

signUpBtn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});
