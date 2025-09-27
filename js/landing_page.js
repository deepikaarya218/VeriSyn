// script.js
// Example: Redirect buttons to respective tools

document.querySelectorAll('.card-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Redirecting to tool...'); // Replace with window.location.href = 'url';
  });
});
