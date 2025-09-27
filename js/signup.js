document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
    return;
  }

  if (password.length < 6) {
    message.style.color = "orange";
    message.textContent = "Password must be at least 6 characters!";
    return;
  }

  // Success message
  message.style.color = "lightgreen";
  message.textContent = "Account created successfully!";
  
  // Here you can add fetch() to send data to backend
});