import { InstructionType } from './instruction-type';
import { InstructionContainer } from './instruction-container';
import { Program } from "./program";
import { InstructionService } from "./instruction-service";

/**
 * Repeat instruction is a container type instruction
 * that loops a specified number of times or
 * infinitely and repeats the contained instructions.
 * @author    Kevin White
 * @date      3 Aug 2020
 */
export class RepeatInstruction extends InstructionContainer {
  private _times = 0;

  constructor(instructionService: InstructionService) {
    super(instructionService);
    this.prg = new Program();
  }


  /**
   * Gets the type of instruction as a simple enumeration value.
   * @returns   The instruction type
   * @author    Kevin White
   * @date      24 Apr 2020
   */
  get instructionType(): InstructionType {
    return InstructionType.Repeat;
  }

  /**
   * Gets the number of times the loop will repeat
   * or 0 if it is an infinite loop.
   * @returns     The number of times the loop will repeat
   * @author      Kevin White
   * @date        3 Aug 2020
   */
  get times(): number {
    return this._times;
  }
  /**
   * Sets the number of times the loop will repeat.
   * @param times   The number of times the finite loop will repeat (between 1-1000)
   *                or 0 for an infinite loop.
   * @author        Kevin White
   * @date          3 Aug 2020
   */
  set times(times: number) {
    if (times < 0 || times > 1000) {
      return;
    }
    this._times = times;
  }



}
