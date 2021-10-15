import { Instruction } from './instruction';
import { InstructionType } from './instruction-type';
import { Colour } from "../colour";

/**
 * Stochastic instruction (05) generates a random set
 * of colours of a given set of possible colours.
 * @author    Kevin White
 * @date      27 Jul 2020
 */
export class StochasticInstruction extends Instruction {
  // Store a collection of colours.
  private _colours: Colour[] = [
    new Colour(255, 0, 0),
    new Colour(0, 255, 0)
  ];

  /**
   * Gets the type of instruction as a simple enumeration value.
   * @returns   The instruction type
   * @author    Kevin White
   * @date      27 Jul 2020
   */
  get instructionType(): InstructionType {
    return InstructionType.Stochastic;
  }

  /**
   * Gets the colours to use to render the pixels in a random manner.
   * @returns   The collection of colours to be used to render the pixels
   * @author    Kevin White
   * @date      27 Jul 2020
   */
  get colours(): Colour[] {
    return this._colours;
  }

  /**
   * Removes the colour at the given index from the
   * collection of colours.  This removes that particular
   * colour from the possible colours to be used to render
   * the LEDs.
   * NOTE: there must be at least two colours.
   * @param index   The index of the colour to be removed from the collection of colours
   * @author        Kevin White
   * @date          27 Jul 2020
   */
  removeColourAtIndex(index: number) {
    if (this._colours.length <= 2) {
      return;
    }

    this._colours.splice(index, 1);
  }

  /**
   * Sets the colour of a pixel at a particular index.
   * @param newColour   The new colour of the pixel
   * @param index       The index of the colour to be changed
   * @author            Kevin White
   * @date              27 Jul 2020
   */
  setColour(newColour: Colour, index: number) {
    if (index >= this._colours.length) {
      return;
    }
    this._colours[index].r = newColour.r;
    this._colours[index].g = newColour.g;
    this._colours[index].b = newColour.b;
  }

  /**
   * Adds a new colour to the collection of
   * colours to be used to render the pixels.
   * NOTE: there can only be 10 colours maximum.
   * @param colour  The new colour that is to be added
   * @author        Kevin White
   * @date          27 Jul 2020
   */
  addColour(colour: Colour) {
    if (this._colours.length >= 10) {
      return;
    }

    this._colours.push(colour);
  }
}
