import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';

import { ElectronService } from 'ngx-electron';

// import { ipcMain } from 'electron';

class LdlServer {
  constructor(server: string, ip:string) {
    this.server = server;
    this.ip = ip;
  }

  server: string;
  ip:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  discoveredServers: LdlServer[] = null;

  constructor(
    private _electronService: ElectronService,
    private _ngZone: NgZone
    ) { 
    }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.addLdlServerListener();
  }

  addLdlServerListener() {
    if(this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.on('discovered-ldl-servers', (event, resp:LdlServer[]) => {
        this._ngZone.run(() => {
          console.log(`Message received! ${resp}`);

          this.discoveredServers = resp;
        });
      });
      setTimeout(()=> this.discoverLdlServers(), 1000);
    } 
  }

  discoverLdlServers() {
    this._electronService.ipcRenderer.send('find-ldl-servers');
  }
}
