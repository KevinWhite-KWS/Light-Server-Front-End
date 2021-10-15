import { InstructionEncoder } from './instruction-encoder';
import { FadeInstruction } from '../instruction-4-fade';
import { Instruction } from "../instruction";
import { InstructionPart } from "./instruction-part";

/**
 * Encodes the fade instruction (04).
 * @author  Kevin White
 * @date    24 Jul 2020
 */
export class FadeInstructionEncoder extends InstructionEncoder {
  /**
   * Serializes the fade instruction to JSON.
   * @param instructionToSerialize  The pattern instruction instance to be serialized.
   * @author  Kevin White
   * @date    24 Jun 2020
   */
  serialize(instructionToSerialize: FadeInstruction): string {
    let encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 4);

    // add the step value (two hex digits between 1 and 50 in decimal value)
    const step = this.encodeNumberToHex(instructionToSerialize.step, 2);
    encodedPatternIns = `${encodedPatternIns}${step}`;

    // add whether to fade in (0) or fade out (1)
    const fadeIn = this.encodeNumberToHex(instructionToSerialize.fadeIn ? 0 : 1, 1);
    encodedPatternIns = `${encodedPatternIns}${fadeIn}`;

    // add the start colour
    const startColour = this.encodedColourToHex(instructionToSerialize.startColour);
    encodedPatternIns = `${encodedPatternIns}${startColour}`;

    // add the end colour
    const endColour = this.encodedColourToHex(instructionToSerialize.endColour);
    encodedPatternIns = `${encodedPatternIns}${endColour}`;

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
  serializeToParts(instructionToSerialize: FadeInstruction): InstructionPart[] {
    let encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 4);

    // add the step value (two hex digits between 1 and 50 in decimal value)
    const step = this.encodeNumberToHex(instructionToSerialize.step, 2);
    encodedPatternIns = `${encodedPatternIns}${step}`;

    // add whether to fade in (0) or fade out (1)
    const fadeIn = this.encodeNumberToHex(instructionToSerialize.fadeIn ? 0 : 1, 1);
    encodedPatternIns = `${encodedPatternIns}${fadeIn}`;

    // add the start colour
    const startColour = this.encodedColourToHex(instructionToSerialize.startColour);
    encodedPatternIns = `${encodedPatternIns}${startColour}`;

    // add the end colour
    const endColour = this.encodedColourToHex(instructionToSerialize.endColour);
    encodedPatternIns = `${encodedPatternIns}${endColour}`;

    return [
      new InstructionPart(this.serializeLdlInstructionToJson(encodedPatternIns))
    ];
  }
}
