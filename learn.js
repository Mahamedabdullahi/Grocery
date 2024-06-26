// JavaScript
window.onload = function() {
    // Check if the user is registered
    if (!localStorage.getItem('registered')) {
      // Show the registration form
      document.getElementById('register-form').style.display = 'block';
      // Automatically focus on the first input field
      document.getElementById('username').focus();
    }
  };
  
  // Register form submission handler
  const registerForm = document.getElementById('register-form');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get the form data
    const formData = new FormData(registerForm);
    // Send the form data to the server
    fetch('/register', {
      method: 'POST',
      body: formData
    })
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      // Set the registered flag to true
      localStorage.setItem('registered', true);
      // Redirect to the main page
      window.location.href = '/';
    })
  .catch((error) => {
      console.error(error);
    });
  });