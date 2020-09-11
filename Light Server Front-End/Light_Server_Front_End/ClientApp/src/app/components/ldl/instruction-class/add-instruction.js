"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_instruction_position_1 = require("./add-instruction-position");
/**
 * Contains the values necessary to add a new instruction
 * to an LDL program at a specific location relative
 * to an existing instruction i.e. before or
 * after the existing instruction.
 * @author  Kevin White
 * @date    4 May 2020
 */
var AddInstruction = /** @class */ (function () {
    /**
     * Instantiates a new instance that specifies where a new instruction
     * will be added to an LDL program.
     * @param _instructionType      The type of new instruction to be added
     * @param _addPosition          The position where the new instruction will be added within the existing program
     * @param _existingInstruction  A reference to the existing instruction if adding before or after an existing instruction.
     * @author  Kevin White
     * @date    15 May 2020
     */
    function AddInstruction(_instructionType, _addPosition, _existingInstruction) {
        if (_existingInstruction === void 0) { _existingInstruction = null; }
        this._instructionType = _instructionType;
        this._addPosition = _addPosition;
        this._existingInstruction = _existingInstruction;
        if ((this._addPosition === add_instruction_position_1.AddInstructionPosition.After || this._addPosition === add_instruction_position_1.AddInstructionPosition.Before) &&
            !this._existingInstruction) {
            throw new Error('You must specify an existing instruction when inserting before or after');
        }
    }
    Object.defineProperty(AddInstruction.prototype, "instructionType", {
        /**
         * Gets the type of instruction to be added.
         * @returns   The type of instruction to be added.
         * @author  Kevin White
         * @date    4 May 2020
         */
        get: function () {
            return this._instructionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddInstruction.prototype, "existingInstruction", {
        /**
         * Gets the existing instruction that specifies
         * the relative position by which the new
         * instruction will be added.
         * @returns The existing instruction instance
         * @author  Kevin White
         * @date    4 May 2020
         */
        get: function () {
            return this._existingInstruction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddInstruction.prototype, "position", {
        /**
         * Gets the position in the program at which the new instruction
         * is to be added.
         * @returns The position where the new instruction is to be added.
         * @author  Kevin White
         * @date    15 May 2020
         */
        get: function () {
            return this._addPosition;
        },
        enumerable: true,
        configurable: true
    });
    return AddInstruction;
}());
exports.AddInstruction = AddInstruction;
//# sourceMappingURL=add-instruction.js.map