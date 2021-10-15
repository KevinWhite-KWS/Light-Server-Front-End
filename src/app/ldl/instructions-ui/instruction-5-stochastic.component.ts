import { Component } from '@angular/core';
import { InstructionBase } from './instruction-base';
import { Colour } from '../colour';
import { StochasticInstruction } from '../instruction-class/instruction-5-stochastic';

/**
 * Provides an means of manipulating stochastic (5)
 * instructions.
 * @author      Kevin White
 * @date        27 Jul 2020
 */
@Component({
  selector: 'app-ldl-instruction-5-stochastic',
  templateUrl: './instruction-5-stochastic.component.html'
})
export class Instruction5StochasticComponent extends InstructionBase<StochasticInstruction> {
  /**
   * Gets the collection of colours specified in the stochastic effect.
   * @returns   A collection of Colour instances
   * @author    Kevin White
   * @date      27 Jul 2020
   */
  get colours() {
    return this.instruction.colours;
  }
  /**
   * Handles changes to a particular pixel colour.
   * @param newColour     The new colour of the pixel
   * @param pixelIndex    The index of the pixel
   * @author              Kevin White
   * @date                27 Jul 2020
   */
  changeColour(newColour: Colour, pixelIndex: number) {
    this.instruction.setColour(newColour, pixelIndex);
  }

  /**
   * Handles the removal of a pixel from the stochastic effect.
   * @param pixelIndex    The index of the pixel to be removed
   * @author              Kevin White
   * @date                27 Jul 2020
   */
  deletePixel(pixelIndex: number) {
    this.instruction.removeColourAtIndex(pixelIndex);
  }

  /**
   * Handles adding a new pixel to the stochastic effect.  The new
   * pixel is added with a default colour of (255,0,0).
   * @author              Kevin White
   * @date                27 Jul 2020
   */
  addPixel() {
    this.instruction.addColour(new Colour(255,0,0));
  }
}
