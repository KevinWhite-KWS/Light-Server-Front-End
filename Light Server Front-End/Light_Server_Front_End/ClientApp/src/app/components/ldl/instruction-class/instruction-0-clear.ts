import { Instruction } from './instruction';
import { InstructionType } from './instruction-type';

/**
 * Clear instruction (00) causes the LEDs
 * to be cleared for a specified duration.
 * @author    Kevin White
 * @date      21 Apr 2020
 */
export class ClearInstruction extends Instruction {
  /**
   * Gets the type of instruction as a simple enumeration value.
   * @returns   The instruction type
   * @author    Kevin White
   * @date      24 Apr 2020
   */
  get instructionType(): InstructionType {
    return InstructionType.Clear;
  }
}
