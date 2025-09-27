const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple demo validation
    if(email === "test@example.com" && password === "123456") {
        alert("Login successful!");
        errorMsg.textContent = "";
        // Redirect or further logic here
    } else {
        errorMsg.textContent = "Invalid email or password!";
    }
});