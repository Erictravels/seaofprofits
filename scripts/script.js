// Sign Up Form Submission with Password Verification
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const verifyPassword = document.getElementById('verifyPassword').value;

  // Check if passwords match
  if (password !== verifyPassword) {
    alert('Passwords do not match. Please try again.');
    return; // Stop form submission
  }

  // Save user data to localStorage
  const user = {
    name: name,
    email: email,
    password: password,
  };

  // Save the user object to localStorage
  localStorage.setItem('user', JSON.stringify(user));

  alert('Signup successful! Please log in.');
  window.location.href = 'login.html'; // Redirect to login page
});

// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Check if the email and password match
  if (user && user.email === email && user.password === password) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'dashboard.html'; // Redirect to dashboard
  } else {
    alert('Invalid email or password');
  }
});

// Protect Dashboard and Payment Pages
if (window.location.pathname.includes('dashboard.html') || window.location.pathname.includes('payment.html')) {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html'; // Redirect to login if not logged in
  }
}

// Logout Functionality
document.querySelector('.btn-logout')?.addEventListener('click', function () {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'index.html'; // Redirect to homepage
});
