import { Component, Input } from '@angular/core';
import { Program } from './instruction-class/program';
import { InstructionService } from './instruction-class/instruction-service';
import { Instruction } from './instruction-class/instruction';
import { AddInstruction } from './instruction-class/add-instruction';
import { AddInstructionPosition } from './instruction-class/add-instruction-position';
import { InstructionType } from './instruction-class/instruction-type';

/**
 * Provides an interface to allow a LDL program to be
 * loaded and edited.
 * @author      Kevin White
 * @date        20 May 2020
 */
@Component({
  selector: 'app-ldl-program',
  templateUrl: './program.component.html'
})
export class ProgramComponent {
  InstructionType = InstructionType;

  @Input() program: Program;

  constructor(
    private instructionService: InstructionService
  ) {
  }

  /**
   * Removes an instruction from the program.
   * @param instruction   The instruction to be removed
   * @author              Kevin White
   * @date                21 May 2020
   */
  removeInstruction(instruction: Instruction) {
    this.program.removeInstruction(instruction);
  }

  /**
   * Adds an instruction to the program.
   * @param instruction   The instruction to be added.
   * @author              Kevin White
   * @date                21 May 2020
   */
  addInstruction(instructionToAdd: AddInstruction) {
    const newInstruction = this.instructionService.createInstructionInstance(instructionToAdd.instructionType);

    if (!newInstruction) {
      return;
    }

    switch (instructionToAdd.position) {
      case AddInstructionPosition.Before:
        this.program.addInstructionBefore(newInstruction, instructionToAdd.existingInstruction);
        break;
      case AddInstructionPosition.After:
        this.program.addInstructionAfter(newInstruction, instructionToAdd.existingInstruction);
        break;
      case AddInstructionPosition.Start:
        this.program.addInstruction(newInstruction, true);
        break;
      case AddInstructionPosition.End:
        this.program.addInstruction(newInstruction, true);
        break;
    }
  }

  /**
   * Adds the first instruction to the program.
   * @param instructionType   The type of instruction to be added.
   * @author                  Kevin White
   * @date                    21 May 2020
   */
  addFirstInstruction(instructionType: InstructionType) {
    const addInstruction = new AddInstruction(instructionType, AddInstructionPosition.Start);
    this.addInstruction(addInstruction);
  }
}
