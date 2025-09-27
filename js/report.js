// Load reports from localStorage
function loadReports() {
  const table = document.getElementById("reportsTable").querySelector("tbody");
  table.innerHTML = "";

  const reports = JSON.parse(localStorage.getItem("scanReports") || "[]");

  if (reports.length === 0) {
    table.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#999;">No reports found.</td></tr>`;
    return;
  }

  reports.forEach(report => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${report.when}</td>
      <td>${report.name}</td>
      <td>${report.type}</td>
      <td>${report.size}</td>
      <td>${report.score}%</td>
      <td><span class="status-badge">${report.status}</span></td>
    `;
    table.appendChild(row);
  });
}

// Clear reports
function clearReports() {
  localStorage.removeItem("scanReports");
  loadReports();
}

// Load on page load
window.onload = loadReports;
