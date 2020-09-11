import { Instruction } from '../instruction';
import { Colour } from "../../colour";
import { InstructionPart } from "./instruction-part";

export abstract class InstructionEncoder {
  /**
   * Encodes a number as a hexadecimal string of
   * at least two characters.
   * @param value   The number to be encoded to hex
   * @returns       The hexadecimal string of the number value, proceeded by
   *                as many 0 as necessary to form a string of the minimum length.
   * @author        Kevin White
   * @date          27 May 2020
   */
  protected encodeNumberToHex(value: number, minCharacters: number = 2): string {
    let encodedValue = value.toString(16);
    encodedValue = "0".repeat(minCharacters - encodedValue.length) + encodedValue;

    return encodedValue.toUpperCase();
  }

  /**
   * Encodes the op-code and duration part.
   * @param duration  The duration of the instruction.
   * @param opCode    The op-code of the instruction.
   * @author          Kevin White
   * @date            27 May 2020
   */
  protected encodeInstructionOpcode(duration: number, opCode: number): string {
    const durationEncoded = this.encodeNumberToHex(duration, 2);
    const opCodeEncoded = this.encodeNumberToHex(opCode, 2);
    return `${opCodeEncoded}${durationEncoded}0000`;
  }

  /**
   * Encodes a colour (RGB) as a hexadecimal string.
   * @param colour    The colour to be encoded as hex
   * @author          Kevin White
   * @date            28 May 2020
   */
  protected encodedColourToHex(colour: Colour) {
    const rEncoded = this.encodeNumberToHex(colour.r);
    const gEncoded = this.encodeNumberToHex(colour.g);
    const bEncoded = this.encodeNumberToHex(colour.b);

    return `${rEncoded}${gEncoded}${bEncoded}`;
  }

  /**
   * Serializes an LDL instruction to JSON.
   * @param ldl     The LDL instruction to be serialized to JSON
   * @returns       The serialized instruction as JSON
   * @author        Kevin White
   * @date          1 Jun 2020
   */
  protected serializeLdlInstructionToJson(ldl: string): string {
    return `"instruction" : "${ldl}"`;
  }

  /**
   * Serializes the instruction to JSON.
   * @param   instructionToSerialize      The LDL instruction instance to be serialized
   * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
   *                                      or null if it's not a container instruction.
   * @author  Kevin White
   * @date    27 May 2020
   */
  abstract serialize(instructionToSerialize: Instruction, serializedChildInstructions?: string): string;

  /**
   * @param   instructionToSerialize      The LDL instruction instance to be serialized
   * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
   *                                      or null if it's not a container instruction.
   * @returns A collection of instruction parts
   * @author  Kevin White
   * @date    12 Aug 2020
   */
  abstract serializeToParts(instructionToSerialize: Instruction, serializedChildInstruction?: string): InstructionPart[];
}
