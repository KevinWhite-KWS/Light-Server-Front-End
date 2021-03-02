import { Component, OnInit } from '@angular/core';
import { InstructionService } from "./instruction-class/instruction-service";

import { saveAs } from 'file-saver';
import { FileSaverService } from 'ngx-filesaver';

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
export class ProgramBlocklyComponent implements OnInit {
  workspace: any;

  constructor(
    private instructionService: InstructionService,
    private _FileSaverService: FileSaverService
  ) {
  }

  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox')
      // scrollbars: false
    });

    //if (this.program.xmlData) {
    //  this.workspace.clear();
    //  Blockly.Xml.domToWorkspace(
    //    Blockly.Xml.textToDom(this.program.xmlData),
    //    this.workspace
    //  );
    //}
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

  uploadProgram(): void {
    Blockly.LDL.addReservedWords('code');
    const code = Blockly.LDL.workspaceToCode(this.workspace);
    console.log(code);
    this.sendLightProgram(code);
  }

  clearWorkspace(): void {
    this.workspace.clear();
  }


  sendLightProgram(serializedProgram:string) {
    const username = 'Super';
    const password = '1xYa1man2*';
    // NOTE: connected to Eero
    const ip = '192.168.5.210';
    // NOTE: connected directly to router
    // const ip = '192.168.1.210';


    this.instructionService.uploadLdlProgram(ip, username, password, serializedProgram)
      .subscribe(o => {
      });

  }
}
