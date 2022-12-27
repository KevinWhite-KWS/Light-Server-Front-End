import { app, BrowserWindow, screen, ipcMain, ipcRenderer, net } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';

/** START: TESTING ONLY */
const dgram = require("dgram");
let udpClient = null;
let clientIP = "255.255.255.255";
let clientPort = 8888;
let udpServer = null;
/** END: TESTING ONLY */

// Initialize remote module
require('@electron/remote/main').initialize();

let win: BrowserWindow = null;
const args = process.argv.slice(1),
  serve = args.some(val => val === '--serve');

function createWindow(): BrowserWindow {

  const size = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: (serve),
      contextIsolation: false,  // false if you want to run e2e test with Spectron
    },
  });

  if (serve) {
    const debug = require('electron-debug');
    debug();

    require('electron-reloader')(module);
    win.loadURL('http://localhost:4200');
  } else {
    // Path when running electron executable
    let pathIndex = './index.html';

    if (fs.existsSync(path.join(__dirname, '../dist/index.html'))) {
      // Path when running electron in local folder
      pathIndex = '../dist/index.html';
    }

    const url = new URL(path.join('file:', __dirname, pathIndex));
    win.loadURL(url.href);
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  return win;
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => setTimeout(createWindow, 400));

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    
    
    /** START: TESTING ONLY */
		if (udpServer) udpServer.close();
		if (udpClient) udpClient.close();
    /** END: TESTING ONLY */



    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}



/** START: TESTING ONLY */
class LdlServer {
  constructor(server: string, name: string, ip:string) {
    this.server = server;
    this.name = name;
    this.ip = ip;
  }

  server: string;
  name: string;
  ip:string;
}


let discoveredServers: LdlServer[] = [];

udpClient = dgram.createSocket('udp4');
udpClient.bind(function() {
  udpClient.setBroadcast(true);
});
udpClient.on('message', function (message, rinfo) {
  console.log('Message from: ' + rinfo.address + ':' + rinfo.port +' - ' + message);

  var msg = message.toString();
  var msgObj = JSON.parse(msg);
  if(msgObj && msgObj.server) {
    const discoveredServer = new LdlServer(msgObj.server, msgObj.name, rinfo.address);
    // discoveredServer.server = msgObj.server;
    // discoveredServer.ip = rinfo.address;

    discoveredServers.push(discoveredServer);
  }

  // ipcRenderer.send('ping', message);
  // ipcMain.emit('ping', message);
});
udpClient.on('listening', function () {
  var address = udpClient.address();
  console.log('UDP Client listening on ' + address.address + ":" + address.port);
});

function discoverLdlServers() {
  var message = Buffer.from("LDL-HOLA?");
  udpClient.send(message, 0, message.length, clientPort, clientIP, function() {
    console.log("Sent '" + message + "'");
  });
}	

ipcMain.on('find-ldl-servers', (event, message)=> {
  discoveredServers = [];
  discoverLdlServers();
  setTimeout(() => {
    console.log(`sending response ${discoveredServers}`);
    event.reply('discovered-ldl-servers', discoveredServers);
  }, 3000);
});

ipcMain.on('publish-ldl-program', (event, message)=> {

  const messageObj = JSON.parse(message);
  const encodedUsernamePassword = Buffer.from(`${messageObj.username}:${messageObj.password}`).toString('base64');

  // send program
  const storePermanently = messageObj.storePermanently;
  const endpoint = storePermanently ? "/program/stored" : "/program";

  console.log(`sending ldl program: ${messageObj.program}`);
  console.log(messageObj);
  const request = net.request({
    method: 'POST',
    protocol: 'http:',
    hostname: messageObj.ip,
    port: 80,
    path: endpoint
  });
  // request.setHeader("Authorization", `Basic U3VwZXI6MXhZYTFtYW4yKg==`);
  request.setHeader("Authorization", `Basic ${encodedUsernamePassword}`);
  request.write(messageObj.program);
  request.on('response', (response) => {
    console.log(`STATUS: ${response.statusCode}`);
    response.on('error', (error) => {
      console.log(`ERROR: ${JSON.stringify(error)}`)
    })
  });
  request.end();

  // send response

});


/** END: TESTING ONLY */
