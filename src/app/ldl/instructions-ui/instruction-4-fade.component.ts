import { Component } from '@angular/core';
import { InstructionBase } from './instruction-base';
import { Colour } from '../colour';
import { FadeInstruction } from '../instruction-class/instruction-4-fade';

/**
 * Provides an means of manipulating fade (4)
 * instructions.
 * @author      Kevin White
 * @date        24 Jul 2020
 */
@Component({
  selector: 'app-ldl-instruction-4-fade',
  templateUrl: './instruction-4-fade.component.html'
})
export class Instruction4FadeComponent extends InstructionBase<FadeInstruction> {
  /**
   * Handles a change to the start colour.
   * @param sliderColour    The new start colour
   * @author                Kevin White
   * @date                  24 Jul 2020
   */
  changeStartColour(startColour: Colour) {
    this.instruction.startColour = startColour;
  }

  /**
   * Handles a change to the end colour.
   * @param backgroundColour    The new end colour
   * @author                    Kevin White
   * @date                      24 Jul 2020
   */
  changeEndColour(endColour: Colour) {
    this.instruction.endColour = endColour;
  }

  /**
   * Handles changes to the step value.
   * @param width     The new step value
   * @author          Kevin White
   * @date            24 Jul 2020
   */
  changeStep(step: number) {
    this.instruction.step = step;
  }

  /**
   * Handles changes to whether the LEDs should fade in
   * or fade out.
   * @param fadeIn    True if the LEDs should fade in, false if the they should fade out.
   * @author          Kevin White
   * @date            24 Jul 2020
   */
  changeFadeIn(fadeIn) {
    if (fadeIn) {
      this.instruction.fadeInLeds();
    } else {
      this.instruction.fadeOutLeds();
    }
  }
}
