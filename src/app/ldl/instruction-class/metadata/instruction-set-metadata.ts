import { InstructionMetadata } from './instruction-metadata';

/**
 * Provides the metadata that describes the available
 * instructions of the LDL program.
 * @author    Kevin White
 * @date      30 Apr 2020
 */
export class InstructionSetMetadata {
  constructor(
    protected instructions: InstructionMetadata[],
    protected version: string
  ) {
  }

  /**
   * Gets the collection of instructions that makeup the metadata
   * of the available instructions.
   * @returns   The collection of instruction metadata
   * @author    Kevin White
   * @date      30 Apr 2020
   */
  get Instructions() : InstructionMetadata[] {
    return this.instructions;
  }

  /**
   * Gets the instruction set version number which is the
   * LDL instruction set version number.
   * @returns   The instruction set version
   * @author    Kevin White
   * @date      30 Apr 2020
   */
  get Version(): string {
    return this.version;
  }
}
