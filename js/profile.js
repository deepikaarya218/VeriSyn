// Handle save button
const form = document.getElementById("profileForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email) {
    alert("Please fill in your name and email.");
    return;
  }

  alert("Profile saved successfully!");
  form.reset();
});

// Handle logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  const confirmLogout = confirm("Are you sure you want to log out?");
  if (confirmLogout) {
    alert("Logged out successfully!");
    window.location.href = "index.html"; // Redirect to homepage
  }
});