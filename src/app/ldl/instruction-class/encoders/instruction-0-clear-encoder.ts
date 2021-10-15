import { InstructionEncoder } from './instruction-encoder';
import { ClearInstruction } from '../instruction-0-clear';
import { Instruction } from "../instruction";
import { InstructionPart } from "./instruction-part";

/**
 * Encodes the clear instruction.
 * @author  Kevin White
 * @date    28 May 2020
 */
export class ClearInstructionEncoder extends InstructionEncoder {
  /**
   * Serializes the clear instruction to JSON.
   * @param instructionToSerialize  The clear instruction instance to be serialized.
   * @author  Kevin White
   * @date    28 May 2020
   */
  serialize(instructionToSerialize: ClearInstruction): string {
    const ldl = this.encodeInstructionOpcode(instructionToSerialize.duration, 0);
    return this.serializeLdlInstructionToJson(ldl);
  }

  /**
   * @param   instructionToSerialize      The LDL instruction instance to be serialized
   * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
   *                                      or null if it's not a container instruction.
   * @returns A collection of instruction parts
   * @author  Kevin White
   * @date    12 Aug 2020
   */
  serializeToParts(instructionToSerialize: Instruction): InstructionPart[] {
    const ldl = this.encodeInstructionOpcode(instructionToSerialize.duration, 0);
    return [
      new InstructionPart(this.serializeLdlInstructionToJson(ldl))
    ];
  }
}
