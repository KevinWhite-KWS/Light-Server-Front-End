"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stores a part of a serialized instruction.  Many serialized instructions
 * will have just a single part but more complex instructions, such as loops,
 * will have multiple parts.
 * @author    Kevin White
 * @date      12 Aug 20020
 */
var InstructionPart = /** @class */ (function () {
    /**
     * Instantiates a new instance of InstructionPart.
     * @param instructionPart   The serialized instruction part
     * @param level             The indentation level of the instruction part
     * @author    Kevin White
     * @date      12 Aug 20020
     */
    function InstructionPart(instructionPart, level) {
        if (level === void 0) { level = 0; }
        this._instructionPart = instructionPart;
        this._level = level;
    }
    Object.defineProperty(InstructionPart.prototype, "part", {
        /**
         * Gets the serialized instruction part.
         * @returns   The serialized instruction part.
         * @author    Kevin White
         * @date      12 Aug 20020
         */
        get: function () {
            return this._instructionPart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructionPart.prototype, "level", {
        /**
         * Gets the indentation level of the instruction part.
         * @returns   The indentation level
         * @author    Kevin White
         * @date      12 Aug 20020
         */
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    return InstructionPart;
}());
exports.InstructionPart = InstructionPart;
//# sourceMappingURL=instruction-part.js.map