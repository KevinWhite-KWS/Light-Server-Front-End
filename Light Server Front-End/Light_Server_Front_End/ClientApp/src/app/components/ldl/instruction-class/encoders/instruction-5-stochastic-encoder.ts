import { InstructionEncoder } from './instruction-encoder';
import { StochasticInstruction } from "../instruction-5-stochastic";
import { Instruction } from "../instruction";
import { InstructionPart } from "./instruction-part";

/**
 * Encodes the stochastic instruction (05).
 * @author  Kevin White
 * @date    17 Jun 2020
 */
export class StochasticInstructionEncoder extends InstructionEncoder {
  /**
   * Serializes the stochastic instruction to JSON.
   * @param instructionToSerialize  The pattern instruction instance to be serialized.
   * @author  Kevin White
   * @date    27 Jun 2020
   */
  serialize(instructionToSerialize: StochasticInstruction): string {
    let encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 5);

    // add the number of colours involved in the effect
    const numberOfColours = instructionToSerialize.colours.length;
    const numberOfColoursStr = this.encodeNumberToHex(numberOfColours, 2);
    encodedPatternIns = `${encodedPatternIns}${numberOfColoursStr}`;

    // add the individual colours
    for (const colour of instructionToSerialize.colours) {
      const colourStr = this.encodedColourToHex(colour);
      encodedPatternIns = `${encodedPatternIns}${colourStr}`;
    }

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
  serializeToParts(instructionToSerialize: StochasticInstruction): InstructionPart[] {
    let encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 5);

    // add the number of colours involved in the effect
    const numberOfColours = instructionToSerialize.colours.length;
    const numberOfColoursStr = this.encodeNumberToHex(numberOfColours, 2);
    encodedPatternIns = `${encodedPatternIns}${numberOfColoursStr}`;

    // add the individual colours
    for (const colour of instructionToSerialize.colours) {
      const colourStr = this.encodedColourToHex(colour);
      encodedPatternIns = `${encodedPatternIns}${colourStr}`;
    }

    return [
      new InstructionPart(this.serializeLdlInstructionToJson(encodedPatternIns))
    ];
  }
}
