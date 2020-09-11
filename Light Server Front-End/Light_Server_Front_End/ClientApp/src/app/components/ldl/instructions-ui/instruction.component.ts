import { Component, Input } from '@angular/core';

import { InstructionBase } from './instruction-base';
import { Instruction } from '../instruction-class/instruction';

/**
 * Provides the base encapsulating type for any
 * LDL instruction.  The common functionality
 * such as setting the instruction duration
 * is provided by this type.
 * @author      Kevin White
 * @date        15 Apr 2020
 */
@Component({
  selector: 'app-ldl-instruction',
  templateUrl: './instruction.component.html'
})
export class InstructionComponent extends InstructionBase<Instruction> {
  /**
   * Gets / sets the friendly display name of the instruction.
   * @author  Kevin White
   * @date    28 Apr 2020
   */
  @Input() name = '';
  /**
   * Gets / sets the friendly description of the instruction.
   * @author  Kevin White
   * @date    28 Apr 2020
   */
  @Input() description = '';

  /**
   * Gets / sets whether the user should be allowed
   * to set the duration of the instruction in rendering frames.
   * @author  Kevin White
   * @date    28 Apr 2020
   */
  @Input() showDuration = true;

  /**
   * Gets / sets whether the user should be allowed
   * to preview the instruction effect.
   * @author  Kevin White
   * @date    28 Apr 2020
   */
  @Input() showPreviewButton = true;

  /**
   * Gets / sets whether the user should be allwed
   * to remove the instruction effect.
   * @author  Kevin White
   * @date    28 Apr 2020
   */
  @Input() showRemoveButton = true;

  /**
   * Handles changes to the value fo the effect duration.
   * The duration is stored in the underlying instruction.
   * @param duration  The new effect duration
   * @author          Kevin White
   * @date            26 May 2020
   */
  changeDuration(duration: number) {
    this.instruction.duration = duration;
  }
}
