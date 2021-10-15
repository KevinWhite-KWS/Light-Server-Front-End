import { Program } from '../program';
import { ClearInstructionEncoder } from './instruction-0-clear-encoder';
import { InstructionType } from '../instruction-type';
import { InstructionEncoder } from './instruction-encoder';
import { SolidInstructionEncoder } from './instruction-1-solid-encoder';
import { PatternInstructionEncoder } from './instruction-2-pattern-encoder';
import { SliderInstructionEncoder } from './instruction-3-slider-encoder';
import { FadeInstructionEncoder } from './instruction-4-fade-encoder';
import { StochasticInstructionEncoder } from './instruction-5-stochastic-encoder';
import { Instruction } from "../instruction";
import { InstructionContainer } from "../instruction-container";
import { RepeatInstructionEncoder } from './instruction-repeat.encoder';
import { InstructionPart } from "./instruction-part";

/**
 * Serializes a LDL program to JSON or deserializes
 * an LDL program from JSON.
 * @author  Kevin White
 * @date    2 Jun 2020
 */
export class ProgramEncoder {
  /**
   * Gets the instruction encoder instance that can be used
   * to serialize / deserialize an LDL instruction.
   * @param instructionType The type of instruction encoder that is required
   * @returns               A InstructionEncoder instance that can be used to encode LDL instructions
   * @author                Kevin White
   * @date                  2 Jun 2020
   */
  private getInstructionEncoder(instructionType: InstructionType): InstructionEncoder {
    let instructionEncoder = null;

    switch (instructionType) {
      // structure
      case InstructionType.Repeat:
        instructionEncoder = new RepeatInstructionEncoder();
        break;


      // effects
      case InstructionType.Clear:
        instructionEncoder = new ClearInstructionEncoder();
        break;
      case InstructionType.Solid:
        instructionEncoder = new SolidInstructionEncoder();
        break;
      case InstructionType.Pattern:
        instructionEncoder = new PatternInstructionEncoder();
        break;
      case InstructionType.Slider:
        instructionEncoder = new SliderInstructionEncoder();
        break;
      case InstructionType.Fade:
        instructionEncoder = new FadeInstructionEncoder();
        break;
      case InstructionType.Stochastic:
        instructionEncoder = new StochasticInstructionEncoder();
        return instructionEncoder;
    }

    return instructionEncoder;
  }


  private formatInstructionParts(instructionParts: InstructionPart[], indentationLevel: number): string {
    if (!instructionParts || instructionParts.length === 0) {
      return '';
    }

    let serializedInstruction = '';
    const countInstructionParts = instructionParts.length;
    for (let p = 0; p < countInstructionParts; p++) {
      const instructionPart: InstructionPart = instructionParts[p];

      serializedInstruction += `${'\t'.repeat(indentationLevel + instructionPart.level)}${instructionPart.part}`;
      console.log(`level = ${instructionPart.level}, indentationLevel = ${indentationLevel} : ${instructionPart.part}`);
      if (p < countInstructionParts - 1) {
        serializedInstruction += '\r\n';
      }
    }

    return serializedInstruction;
  }

  /**
   * Serializes a set of instructions to LDL.
   * @param   instructions    The program instructions to be serialized as LDL
   * @author  Kevin White
   * @date    12 aug 2020
   */
  private serializeInstructions(instructions: Instruction[], indentationLevel = 0): string {
    let serializedInstructions = '';

    const countIns = instructions.length;
    for (let i = 0; i < countIns; i++) {
      const instruction = instructions[i];
      const instructionEncoder = this.getInstructionEncoder(instruction.instructionType);

      if (!instructionEncoder) {
        throw new Error(`Cannot serialize instruction of type ${instruction.instructionType} as no encoder is available for it!  Create an encoder and add it to the getInstructionEncoder factory method.`);
      }

      let serializedChildInstructions = null;
      if (instruction instanceof InstructionContainer) {
        const containerInstruction = instruction as InstructionContainer;
        // this is a container instruction which has other child instructions.  So,
        // we need to serialize those child instructions first
        serializedChildInstructions = `${'\t'.repeat(indentationLevel)}${this.serializeInstructions(containerInstruction.instructions, indentationLevel + 1)}`;
      }

      const instructionParts:InstructionPart[] = instructionEncoder.serializeToParts(instruction, serializedChildInstructions);
      const serializedInstruction = this.formatInstructionParts(instructionParts, indentationLevel);

      serializedInstructions += serializedInstruction;
      // serializedInstructions += `${'\t'.repeat(indentationLevel)}${instructionEncoder.serialize(instruction, serializedChildInstructions)}`;
      if (i < countIns - 1) {
        serializedInstructions += ',\r\n   ';
      }
    }

    return serializedInstructions;
  }

  /**
   * Serializes an LDL program to JSON.
   * @author  Kevin White
   * @date    27 May 2020
   */
  serialize(programToSerialize: Program): string {
    if (!programToSerialize) {
      return '';
    }

    let serializedProgram = '';

    // Serialize the instructions first
    serializedProgram = this.serializeInstructions(programToSerialize.instructions);

    // Serialize the rest of the LDL program
    serializedProgram =
      '{\r\n' +
      ' "name" : "Testing",\r\n' +
      ' "instructions" : {\r\n' +
      '   ' + serializedProgram + '\r\n' +
      ' }\r\n' +
      '}';


    return serializedProgram;
  }
}
