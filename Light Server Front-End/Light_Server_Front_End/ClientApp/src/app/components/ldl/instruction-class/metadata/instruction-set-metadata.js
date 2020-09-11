"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provides the metadata that describes the available
 * instructions of the LDL program.
 * @author    Kevin White
 * @date      30 Apr 2020
 */
var InstructionSetMetadata = /** @class */ (function () {
    function InstructionSetMetadata(instructions, version) {
        this.instructions = instructions;
        this.version = version;
    }
    Object.defineProperty(InstructionSetMetadata.prototype, "Instructions", {
        /**
         * Gets the collection of instructions that makeup the metadata
         * of the available instructions.
         * @returns   The collection of instruction metadata
         * @author    Kevin White
         * @date      30 Apr 2020
         */
        get: function () {
            return this.instructions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructionSetMetadata.prototype, "Version", {
        /**
         * Gets the instruction set version number which is the
         * LDL instruction set version number.
         * @returns   The instruction set version
         * @author    Kevin White
         * @date      30 Apr 2020
         */
        get: function () {
            return this.version;
        },
        enumerable: true,
        configurable: true
    });
    return InstructionSetMetadata;
}());
exports.InstructionSetMetadata = InstructionSetMetadata;
//# sourceMappingURL=instruction-set-metadata.js.map