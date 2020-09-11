import { Instruction } from './instruction';

/**
 * An LDL program consisting of basic properties
 * and a collection of instructions to be executed.
 * @author  Kevin White
 * @date    22 Apr 2020
 */
export class Program {
  private _instructions: Instruction[] = [];

  /**
   * Gets the collection of instruction that form
   * the LDL program.
   * @returns   The collection of program instructions.
   * @author    Kevin White
   * @date      22 Apr 2020
   */
  get instructions(): Instruction[] {
    return this._instructions;
  }

  /**
   * Adds an instruction to the end of the collection
   * unless insertAsFirst is true in which case as it
   * added as the first instruction.
   * @param instruction The instruction instance to be added
   * @author            Kevin White
   * @date              22 Apr 2020
   */
  addInstruction(instruction: Instruction, insertAsFirst: boolean = false) {
    if (!instruction) {
      return;
    }

    if (insertAsFirst) {
      this._instructions = [instruction].concat(this._instructions);
    } else {
      this._instructions.push(instruction);
    }
  }

  /**
   * Adds an instruction after the specified existing instruction.
   * @param instruction           The instruction instance to be added
   * @param succeedingInstruction The instruction after which the new instruction is to be added.
   * @author            Kevin White
   * @date              22 Apr 2020
   */
  addInstructionAfter(instruction: Instruction, proceedingInstruction: Instruction) {
    if (!instruction || !proceedingInstruction) {
      return;
    }

    const proceedingInstructionIndex = this._instructions.indexOf(proceedingInstruction);
    if (proceedingInstructionIndex > -1) {
      this._instructions.splice(proceedingInstructionIndex + 1, 0, instruction);
    }
  }

  /**
   * Adds an instruction before an existing instruction.
   * @param instruction           The instruction instance to be added
   * @param succeedingInstruction The instruction after which the new instruction is to be added.
   * @author            Kevin White
   * @date              22 Apr 2020
   */
  addInstructionBefore(instruction: Instruction, succeedingInstruction: Instruction) {
    if (!instruction || !succeedingInstruction) {
      return;
    }
    // const proceedingInstructionIndex = this._instructions.findIndex(e => e === proceedingInstruction);

    const proceedingInstructionIndex = this._instructions.indexOf(succeedingInstruction);
    if (proceedingInstructionIndex > -1) {
      this._instructions.splice(proceedingInstructionIndex, 0, instruction);
    }
  }

  /**
   * Removes an instruction from the collection of instructions.
   * @param instruction   The instruction instance to be removed
   * @author              Kevin White
   * @date                22 Apr 2020
   */
  removeInstruction(instruction: Instruction) {
    // removes an instruction from the collection
    if (!instruction) {
      return;
    }

    const instructionIndex = this._instructions.indexOf(instruction);

    if (instructionIndex > -1) {
      this._instructions.splice(instructionIndex, 1);
    }
  }
}
