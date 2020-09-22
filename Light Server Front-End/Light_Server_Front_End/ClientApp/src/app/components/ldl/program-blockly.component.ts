import { Component, OnInit } from '@angular/core';
import { InstructionService } from "./instruction-class/instruction-service";

declare var Blockly: any;

// https://github.com/NithinBiliya/blockly-angular-demo

/**
 * Provides an interface to allow a LDL program to be
 * loaded and edited.
 * @author      Kevin White
 * @date        20 May 2020
 */
@Component({
  selector: 'app-ldl-program-blockly',
  templateUrl: './program-blockly.component.html'
})
export class ProgramBlocklyComponent implements OnInit {
  workspace: any;

  constructor(
    private instructionService: InstructionService
  ) {
  }

  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      scrollbars: false
    });

    //if (this.program.xmlData) {
    //  this.workspace.clear();
    //  Blockly.Xml.domToWorkspace(
    //    Blockly.Xml.textToDom(this.program.xmlData),
    //    this.workspace
    //  );
    //}
  }

  saveProgram(): void {
    const prg = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(this.workspace)
    );

    Blockly.LDL.addReservedWords('code');
    const code = Blockly.LDL.workspaceToCode(this.workspace);

    console.log(code);

    this.sendLightProgram(code);

    //this.program.xmlData = Blockly.Xml.domToText(
    //  Blockly.Xml.workspaceToDom(this.workspace)
    //);
    //console.log('saving the program - ', JSON.stringify(this.program));
    //this.programService.upsertOne(this.program);
    //this.router.navigate(['listProgram']);
  }

  sendLightProgram(serializedProgram:string) {
    const username = 'Super';
    const password = 'Qwert123$';
    const ip = '192.168.1.210';


    this.instructionService.uploadLdlProgram(ip, username, password, serializedProgram)
      .subscribe(o => {
      });

  }
}
