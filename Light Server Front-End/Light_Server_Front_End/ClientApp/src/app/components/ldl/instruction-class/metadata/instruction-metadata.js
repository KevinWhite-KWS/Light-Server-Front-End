"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the metadata of an individual instruction.  The metadata
 * of an instruction consists of: the instruction type, the name
 * of the instruction, and the description.
 * @author    Kevin White
 * @date      29 Apr 2020
 */
var InstructionMetadata = /** @class */ (function () {
    function InstructionMetadata(instructionType, instructionNumber, name, description) {
        this.instructionType = instructionType;
        this.instructionNumber = instructionNumber;
        this.name = name;
        this.description = description;
    }
    Object.defineProperty(InstructionMetadata.prototype, "InstructionType", {
        /**
         * Gets the instruction type as a simple enum value.
         * @returns   The instruction type
         * @author    Kevin White
         * @date      29 Apr 2020
         */
        get: function () {
            return this.instructionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructionMetadata.prototype, "InstructionNumber", {
        /**
         * Gets the LDL instruction number for the instruction.
         * @returns   The LDL instruction number.
         * @author    Kevin White
         * @date      30 Apr 2020
         */
        get: function () {
            return this.instructionNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructionMetadata.prototype, "Name", {
        /**
         * Gets the friendly name of the instruction.
         * @returns   The friendly name of the instruction.
         * @author    Kevin White
         * @date      29 Apr 2020
         */
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructionMetadata.prototype, "Description", {
        /**
         * Gets the friendly description of the instruction.
         * @returns   The friendly description of the instruction.
         * @author    Kevin White
         * @date      29 Apr 2020
         */
        get: function () {
            return this.description;
        },
        enumerable: true,
        configurable: true
    });
    return InstructionMetadata;
}());
exports.InstructionMetadata = InstructionMetadata;
//# sourceMappingURL=instruction-metadata.js.map