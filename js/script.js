// File choose button
const chooseBtn = document.getElementById("chooseBtn");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

chooseBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileName.textContent = `Selected: ${fileInput.files[0].name}`;
  }
});

// Expiry timer selection
const timerOptions = document.getElementById("timerOptions");
timerOptions.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    document.querySelectorAll("#timerOptions button").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    console.log("Expiry set to:", e.target.dataset.time);
  }
});

// Copy link functionality
const copyBtn = document.getElementById("copyBtn");
const secureLink = document.getElementById("secureLink");
const copyMsg = document.getElementById("copyMsg");

copyBtn.addEventListener("click", () => {
  secureLink.select();
  document.execCommand("copy");
  copyMsg.textContent = "✅ Link copied!";
  setTimeout(() => (copyMsg.textContent = ""), 2000);
});

// Toggles
const viewOnly = document.getElementById("viewOnly");
const passwordToggle = document.getElementById("passwordToggle");

viewOnly.addEventListener("change", () => {
  console.log("View-only:", viewOnly.checked);
});

passwordToggle.addEventListener("change", () => {
  console.log("Password protection:", passwordToggle.checked);
});


// Revoke button functionality
document.querySelectorAll(".revoke").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    row.remove();
    alert("Access revoked!");
  });
});
