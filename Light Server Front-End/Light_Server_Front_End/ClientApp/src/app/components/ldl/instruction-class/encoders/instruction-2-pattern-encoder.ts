import { InstructionEncoder } from './instruction-encoder';
import { PatternInstruction } from '../instruction-2-pattern';
import { Colour } from "../../colour";
import { Instruction } from "../instruction";
import { InstructionPart } from "./instruction-part";

/**
 * Encodes the pattern instruction (02).
 * @author  Kevin White
 * @date    17 Jun 2020
 */
export class PatternInstructionEncoder extends InstructionEncoder {
  /**
   * Serializes the pattern instruction to JSON.
   * @param instructionToSerialize  The pattern instruction instance to be serialized.
   * @author  Kevin White
   * @date    17 Jun 2020
   */
  serialize(instructionToSerialize: PatternInstruction): string {
    let encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 2);

    // the pattern is encoded with the lengths then followed by the
    // colours.  For example: say with have 3 leds of (255,0,0),(255,0,0),(255,0,0)
    // These are just three red leds so the they are encoded to: 03FF0000 (03 = 3 pixels, FF0000 = red)
    // In the case of (255,0,0),(0,255,0),(255,0,0) we have one red pixel, then one green pixel, then one red pixel.
    // It is encoded as: 010101FF000000FF00FF0000 (01 = 1 pixel, 01 = 1 pixel, 01 = 1 pixel, FF0000 = red, 00FF00 = green, FF0000 = red)
    let patternElementCount = 0;
    let currentColourCount = 0;
    let lengthsStr = '';
    let coloursStr = '';
    const colours = instructionToSerialize.colours;
    const colourCount = colours.length;
    for (let i = 0; i < colourCount; i++) {
      const currentColour:Colour = colours[i];
      const nextColour:Colour = (i === colourCount - 1 ? null : colours[i + 1]);

      currentColourCount++;
      if (!nextColour || currentColour.toRgb() !== nextColour.toRgb()) {
        lengthsStr += this.encodeNumberToHex(currentColourCount, 2);
        coloursStr += this.encodedColourToHex(currentColour);
        currentColourCount = 0;
        patternElementCount++;
      }
    }
    const patternElementStr = this.encodeNumberToHex(patternElementCount, 2);
    encodedPatternIns = `${encodedPatternIns}${patternElementStr}${lengthsStr}${coloursStr}`;

    return this.serializeLdlInstructionToJson(encodedPatternIns);
  }

  /**
   * @param   instructionToSerialize      The LDL instruction instance to be serialized
   * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
   *                                      or null if it's not a container instruction.
   * @returns A collection of instruction parts
   * @author  Kevin White
   * @date    12 Aug 2020
   */
  serializeToParts(instructionToSerialize: PatternInstruction): InstructionPart[] {
    let encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 2);

    // the pattern is encoded with the lengths then followed by the
    // colours.  For example: say with have 3 leds of (255,0,0),(255,0,0),(255,0,0)
    // These are just three red leds so the they are encoded to: 03FF0000 (03 = 3 pixels, FF0000 = red)
    // In the case of (255,0,0),(0,255,0),(255,0,0) we have one red pixel, then one green pixel, then one red pixel.
    // It is encoded as: 010101FF000000FF00FF0000 (01 = 1 pixel, 01 = 1 pixel, 01 = 1 pixel, FF0000 = red, 00FF00 = green, FF0000 = red)
    let patternElementCount = 0;
    let currentColourCount = 0;
    let lengthsStr = '';
    let coloursStr = '';
    const colours = instructionToSerialize.colours;
    const colourCount = colours.length;
    for (let i = 0; i < colourCount; i++) {
      const currentColour: Colour = colours[i];
      const nextColour: Colour = (i === colourCount - 1 ? null : colours[i + 1]);

      currentColourCount++;
      if (!nextColour || currentColour.toRgb() !== nextColour.toRgb()) {
        lengthsStr += this.encodeNumberToHex(currentColourCount, 2);
        coloursStr += this.encodedColourToHex(currentColour);
        currentColourCount = 0;
        patternElementCount++;
      }
    }
    const patternElementStr = this.encodeNumberToHex(patternElementCount, 2);
    encodedPatternIns = `${encodedPatternIns}${patternElementStr}${lengthsStr}${coloursStr}`;

    return [
      new InstructionPart(this.serializeLdlInstructionToJson(encodedPatternIns))
    ];
  }
}
