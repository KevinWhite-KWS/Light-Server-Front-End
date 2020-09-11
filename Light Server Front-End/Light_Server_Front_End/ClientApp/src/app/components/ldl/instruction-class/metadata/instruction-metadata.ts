import { InstructionType } from "../instruction-type";

/**
 * Defines the metadata of an individual instruction.  The metadata
 * of an instruction consists of: the instruction type, the name
 * of the instruction, and the description.
 * @author    Kevin White
 * @date      29 Apr 2020
 */
export class InstructionMetadata {
  constructor(
    protected instructionType: InstructionType,
    protected instructionNumber: number,
    protected name: string,
    protected description: string
  ) {
  }

  /**
   * Gets the instruction type as a simple enum value.
   * @returns   The instruction type
   * @author    Kevin White
   * @date      29 Apr 2020
   */
  get InstructionType(): InstructionType {
    return this.instructionType;
  }

  /**
   * Gets the LDL instruction number for the instruction.
   * @returns   The LDL instruction number.
   * @author    Kevin White
   * @date      30 Apr 2020
   */
  get InstructionNumber(): number {
    return this.instructionNumber;
  }

  /**
   * Gets the friendly name of the instruction.
   * @returns   The friendly name of the instruction.
   * @author    Kevin White
   * @date      29 Apr 2020
   */
  get Name(): string {
    return this.name;
  }

  /**
   * Gets the friendly description of the instruction.
   * @returns   The friendly description of the instruction.
   * @author    Kevin White
   * @date      29 Apr 2020
   */
  get Description(): string {
    return this.description;
  }
}
