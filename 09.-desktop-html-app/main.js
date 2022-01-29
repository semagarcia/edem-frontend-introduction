// First, we need to import -from the library- the needed objects/funcs
const { app, BrowserWindow } = require('electron');

// This function will create our "desktop window" (the case)
const createWindow = () => {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
  });

  // We load the local index.html file
  win.loadFile('index.html');

  // In case we would like to load a remote website, we could use this:
  // win.loadURL('https://edem.eu/');

  // During the development stage, it could be useful to automatically open DevTools
  // win.webContents.openDevTools();
};

// Until app won't be available, don't call createWindow function
app.whenReady().then(() => {
  createWindow();
});