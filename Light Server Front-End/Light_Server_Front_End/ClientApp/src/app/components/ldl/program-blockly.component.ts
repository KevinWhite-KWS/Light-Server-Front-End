import { Component, OnInit } from '@angular/core';

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

    //this.program.xmlData = Blockly.Xml.domToText(
    //  Blockly.Xml.workspaceToDom(this.workspace)
    //);
    //console.log('saving the program - ', JSON.stringify(this.program));
    //this.programService.upsertOne(this.program);
    //this.router.navigate(['listProgram']);
  }
}
