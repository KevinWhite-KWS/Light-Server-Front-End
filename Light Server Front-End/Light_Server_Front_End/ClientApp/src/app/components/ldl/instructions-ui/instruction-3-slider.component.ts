import { Component } from '@angular/core';
import { InstructionBase } from './instruction-base';
import { Colour } from '../colour';
import { SliderInstruction } from '../instruction-class/instruction-3-slider';

/**
 * Provides an means of manipulating slider (3)
 * instructions.
 * @author      Kevin White
 * @date        23 Jul 2020
 */
@Component({
  selector: 'app-ldl-instruction-3-slider',
  templateUrl: './instruction-3-slider.component.html'
})
export class Instruction3SliderComponent extends InstructionBase<SliderInstruction> {
  /**
   * Handles a change to the selected slider colour that
   * will be used to render the slider.
   * @param sliderColour    The new slider colour
   * @author                Kevin White
   * @date                  23 Jul 2020
   */
  changeSliderColour(sliderColour: Colour) {
    this.instruction.sliderColour = sliderColour;
  }

  /**
   * Handles a change to the selected background colour that
   * will be used to render the background.
   * @param backgroundColour    The new background colour
   * @author                    Kevin White
   * @date                      23 Jul 2020
   */
  changeBackgroundColour(backgroundColour: Colour) {
    this.instruction.backgroundColour = backgroundColour;
  }

  /**
   * Handles changes to the width of the slider.
   * @param width     The new width of the slider
   * @author          Kevin White
   * @date            23 Jul 2020
   */
  changeSliderWidth(width: number) {
    this.instruction.sliderWidth = width;
  }

  /**
   * Handles changes to whether the slider should
   * start near or far.
   * @param startNear True if the slider is to start far or false if it is to start near.
   * @author          Kevin White
   * @date            23 Jul 2020
   */
  changeStartFar(startFar) {
    if (startFar) {
      this.instruction.startSliderFar();
    } else {
      this.instruction.startSliderNear();
    }
  }
}
