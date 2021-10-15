import { InstructionType } from './instruction-type';
import { Instruction } from './instruction';
import { AddInstructionPosition } from './add-instruction-position';

/**
 * Contains the values necessary to add a new instruction
 * to an LDL program at a specific location relative
 * to an existing instruction i.e. before or
 * after the existing instruction.
 * @author  Kevin White
 * @date    4 May 2020
 */
export class AddInstruction {
  /**
   * Instantiates a new instance that specifies where a new instruction
   * will be added to an LDL program.
   * @param _instructionType      The type of new instruction to be added
   * @param _addPosition          The position where the new instruction will be added within the existing program
   * @param _existingInstruction  A reference to the existing instruction if adding before or after an existing instruction.
   * @author  Kevin White
   * @date    15 May 2020
   */
  constructor(
    private _instructionType: InstructionType,
    private _addPosition: AddInstructionPosition,
    private _existingInstruction: Instruction = null
  ) {
    if ((this._addPosition === AddInstructionPosition.After || this._addPosition === AddInstructionPosition.Before) &&
      !this._existingInstruction) {
      throw new Error('You must specify an existing instruction when inserting before or after');
    }
  }

  /**
   * Gets the type of instruction to be added.
   * @returns   The type of instruction to be added.
   * @author  Kevin White
   * @date    4 May 2020
   */
  get instructionType(): InstructionType {
    return this._instructionType;
  }

  /**
   * Gets the existing instruction that specifies
   * the relative position by which the new
   * instruction will be added.
   * @returns The existing instruction instance
   * @author  Kevin White
   * @date    4 May 2020
   */
  get existingInstruction(): Instruction {
    return this._existingInstruction;
  }

  /**
   * Gets the position in the program at which the new instruction
   * is to be added.
   * @returns The position where the new instruction is to be added.
   * @author  Kevin White
   * @date    15 May 2020
   */
  get position(): AddInstructionPosition {
    return this._addPosition;
  }
}
