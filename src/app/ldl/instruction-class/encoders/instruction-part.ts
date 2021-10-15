/**
 * Stores a part of a serialized instruction.  Many serialized instructions
 * will have just a single part but more complex instructions, such as loops,
 * will have multiple parts.
 * @author    Kevin White
 * @date      12 Aug 20020
 */
export class InstructionPart {
  private _instructionPart: string;
  private _level: number;

  /**
   * Instantiates a new instance of InstructionPart.
   * @param instructionPart   The serialized instruction part
   * @param level             The indentation level of the instruction part
   * @author    Kevin White
   * @date      12 Aug 20020
   */
  constructor(
    instructionPart: string,
    level = 0
  ) {
    this._instructionPart = instructionPart;
    this._level = level;
  }

  /**
   * Gets the serialized instruction part.
   * @returns   The serialized instruction part.
   * @author    Kevin White
   * @date      12 Aug 20020
   */
  get part(): string {
    return this._instructionPart;
  }

  /**
   * Gets the indentation level of the instruction part.
   * @returns   The indentation level
   * @author    Kevin White
   * @date      12 Aug 20020
   */
  get level(): number {
    return this._level;
  }
}
