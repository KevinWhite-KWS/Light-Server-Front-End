import { Instruction } from './instruction';
import { InstructionType } from './instruction-type';
import { Colour } from "../colour";

/**
 * Slider instruction (03) is an animation
 * effect akin to the knight rider car kit.
 * The 'slider' moves from one side to the other
 * on a constant background.
 * @author    Kevin White
 * @date      23 July 2020
 */
export class SliderInstruction extends Instruction {
  private _sliderColour: Colour = new Colour(255, 0, 0);
  private _backgroundColour: Colour = new Colour(0, 0, 0);
  private _sliderWidth = 1;
  private _startNear = true;

  /**
   * Gets the type of instruction as a simple enumeration value.
   * @returns   The instruction type
   * @author    Kevin White
   * @date      23 July 2020
   */
  get instructionType(): InstructionType {
    return InstructionType.Slider;
  }

  /**
   * Gets the colour of the slider.
   * @returns   The colour of the slider
   * @author    Kevin White
   * @date      23 July 2020
   */
  get sliderColour(): Colour {
    return this._sliderColour;
  }

  /**
   * Sets the colour of the slider.
   * @param sliderColour  The colour of the slider
   * @author              Kevin White
   * @date                23 July 2020
   */
  set sliderColour(sliderColour: Colour) {
    if (!sliderColour) {
      return;
    }

    this._sliderColour = sliderColour;
  }

  /**
   * Gets the colour of the background pixels.
   * @returns   The colour of the background pixels
   * @author    Kevin White
   * @date      23 July 2020
   */
  get backgroundColour(): Colour {
    return this._backgroundColour;
  }

  /**
   * Sets the colour of the background pixels.
   * @param backgroundColour  The colour of the background pixels
   * @author                  Kevin White
   * @date                    23 July 2020
   */
  set backgroundColour(backgroundColour: Colour) {
    if (!backgroundColour) {
      return;
    }

    this._backgroundColour = backgroundColour;
  }

  /**
   * Gets the width of the slider.
   * @returns   The width of the slider.
   * @author    Kevin White
   * @date      23 July 2020
   */
  get sliderWidth(): number {
    return this._sliderWidth
  }

  /**
   * Sets the width of the width.
   * @param sliderWidth   The width of the slider
   * @author              Kevin White
   * @date                23 July 2020
   */
  set sliderWidth(sliderWidth:number) {
    if (sliderWidth < 1 || sliderWidth > 50) {
      return;
    }

    this._sliderWidth = sliderWidth;
  }

  /**
   * Gets whether the slider starts from the near side.
   * @returns     True if the slider starts from the near side or false if it starts from the far side
   * @author      Kevin White
   * @date        23 July 2020
   */
  get startNear(): boolean {
    return this._startNear;
  }

  /**
   * Sets the slider to start from the near side.
   * @author      Kevin White
   * @date        23 July 2020
   */
  startSliderNear() {
    this._startNear = true;
  }

  /**
   * Sets the slider to start from the far side.
   * @author      Kevin White
   * @date        23 July 2020
   */
  startSliderFar() {
    this._startNear = false;
  }
}
