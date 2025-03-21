const {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  dialog,
  shell,
} = require('electron');
const { join } = require('path');
const { createServer } = require('http');

let mainWindow;
const nextPort = 3000;

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

  startNextServer().then((url) => {
    mainWindow.loadURL(url);
    if (!app.isPackaged) {
      mainWindow.webContents.openDevTools();
    }
  });

  createMenu();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 启动 Next.js 服务
async function startNextServer() {
  // 检查端口是否被占用
  const isPortBusy = await checkPort(nextPort);
  if (isPortBusy) {
    console.log(`端口 ${nextPort} 已被占用，尝试直接连接...`);
    return getLocalUrl();
  }

  const next = require('next')({ dev: false, dir: join(__dirname, '..') });
  const requestHandler = next.getRequestHandler();

  // Build the renderer code and watch the files
  await next.prepare();

  // But if developing the application, create a
  // new native HTTP server (which supports hot code reloading)
  const server = createServer(requestHandler);

  return new Promise((resolve, reject) => {
    server.listen(nextPort, () => {
      resolve(getLocalUrl());
      console.log(`Next server is running at port ${nextPort}`);

      // Make sure to stop the server when the app closes
      // Otherwise it keeps running on its own
      app.on('before-quit', () => server.close());
    });
  });
}

// 创建应用菜单
function createMenu() {
  const template = [
    {
      label: '文件',
      submenu: [{ role: 'quit', label: '退出' }],
    },
    {
      label: '编辑',
      submenu: [
        { role: 'undo', label: '撤销' },
        { role: 'redo', label: '重做' },
        { type: 'separator' },
        { role: 'cut', label: '剪切' },
        { role: 'copy', label: '复制' },
        { role: 'paste', label: '粘贴' },
      ],
    },
    {
      label: '视图',
      submenu: [
        { role: 'reload', label: '刷新' },
        { role: 'toggledevtools', label: '开发者工具' },
        { type: 'separator' },
        { role: 'resetzoom', label: '重置缩放' },
        { role: 'zoomin', label: '放大' },
        { role: 'zoomout', label: '缩小' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: '全屏' },
      ],
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '关于',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              title: '关于 Easy Dataset',
              message: `Easy Dataset v${require('../package.json').version}`,
              detail: '一个用于创建大模型微调数据集的应用程序。',
              buttons: ['确定'],
            });
          },
        },
        {
          label: '访问 GitHub',
          click: () => {
            shell.openExternal('https://github.com');
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function getLocalUrl() {
  return `http://localhost:${nextPort}`;
}

function checkPort(port) {
  return new Promise((resolve) => {
    const server = createServer();
    server.once('error', () => {
      resolve(true); // 端口被占用
    });
    server.once('listening', () => {
      server.close();
      resolve(false); // 端口未被占用
    });
    server.listen(port);
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
