import { Instruction } from './instruction';
import { InstructionType } from './instruction-type';
import { Colour } from "../colour";

/**
 * Solid instruction (01) causes the LEDs
 * to be set to a solid colour for a specified duration.
 * @author    Kevin White
 * @date      21 May 2020
 */
export class SolidInstruction extends Instruction {
  private _colour: Colour = new Colour(0, 0, 0);

  /**
   * Gets the type of instruction as a simple enumeration value.
   * @returns   The instruction type
   * @author    Kevin White
   * @date      24 Apr 2020
   */
  get instructionType(): InstructionType {
    return InstructionType.Solid;
  }

  /**
   * Sets the colour to be used for the pixels.
   * @param colour  The colour of the pixels
   * @author        Kevin White
   * @date          22 May 2020
   */
  set colour(colour: Colour) {
    if (!colour) {
      return;
    }

    this._colour = colour;
  }

  /**
   * Gets the colour to be used for the pixels.
   * @returns   The colour to be used for the pixels
   * @author    Kevin White
   * @date      22 May 2020
   */
  get colour() {
    return this._colour;
  }
}
