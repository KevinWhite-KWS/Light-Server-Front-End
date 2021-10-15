import { InstructionEncoder } from './instruction-encoder';
import { SolidInstruction } from '../instruction-1-solid';
import { Instruction } from "../instruction";
import { InstructionPart } from "./instruction-part";

/**
 * Encodes the solid instruction.
 * @author  Kevin White
 * @date    28 May 2020
 */
export class SolidInstructionEncoder extends InstructionEncoder {
  /**
   * Serializes the solid instruction to JSON.
   * @param instructionToSerialize  The clear instruction instance to be serialized.
   * @author  Kevin White
   * @date    28 May 2020
   */
  serialize(instructionToSerialize: SolidInstruction): string {
    let encodedSolidIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 1);
    const solidColor = this.encodedColourToHex(instructionToSerialize.colour);

    encodedSolidIns = `${encodedSolidIns}${solidColor}`;

    return this.serializeLdlInstructionToJson(encodedSolidIns);
  }

  /**
   * @param   instructionToSerialize      The LDL instruction instance to be serialized
   * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
   *                                      or null if it's not a container instruction.
   * @returns A collection of instruction parts
   * @author  Kevin White
   * @date    12 Aug 2020
   */
  serializeToParts(instructionToSerialize: SolidInstruction): InstructionPart[] {
    let encodedSolidIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 1);
    const solidColor = this.encodedColourToHex(instructionToSerialize.colour);

    encodedSolidIns = `${encodedSolidIns}${solidColor}`;

    return [
      new InstructionPart(this.serializeLdlInstructionToJson(encodedSolidIns))
    ];
  }
}
