import { InstructionEncoder } from './instruction-encoder';
import { SliderInstruction } from '../instruction-3-slider';
import { Instruction } from "../instruction";
import { InstructionPart } from "./instruction-part";

/**
 * Encodes the slider instruction (03).
 * @author  Kevin White
 * @date    23 Jul 2020
 */
export class SliderInstructionEncoder extends InstructionEncoder {
  /**
   * Serializes the pattern instruction to JSON.
   * @param instructionToSerialize  The pattern instruction instance to be serialized.
   * @author  Kevin White
   * @date    17 Jun 2020
   */
  serialize(instructionToSerialize: SliderInstruction): string {
    let encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 3);

    // add the slider width (two hex digits between 1 and 50 in decimal value)
    const sliderWidth = this.encodeNumberToHex(instructionToSerialize.sliderWidth, 2);
    encodedPatternIns = `${encodedPatternIns}${sliderWidth}`;

    // add whether the slider starts at the near or far side (0 or 1)
    const startNear = this.encodeNumberToHex(instructionToSerialize.startNear ? 0 : 1, 1);
    encodedPatternIns = `${encodedPatternIns}${startNear}`;

    // add the slider colour
    const sliderColour = this.encodedColourToHex(instructionToSerialize.sliderColour);
    encodedPatternIns = `${encodedPatternIns}${sliderColour}`;

    // add the background colour
    const backgroundColour = this.encodedColourToHex(instructionToSerialize.backgroundColour);
    encodedPatternIns = `${encodedPatternIns}${backgroundColour}`;

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
  serializeToParts(instructionToSerialize: SliderInstruction): InstructionPart[] {
    let encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 3);

    // add the slider width (two hex digits between 1 and 50 in decimal value)
    const sliderWidth = this.encodeNumberToHex(instructionToSerialize.sliderWidth, 2);
    encodedPatternIns = `${encodedPatternIns}${sliderWidth}`;

    // add whether the slider starts at the near or far side (0 or 1)
    const startNear = this.encodeNumberToHex(instructionToSerialize.startNear ? 0 : 1, 1);
    encodedPatternIns = `${encodedPatternIns}${startNear}`;

    // add the slider colour
    const sliderColour = this.encodedColourToHex(instructionToSerialize.sliderColour);
    encodedPatternIns = `${encodedPatternIns}${sliderColour}`;

    // add the background colour
    const backgroundColour = this.encodedColourToHex(instructionToSerialize.backgroundColour);
    encodedPatternIns = `${encodedPatternIns}${backgroundColour}`;

    return [
      new InstructionPart(this.serializeLdlInstructionToJson(encodedPatternIns))
    ];
  }
}
