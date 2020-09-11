import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Colour } from './colour';
import { Instruction } from "./instruction-class/instruction";

/**
 * Provides a means of rendering a single LED pixel and,
 * furthermore, provides a colour picker
 * to allow the LED pixel colour to be changed if required.
 * @author      Kevin White
 * @date        30 Mar 2020
 */
@Component({
  selector: 'app-ldl-pixel',
  templateUrl: './pixel.component.html'
})
export class PixelComponent {
  @Output() onChangeColour = new EventEmitter<Colour>();
  @Output() onDelete = new EventEmitter();

  // the colour picker requires a simple rgb value as a string so we store that
  // value in this variable and use it to bind the colour picker.
  colourValue: string;
  currentColour = new Colour(0, 0, 0);

  // toggle whether the colour picker for the pixel should be enabled or not.  True to enable.
  @Input() canChangePixelColour = false;

  // toggle whether the pixel can be removed from a program.  True to allow pixel to be removed.
  @Input() canDeletePixel = true;


  /**
   * Sets the current pixel colour.
   * @param   The new pixel colour
   * @author  Kevin White
   * @date    30 Mar 2020
   */
  @Input() set colour(colour: Colour) {
    this.currentColour = colour;
    // this simple rgb value is required by the colour picker
    this.colourValue = colour.toRgb();
  }
  /**
   * Gets the current pixel colour.
   * @returns The current pixel colour.
   * @author  Kevin White
   * @date    30 Mar 2020
   */
  get colour(): Colour {
    return this.currentColour;
  }

  /**
   * Handles the change to the colour and emits
   * an event to allow this change to be handled by listeners.
   * @param newColourHex    The new selected colour
   * @author    Kevin White
   * @date      6 Jul 2020
   */
  private changeColour(newColourHex: string) {
    this.currentColour = new Colour(newColourHex);
    this.onChangeColour.emit(this.currentColour);
  }

  /**
   * Handles the user's request to remove a pixel by
   * emitting an event that can be handled to remove
   * the pixel from a program.
   * @author    Kevin White
   * @date      6 Jul 2020
   */
  handleDeletePixel() {
    this.onDelete.emit();
  }
}
