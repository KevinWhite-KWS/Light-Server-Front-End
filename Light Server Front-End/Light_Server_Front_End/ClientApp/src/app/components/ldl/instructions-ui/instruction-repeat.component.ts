import { Component } from '@angular/core';
import { InstructionBase } from './instruction-base';
import { RepeatInstruction } from '../instruction-class/instruction-repeat';
import { Program } from "../instruction-class/program";
import { Instruction } from "../instruction-class/instruction";
import { AddInstruction } from "../instruction-class/add-instruction";
import { AddInstructionPosition } from "../instruction-class/add-instruction-position";
import { InstructionType } from "../instruction-class/instruction-type";
import { InstructionService } from "../instruction-class/instruction-service";

/**
 * Provides an means of manipulating repeat instructions.
 * @author      Kevin White
 * @date        7 Aug 2020
 */
@Component({
  selector: 'app-ldl-instruction-repeat',
  templateUrl: './instruction-repeat.component.html'
})
export class InstructionRepeatComponent extends InstructionBase<RepeatInstruction> {

  constructor(
    private instructionService: InstructionService
  ) {
    super();
  }

  /**
   * aa
   * @returns {} 
   */
  get program(): Program {
    return this.instruction.program;
  }

  /**
   * Removes an instruction from the program.
   * @param instruction   The instruction to be removed
   * @author              Kevin White
   * @date                21 May 2020
   */
  removePrgInstruction(instruction: Instruction) {
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


  changeLoopIterations(numberOfIterations: number) {
    this.instruction.times = numberOfIterations;
  }

  changeInfiniteLoop(isInfinite: boolean) {
    if (isInfinite) {
      this.instruction.times = 0;
    } else {
      this.instruction.times = 1;
    }
  }
}
