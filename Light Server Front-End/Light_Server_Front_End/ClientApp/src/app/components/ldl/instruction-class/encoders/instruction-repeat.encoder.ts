import { InstructionEncoder } from './instruction-encoder';
import { RepeatInstruction } from "../instruction-repeat";
import { Instruction } from "../instruction";
import { InstructionPart } from "./instruction-part";

/**
 * Encodes the repeat instruction.
 * @author  Kevin White
 * @date    3 Aug 2020
 */
export class RepeatInstructionEncoder extends InstructionEncoder {
  /**
   * Serializes the repeat container instruction to JSON.
   * @param   instructionToSerialize  The repeat instruction instance to be serialized.
   * @author  Kevin White
   * @date    3 Aug 2020
   */
  serialize(instructionToSerialize: RepeatInstruction, serializedChildInstructions: string): string {
    /*
     * Example:
     * "repeat": {
     *    "times": 10,
     *    "instructions" : [
     *      "ins1" : ...
     *    ]
     * }
     */
    const ldl =
        '"repeat": {\r\n' +
        `\t"times" : ${instructionToSerialize.times},\r\n` +
        '\t"instructions" : {\r\n' +
        `\t${serializedChildInstructions}\r\n` +
        '\t}\r\n' +
      '}';


    /*
    let ldl = [
      new InstructionPart('"repeat": {', 0),
        new InstructionPart(`"times" : ${instructionToSerialize.times},`, 1),
        new InstructionPart('"instructions" : {', 1),
          new InstructionPart(`${serializedChildInstructions}`, 2),
        new InstructionPart('}', 1)
    ];
    */

    return ldl;


  }


  /**
   * @param   instructionToSerialize      The LDL instruction instance to be serialized
   * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
   *                                      or null if it's not a container instruction.
   * @returns A collection of instruction parts
   * @author  Kevin White
   * @date    12 Aug 2020
   */
  serializeToParts(instructionToSerialize: RepeatInstruction, serializedChildInstructions: string): InstructionPart[] {
    return [
      new InstructionPart('"repeat": {', 0),
        new InstructionPart(`"times" : ${instructionToSerialize.times},`, 1),
        new InstructionPart('"instructions" : {', 1),
          new InstructionPart(`${serializedChildInstructions}`, 2),
        new InstructionPart('}', 1),
      new InstructionPart('}', 0)
    ];
  }
}
