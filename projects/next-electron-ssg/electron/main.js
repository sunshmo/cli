const { app, BrowserWindow, ipcMain } = require('electron');
const { join } = require('path');
const { existsSync } = require('fs');
// const { dialog } = require('electron')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: join(__dirname, 'preload.js'),
    },
  });

  const startURL = !app.isPackaged
    ? 'http://localhost:3000'
    : `file://${join(__dirname, '../out/index.html')}`;

  mainWindow.loadURL(startURL);

  // 监听路由变化
  mainWindow.webContents.on(
    'did-fail-load',
    (event, errorCode, errorDescription, validatedURL) => {
      const url = new URL(validatedURL);
      const filePath = join(__dirname, `../out${url.pathname}.html`);
      if (existsSync(filePath)) {
        mainWindow.loadURL(`file://${filePath}`);
      }
      // debugger
      // dialog.showMessageBox(mainWindow, {
      //   title: filePath,
      //   message: filePath,
      //   detail: filePath,
      //   buttons: ['确定']
      // });
    },
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// --------- 通信 ---------
// 监听渲染进程的消息
ipcMain.on('request-data', (event, arg) => {
  console.log('接收来自 renderer:', arg);

  // 向渲染进程发送响应
  event.reply('response-data', { data: '数据来自 Main Process' });
});
