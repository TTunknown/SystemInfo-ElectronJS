document.addEventListener('DOMContentLoaded', async () => {
  const details = await window.electronAPI.getSystemDetails();

  const totalCPUTime = details.cpuUsage.user + details.cpuUsage.system;
  
  const detailsContainer = document.getElementById('details');
  detailsContainer.innerHTML = `
    <h2>System Details</h2>
    <ul>
      <li><strong>System Architecture:</strong> ${details.architecture}</li>
      <li><strong>Debug Port:</strong> ${details.debugPort}</li>
      <li><strong>CPU Usage:</strong> ${(totalCPUTime / 1000).toFixed(2)} ms</li>
      <li><strong>Process Type:</strong> ${details.processType}</li>
      <li><strong>Total Memory:</strong> ${details.totalMemory} bytes</li>
      <li><strong>Free Memory:</strong> ${details.freeMemory} bytes</li>
      <li><strong>Computer Name:</strong> ${details.computerName}</li>
      <li><strong>User Name:</strong> ${details.userName}</li>
      <li><strong>User Home Path:</strong> ${details.userHomePath}</li>
      <li><strong>System Root:</strong> ${details.systemRoot}</li>
      <li><strong>System Drive:</strong> ${details.systemDrive}</li>
    </ul>
  `;
});
