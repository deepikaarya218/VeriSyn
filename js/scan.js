function openCamera() {
  alert("Camera access not supported in this demo.");
}

function showScore(score) {
  const circle = document.getElementById("scoreCircle");
  const confidenceText = document.getElementById("confidenceText");

  circle.innerHTML = `
    <div style="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);
    color:#ff5c5c;font-weight:bold;font-size:22px;">
      ${score}%
    </div>
  `;

  confidenceText.textContent = score >= 50 ? "High Confidence" : "Low Confidence";
  confidenceText.style.color = score >= 50 ? "lightgreen" : "#ff5c5c";
}

function saveReportToLocalStorage(file, score) {
  const reports = JSON.parse(localStorage.getItem("scanReports") || "[]");

  const newReport = {
    when: new Date().toLocaleString(),
    name: file.name,
    type: file.type,
    size: `${(file.size / 1024).toFixed(1)} KB`,
    score: score,
    status: score >= 50 ? "Authentic" : "Deepfake"
  };

  reports.unshift(newReport);
  const trimmed = reports.slice(0, 20);
  localStorage.setItem("scanReports", JSON.stringify(trimmed));
}

document.getElementById("fileInput").addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const metaBox = document.getElementById("metaBox");
  metaBox.innerHTML = `
    <p><strong>Filename:</strong> ${file.name}</p>
    <p><strong>Type:</strong> ${file.type}</p>
    <p><strong>Size:</strong> ${(file.size / 1024).toFixed(1)} KB</p>
    <p><strong>Watermark:</strong> <span style="color: red;">⛔ Not Found</span></p>
    <p><strong>Owner ID:</strong> —</p>
  `;

  // Simulated Scan
  setTimeout(() => {
    const score = Math.floor(Math.random() * 100);
    showScore(score);
    saveReportToLocalStorage(file, score);
  }, 1500);
});
