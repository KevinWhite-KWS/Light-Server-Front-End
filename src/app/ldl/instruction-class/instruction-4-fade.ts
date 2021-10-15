import { Instruction } from './instruction';
import { InstructionType } from './instruction-type';
import { Colour } from "../colour";

/**
 * Fade instruction (04) is an animation
 * effect that either fades in the LEDS from a start
 * colour to an end colour or fades out the LEDS.
 * on a constant background.
 * @author    Kevin White
 * @date      24 July 2020
 */
export class FadeInstruction extends Instruction {
  private _startColour: Colour = new Colour(0, 0, 0);
  private _endColour: Colour = new Colour(255, 255, 255);
  private _step = 1;
  private _fadeIn = true;

  /**
   * Gets the type of instruction as a simple enumeration value.
   * @returns   The instruction type
   * @author    Kevin White
   * @date      24 July 2020
   */
  get instructionType(): InstructionType {
    return InstructionType.Fade;
  }

  /**
   * Gets the start colour.
   * @returns   The start colour
   * @author    Kevin White
   * @date      24 July 2020
   */
  get startColour(): Colour {
    return this._startColour;
  }

  /**
   * Sets the start colour.
   * @param startColour  The start colour.
   * @author             Kevin White
   * @date               24 July 2020
   */
  set startColour(startColour: Colour) {
    if (!startColour) {
      return;
    }

    this._startColour = startColour;
  }

  /**
   * Gets the end colour.
   * @returns   The end colour
   * @author    Kevin White
   * @date      24 July 2020
   */
  get endColour(): Colour {
    return this._endColour;
  }

  /**
   * Sets the end colour.
   * @param endColour  The end colour
   * @author           Kevin White
   * @date             24 July 2020
   */
  set endColour(endColour: Colour) {
    if (!endColour) {
      return;
    }

    this._endColour = endColour;
  }

  /**
   * Gets the step value of the pixel increment.
   * @returns   The step value of the pixel increment.
   * @author    Kevin White
   * @date      24 July 2020
   */
  get step(): number {
    return this._step;
  }

  /**
   * Sets the step value of the pixel increment.
   * @param step      The step value of the pixel incremnet
   * @author          Kevin White
   * @date            24 July 2020
   */
  set step(step:number) {
    if (step < 1 || step > 50) {
      return;
    }

    this._step = step;
  }

  /**
   * Gets whether the slider fades in.
   * @returns     True if the LEDs fade in or false if the LEDs fade out
   * @author      Kevin White
   * @date        24 July 2020
   */
  get fadeIn(): boolean {
    return this._fadeIn;
  }

  /**
   * Sets the LEDs to fade in.
   * @author      Kevin White
   * @date        24 July 2020
   */
  fadeInLeds() {
    this._fadeIn = false;
  }

  /**
   * Sets the LEDs to fade out.
   * @author      Kevin White
   * @date        24 July 2020
   */
  fadeOutLeds() {
    this._fadeIn = true;
  }
}
