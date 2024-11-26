const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const os = require('os');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('index.html');
});

ipcMain.handle('get-system-details', () => {
  return {
    architecture: os.arch(),
    debugPort: process.debugPort,
    cpuUsage: process.cpuUsage(),
    processType: process.type,
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    computerName: os.hostname(),
    userName: os.userInfo().username,
    userHomePath: os.homedir(),
    systemRoot: process.env.SystemRoot,
    systemDrive: process.env.SystemDrive,
  };
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
