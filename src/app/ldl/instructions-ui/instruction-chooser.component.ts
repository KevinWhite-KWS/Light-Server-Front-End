import { Component, EventEmitter, Output } from '@angular/core';

import { InstructionType } from '../instruction-class/instruction-type';
import { InstructionService } from '../instruction-class/instruction-service';
import { InstructionMetadata } from '../instruction-class/metadata/instruction-metadata';

/**
 * Provides a means of allowing a new instruction
 * to be choosen so that it can be inserted into
 * the program.
 * @author      Kevin White
 * @date        28 Apr 2020
 */
@Component({
  selector: 'app-ldl-instruction-chooser',
  templateUrl: './instruction-chooser.component.html'
})
export class InstructionChooserComponent {
  instructions: InstructionMetadata[];

  @Output() onAddInstruction = new EventEmitter<InstructionType>();

  constructor(
    private instructionService: InstructionService
  ) {
    this.instructions = this.instructionService.InstructionSet.Instructions;
  }

  addInstruction(instructionType: InstructionType) {
    this.onAddInstruction.emit(instructionType);
  }
}
