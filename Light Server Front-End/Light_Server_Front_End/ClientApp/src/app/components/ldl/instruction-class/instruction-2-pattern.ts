import { Instruction } from './instruction';
import { InstructionType } from './instruction-type';
import { Colour } from "../colour";

/**
 * Pattern instruction (02) causes the LEDs
 * to be rendered according to a specified pattern
 * which then repeats along the entire length.
 * of LEDs.
 * @author    Kevin White
 * @date      16 June 2020
 */
export class PatternInstruction extends Instruction {
  // Store a collection of colours.
  private _colours: Colour[] = [
    new Colour(255, 0, 0),
    new Colour(0, 255, 0),
    new Colour(255, 0 ,0)
  ];

  /**
   * Gets the type of instruction as a simple enumeration value.
   * @returns   The instruction type
   * @author    Kevin White
   * @date      16 June 2020
   */
  get instructionType(): InstructionType {
    return InstructionType.Pattern;
  }

  /**
   * Gets the colours to use to render the pixels
   * and then repeat that pattern.
   * @returns   The collection of colours to be used to render the pixels
   * @author    Kevin White
   * @date      6 Jul 2020
   */
  get colours(): Colour[] {
    //const colours:Colour[] = [];

    //for (const colour of this._colours) {
    //  colours.push(new Colour(colour.toRgb()));
    //}

    //return colours;
    return this._colours;
  }

  /**
   * Removes the colour at the given index from the
   * collection of colours.  This removes that particular
   * colour from the pattern.
   * NOTE: there must be at least two colours.
   * @param index   The index of the colour to be removed from the collection of colours
   * @author        Kevin White
   * @date          6 Jul 2020
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
   * @date              15 Jul 2020
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
   * @date          15 Jul 2020
   */
  addColour(colour: Colour) {
    if (this._colours.length >= 10) {
      return;
    }

    this._colours.push(colour);
  }
}
