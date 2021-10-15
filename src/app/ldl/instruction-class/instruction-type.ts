/**
 * Simple enum that determines the particular type
 * that an instruction instance represents.
 * @author    Kevin White
 * @date      27 Apr 2020
 */
export enum InstructionType {
  // effects
  Clear,        // 00
  Solid,        // 01
  Pattern,      // 02
  Slider,       // 03
  Fade,         // 04
  Stochastic,  // 05


  // structure
  Repeat = 100
}
