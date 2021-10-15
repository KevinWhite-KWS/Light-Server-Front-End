import { Component } from '@angular/core';
import { InstructionBase } from './instruction-base';
import { Colour } from '../colour';
import { SolidInstruction } from '../instruction-class/instruction-1-solid';

/**
 * Provides an means of manipulating solid (1)
 * instructions.
 * @author      Kevin White
 * @date        22 May 2020
 */
@Component({
  selector: 'app-ldl-instruction-1-solid',
  templateUrl: './instruction-1-solid.component.html'
})
export class Instruction1SolidComponent extends InstructionBase<SolidInstruction> {
  /**
   * Handles a change to the selected colour that will be used
   * to render the pixels a solid colour.  Stores the new
   * colour in the instruction.
   * @param colour    The new pixel colour
   * @author          Kevin White
   * @date            26 May 2020
   */
  changeColour(colour: Colour) {
    this.instruction.colour = colour;
  }
}
