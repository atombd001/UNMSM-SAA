const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // Validate email and password
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePassword(password)) {
    alert('Please enter a valid password.');
    return;
  }

  // Submit the form data to the server
  // ...

  // Redirect to the home page
  window.location.href = '/';
});

function validateEmail(email) {
  // Regular expression for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  // Password must be at least 8 characters long
  return password.length >= 8;
}