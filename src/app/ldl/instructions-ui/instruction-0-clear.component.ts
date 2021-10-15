import { Component } from '@angular/core';
import { InstructionBase } from './instruction-base';
import { ClearInstruction } from '../instruction-class/instruction-0-clear';

/**
 * Provides an means of manipulating clear (0)
 * instructions.
 * @author      Kevin White
 * @date        20 Apr 2020
 */
@Component({
  selector: 'app-ldl-instruction-0-clear',
  templateUrl: './instruction-0-clear.component.html'
})
export class Instruction0ClearComponent extends InstructionBase<ClearInstruction> {
}
