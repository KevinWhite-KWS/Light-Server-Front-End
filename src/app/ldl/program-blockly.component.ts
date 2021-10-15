import { Component, OnInit, NgZone, ViewChild, OnDestroy } from '@angular/core';
import { Router }from '@angular/router';
import { InstructionService, LdlServerInfo } from "./instruction-class/instruction-service";
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from "rxjs";

import { saveAs } from 'file-saver';
import { FileSaverService } from 'ngx-filesaver';

import { LdlServer } from "./ldl-server";
import { ProgramBlockySettingsComponent } from "./program-blockly-settings.component";
import { ConnectionSettings } from './connection-settings';


declare var Blockly: any;

// https://github.com/NithinBiliya/blockly-angular-demo


// re-sizable blocky: https://codepen.io/juanialt/pen/prvzom

/**
 * Provides an interface to allow a LDL program to be
 * loaded and edited.
 * @author      Kevin White
 * @date        20 May 2020
 */
@Component({
  selector: 'app-ldl-program-blockly',
  templateUrl: './program-blockly.component.html',
  styleUrls: ['./program-blockly.component.scss']
})
export class ProgramBlocklyComponent implements OnInit, OnDestroy {

  workspace: any;

  @ViewChild("#ldlServer") selectedLdlServer;

  servers: LdlServerInfo[];
  //ldlServers: LdlServer[];
  // selectedServer: string;


  isAValidProgram = false;
  // isALdlServerAvailable = false;

  disableUploadButton = true;
  disableSaveButton = true;

  connectionSettings: ConnectionSettings = new ConnectionSettings();

  findingServers = false;
  noServersFound = false;
  numberOfServersDiscovered = 0;
  discoverServersSub: Subscription;

  constructor(
    private instructionService: InstructionService,
    private _FileSaverService: FileSaverService,
    private _ngZone: NgZone,
    private _router: Router,
    public dialog: MatDialog
  ) {
    // load in stored connection settings
    this.connectionSettings.username = "Super";
    this.connectionSettings.password = "1xYa1man2*";
    this.connectionSettings.server = "All";


    this.discoverServersSub = this.instructionService.onDiscoveredLdlServers.subscribe((discoveredServers: LdlServer[]) => {
      this._ngZone.run(() => {
        this.findingServers = false;
        this.noServersFound = discoveredServers.length === 0;
        this.numberOfServersDiscovered = discoveredServers.length;
        // this.servers = discoveredServers;
        this.connectionSettings.servers = discoveredServers;

        // this.data.servers = discoveredServers;
      });
    });

    this.findingServers = true;
    this.instructionService.discoverServers();
  }

  ngOnDestroy(): void {
    if (this.discoverServersSub) {
      this.discoverServersSub.unsubscribe();
    }
  }

  setButtonStates(){
    // this.disableUploadButton = !this.isALdlServerAvailable || !this.isAValidProgram;
    this.disableUploadButton = !this.isAValidProgram;
    this.disableSaveButton = !this.isAValidProgram;
  }

