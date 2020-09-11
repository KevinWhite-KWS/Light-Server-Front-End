import { Component } from '@angular/core';
import { InstructionBase } from './instruction-base';
import { Colour } from '../colour';
import { PatternInstruction } from '../instruction-class/instruction-2-pattern';

/**
 * Provides an means of manipulating pattern (2)
 * instructions.
 * @author      Kevin White
 * @date        22 May 2020
 */
@Component({
  selector: 'app-ldl-instruction-2-pattern',
  templateUrl: './instruction-2-pattern.component.html'
})
export class Instruction2PatternComponent extends InstructionBase<PatternInstruction> {
  /**
   * Gets the collection of colours specified in the pattern.
   * @returns   A collection of Colour instances
   * @author    Kevin White
   * @date      13 Jul 2020
   */
  get colours() {
    return this.instruction.colours;
  }

  /**
   * Handles changes to a particular pixel colour.
   * @param newColour     The new colour of the pixel
   * @param pixelIndex    The index of the pixel
   * @author              Kevin White
   * @date                15 Jul 2020
   */
  changeColour(newColour: Colour, pixelIndex: number) {
    this.instruction.setColour(newColour, pixelIndex);
  }

  /**
   * Handles the removal of a pixel from the pattern.
   * @param pixelIndex    The index of the pixel to be removed
   * @author              Kevin White
   * @date                15 Jul 2020
   */
  deletePixel(pixelIndex: number) {
    this.instruction.removeColourAtIndex(pixelIndex);
  }

  /**
   * Handles adding a new pixel to the pattern.  The new
   * pixel is added with a default colour of (255,0,0).
   * @author              Kevin White
   * @date                15 Jul 2020
   */
  addPixel() {
    this.instruction.addColour(new Colour(255,0,0));
  }
}
