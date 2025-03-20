// 渲染进程代码

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 能暴露的不仅仅是函数，我们还可以暴露变量
})

//  --------- 通信 ---------
// 发送消息到主进程，`Main Process`接收到消息后可以做出答复（reply)
ipcRenderer.send('request-data', { request: '数据来自 preload.js' });

// 监听主进程的响应
ipcRenderer.on('response-data', (event, arg) => {
  console.log('接收来自 Main Process 的数据:', arg);
});
