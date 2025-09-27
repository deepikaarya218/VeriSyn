// Update expiry timer value dynamically
const expiryTimer = document.getElementById("expiryTimer");
const expiryValue = document.getElementById("expiryValue");
expiryTimer.addEventListener("input", () => {
  expiryValue.textContent = expiryTimer.value;
});

// Copy link to clipboard
const copyBtn = document.getElementById("copyBtn");
const secureLink = document.getElementById("secureLink");

copyBtn.addEventListener("click", () => {
  secureLink.select();
  secureLink.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy", 1500);
});