  checkProgramState() {
    const topBlocks = this.workspace.getTopBlocks();

    const hasProgramBlock = topBlocks.find(b => b.type === "program");
    if(hasProgramBlock === undefined || hasProgramBlock.getChildren().length ===0) {
      this.isAValidProgram = false;
    } else {
      this.isAValidProgram = true;
    }

    this.setButtonStates();
  }


  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox')
      // scrollbars: false
    });

    // this.workspace.addChangeListener(this.onAddBlock);
    this.workspace.addChangeListener((event) => {
      if (event.type == Blockly.Events.BLOCK_MOVE) {
        this.checkProgramState();
      }
    });

    //if (this.program.xmlData) {
    //  this.workspace.clear();
    //  Blockly.Xml.domToWorkspace(
    //    Blockly.Xml.textToDom(this.program.xmlData),
    //    this.workspace
    //  );
    //}

    // this.instructionService.discoverServers().subscribe(servers => {
    //   this.servers = servers as LdlServerInfo[];
    //   const x = 10;
    // });

    //this.instructionService.onDiscoveredLdlServers.subscribe((discoveredServers) => {
    //  this._ngZone.run(() => {
    //    this.ldlServers = discoveredServers;

    //    if(this.ldlServers !== undefined && this.ldlServers.length > 0) {
    //      this.isALdlServerAvailable = true;
    //    } else {
    //      this.isALdlServerAvailable = false;
    //    }
    //  });
    //});    
  }

  handleFileInput(files: FileList) {
    const uploadedFile = files.item(0);

    if (!uploadedFile) {
      return;
    }

    (async () => {
      const fileContent = await uploadedFile.text();

      const blocklyDom = Blockly.Xml.textToDom(fileContent);
      Blockly.Xml.clearWorkspaceAndLoadFromXml(blocklyDom, this.workspace);
    })();

  }

  saveProgram(): void {
    const prg = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(this.workspace)
    );

    Blockly.LDL.addReservedWords('code');
    const code = Blockly.LDL.workspaceToCode(this.workspace);

    const regex = new RegExp('"name" : "(.*)"');
    const prgNameMatches = regex.exec(code);
    let programName = 'LDL program';
    if (prgNameMatches.length >= 2) {
      programName = prgNameMatches[1];
    }

    // saveAs(prg, "testing.xml");
    this._FileSaverService.saveText(prg, programName + '.xml');
    this._FileSaverService.saveText(code, programName + '.ldl');
  }

  uploadProgram(username:string, password:string): void {
    Blockly.LDL.addReservedWords('code');
    const code = Blockly.LDL.workspaceToCode(this.workspace);
    console.log(code);
    this.sendLightProgram(code, username, password);
  }

  clearWorkspace(): void {
    this.workspace.clear();

    this.checkProgramState();
  }


  sendLightProgram(serializedProgram:string, username: string, password: string) {
    // const username = 'Super';
    // const password = '1xYa1man2*';
    // NOTE: connected to Eero
    // const ip = '192.168.5.210';
    // NOTE: connected directly to router
    // const ip = '192.168.1.210';


    //if(!this.selectedServer) {
    //  return;
    //}

    // if(this.selectedServer === "All") {
    if (this.connectionSettings.server === "All") {
      //if(!this.ldlServers) {
      //  return;
      //}
      if (!this.connectionSettings.servers) {
        return;
      }

      // this.ldlServers.forEach((ldlServer) => {
      this.connectionSettings.servers.forEach((ldlServer) => {
        console.log(`Sending program to server @ ${ldlServer.ip}`);
        // this.instructionService.uploadLdlProgram(ldlServer.ip, username, password, serializedProgram);
        this.instructionService.uploadLdlProgram(ldlServer.ip, this.connectionSettings.username, this.connectionSettings.password, serializedProgram);
      });
    } else {
      console.log(`Sending program to server @ ${this.connectionSettings.server}`);
      // console.log(`Sending program to server @ ${this.selectedServer}`);
      // this.instructionService.uploadLdlProgram(this.connectionSettings.server, username, password, serializedProgram);
      this.instructionService.uploadLdlProgram(this.connectionSettings.server, this.connectionSettings.username, this.connectionSettings.password, serializedProgram);
      // this.instructionService.uploadLdlProgram(this.selectedServer, username, password, serializedProgram);
    }

    // // send the program to each of the available servers
    // if (!this.servers) {
    //   return;
    // }

    // this.servers.forEach(s => {

    //   console.log("Sending program to server @" + s.ipAddress);
    //   this.instructionService.uploadLdlProgram(s.ipAddress, username, password, serializedProgram)
    //     .subscribe(o => {
    //     });

    //   });
  }

  //selectServer(selectedServer) {
  //  this.selectedServer = selectedServer;
  //}

  goHome() {
    this._router.navigateByUrl("/");
  }

  openConnectionSettings() {
    let dialogRef = this.dialog.open(ProgramBlockySettingsComponent, {
      height: '50%',
      width: '50%',
      data: this.connectionSettings
    });

    dialogRef.afterClosed().subscribe(d => {
      // alert(this.connectionSettings.username);
      console.log(this.connectionSettings.username);
      console.log(this.connectionSettings.password);
      console.log(this.connectionSettings.server);
    });
  }

  // shouldUploadBeDisabled() {
  //   // disable upload button if no LDL server is available
  //   if(!this.ldlServers || this.ldlServers.length === 0) {
  //      return true;
  //   }

  //   console.log("checking for program");
  //   return !this.isAValidProgram;

  //   // also, disable upload if there is no "program" element
  //   // with at least one child element
  //   // const topBlocks = this.workspace.getTopBlocks();
  //   // const hasProgramBlock = topBlocks.find(b => b.type === "program");
  //   // if(hasProgramBlock === undefined || hasProgramBlock.getChildren().length ===0) {
  //   //   return true;
  //   // }
  //   // return false;
  // }

}
