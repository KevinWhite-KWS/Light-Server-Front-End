import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Provides a means of allowing the duration of the effect to be specified
 * in 50ms increments.  The value must be between 50ms and 12750ms.  That is,
 * a value between 1 and 255 rendering frames.
 * @author      Kevin White
 * @date        31 Mar 2020
 */
@Component({
  selector: 'app-ldl-duration',
  templateUrl: './duration.component.html'
})
export class DurationComponent {
  @Output() onChangeDuration = new EventEmitter<number>();

  public selectedDuration = 1;

  /**
   * Sets the current duration of the effect
   * in rendering frames.  This must be a value
   * between 1 and 255.  If a value is passed outside
   * this range then the duration is set to 1.
   * @param   duration    The effect duration in rendering frames
   * @author  Kevin White
   * @date    31 Mar 2020
   */
  @Input() set duration(duration: number) {
    if (duration < 1 || duration > 255)
      this.selectedDuration = 1;
    else
      this.selectedDuration = duration;
  }
  /**
   * Gets the duration of the effect in rendering frames.
   * @returns The effect duration in rendering frames.
   * @author  Kevin White
   * @date    31 Mar 2020
   */
  get duration(): number {
    return this.selectedDuration;
  }

  /**
   * Handles changes to the slider value by storing the new
   * value so that it can be accessed by external components.
   * @param   newDuration   The new duration that has been specified
   * @author  Kevin White
   * @date    1 Apr 2020
   */
  public changeDuration(newDuration:number) {
    this.duration = newDuration;
    this.onChangeDuration.emit(newDuration);
  }
}
