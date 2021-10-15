import { Guid } from 'guid-typescript';
import { InstructionType } from "./instruction-type";
import { Instruction } from "./instruction";
import { Program } from "./program";
import { AddInstruction } from "./add-instruction";
import { AddInstructionPosition } from "./add-instruction-position";
import { InstructionService } from "./instruction-service";

/**
 * Abstract base class for any LDL instruction that
 * can contain other LDL instructions.  Example:
 * a loop instruction that contains other instructions.
 * @author  Kevin White
 * @date    28 Jul 2020
 */
export abstract class InstructionContainer extends Instruction {
  protected prg: Program;

  constructor(
    private instructionService: InstructionService) {
    super();
  }

  /**
   * Removes an instruction from the program.
   * @param instruction   The instruction to be removed
   * @author              Kevin White
   * @date                21 May 2020
   */
  removeInstruction(instruction: Instruction) {
    this.prg.removeInstruction(instruction);
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
        this.prg.addInstructionBefore(newInstruction, instructionToAdd.existingInstruction);
      break;
    case AddInstructionPosition.After:
        this.prg.addInstructionAfter(newInstruction, instructionToAdd.existingInstruction);
      break;
    case AddInstructionPosition.Start:
        this.prg.addInstruction(newInstruction, true);
      break;
    case AddInstructionPosition.End:
        this.prg.addInstruction(newInstruction, true);
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

  /**
   * Gets the instructions contained in the program.
   * @returns   The collection of instructions of the program.
   * @author    Kevin White
   * @date      4 Aug 2020
   */
  get instructions(): Instruction[] {
    return this.prg.instructions;
  }

  /**
   * Gets the program.
   * @returns   The program instance.
   * @author    Kevin White
   * @date      10 Aug 2020
   */
  get program(): Program {
    return this.prg;
  }
}
