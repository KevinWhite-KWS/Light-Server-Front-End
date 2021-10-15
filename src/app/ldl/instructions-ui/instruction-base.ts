import { Input, Output, EventEmitter } from '@angular/core';
import { Instruction } from '../instruction-class/instruction';
import { InstructionType } from '../instruction-class/instruction-type';
import { AddInstruction } from '../instruction-class/add-instruction';
import { AddInstructionPosition } from '../instruction-class/add-instruction-position';

/**
 * Abstract instruction base class provides the common
 * behaviour for instruction components.
 * @author    Kevin White
 * @date      28 Apr 2020
 */
export abstract class InstructionBase<TInsType extends Instruction> {
  // export abstract class InstructionBase {
  // @Input() instruction: Instruction;
  @Input() instruction: TInsType;

  @Output() onRemoveInstruction = new EventEmitter<TInsType>();
  // @Output() onRemoveInstruction = new EventEmitter<Instruction>();
  @Output() onAddInstruction = new EventEmitter<AddInstruction>();

  /**
   * Raises the onRemoveInstruction event so that the
   * encapsulated instruction can be removed from a program.
   * @author  Kevin White
   * @date    28 Apr 2020
   */
  removeInstruction(): void {
    this.onRemoveInstruction.emit(this.instruction);
  }

  /**
   * Handles a request to add a new instruction before this instruction.  Emits
   * an event to the container that allows the new instruction to be added
   * to that container.
   * @param instructionType   The type of instruction that is being added
   * @author  Kevin White
   * @date    4 May 2020
   */
  addInstructionBefore(instructionType: InstructionType) {
    const addInstruction = new AddInstruction(instructionType, AddInstructionPosition.Before, this.instruction);
    this.onAddInstruction.emit(addInstruction);
  }

  /**
   * Handles a request to add a new instruction after this instruction.  Emits
   * an event to the container that allows the new instruction to be added
   * to that container.
   * @param instructionType   The type of instruction that is being added
   * @author  Kevin White
   * @date    4 May 2020
   */
  addInstructionAfter(instructionType: InstructionType) {
    const addInstruction = new AddInstruction(instructionType, AddInstructionPosition.After, this.instruction);
    this.onAddInstruction.emit(addInstruction);
  }

  /**
   * Re-emits an add before instruction object.  This is use by
   * concrete instructions that are handling the base
   * class events and re-emitting them.
   * @param   addInstruction  The AddInstruction instance that needs to be re-emitted
   * @author  Kevin White
   * @date    12 May 2020
   */
  emitAddInstruction(addInstruction: AddInstruction) {
    this.onAddInstruction.emit(addInstruction);
  }
}
