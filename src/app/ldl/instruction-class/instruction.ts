import { Guid } from 'guid-typescript';
import { InstructionType } from "./instruction-type";

/**
 * Abstract base class for any LDL instruction.  This
 * class contains the basic properties, including
 * unique ID and duration.
 * @author  Kevin White
 * @date    21 Apr 2020
 */
export abstract class Instruction {
  private _id: Guid;
  private _duration: number;

  constructor() {
    this._id = Guid.create();   // assign a unique ID to the instruction so we can easily refer to it
    this.duration = 1;
  }

  /**
   * Gets the unique ID of the instruction.
   * @returns   A GUID which is the unique ID of the instruction.
   * @author    Kevin White
   * @date      21 Apr 2020
   */
  get id(): Guid {
    return this._id;
  }

  /**
   * Gets the effect duration of the instruction
   * in rendering frames.
   * @returns   The duration of the instruction in rendering frames
   * @author    Kevin White
   * @date      21 Apr 2020
   */
  get duration(): number {
    return this._duration;
  }

  /**
   * Sets the effect duration of the instruction
   * in rendering frames.
   * @param duration    The duration of the instruction in rendering frames (1 - 255).
   * @author    Kevin White
   * @date      21 Apr 2020
   */
  set duration(duration: number) {
    if (duration > 0 && duration < 256) {
      this._duration = duration;
    }
  }

  /**
   * Gets the type of instruction as a simple enumeration value.
   * @returns   The instruction type
   * @author    Kevin White
   * @date      24 Apr 2020
   */
  abstract get instructionType(): InstructionType;
}
