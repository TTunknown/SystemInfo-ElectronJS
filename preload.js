const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getSystemDetails: () => ipcRenderer.invoke('get-system-details'),
});
