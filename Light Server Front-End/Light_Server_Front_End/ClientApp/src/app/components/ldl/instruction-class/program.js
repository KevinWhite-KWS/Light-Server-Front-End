"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An LDL program consisting of basic properties
 * and a collection of instructions to be executed.
 * @author  Kevin White
 * @date    22 Apr 2020
 */
var Program = /** @class */ (function () {
    function Program() {
        this._instructions = [];
    }
    Object.defineProperty(Program.prototype, "instructions", {
        /**
         * Gets the collection of instruction that form
         * the LDL program.
         * @returns   The collection of program instructions.
         * @author    Kevin White
         * @date      22 Apr 2020
         */
        get: function () {
            return this._instructions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds an instruction to the end of the collection
     * unless insertAsFirst is true in which case as it
     * added as the first instruction.
     * @param instruction The instruction instance to be added
     * @author            Kevin White
     * @date              22 Apr 2020
     */
    Program.prototype.addInstruction = function (instruction, insertAsFirst) {
        if (insertAsFirst === void 0) { insertAsFirst = false; }
        if (!instruction) {
            return;
        }
        if (insertAsFirst) {
            this._instructions = [instruction].concat(this._instructions);
        }
        else {
            this._instructions.push(instruction);
        }
    };
    /**
     * Adds an instruction after the specified existing instruction.
     * @param instruction           The instruction instance to be added
     * @param succeedingInstruction The instruction after which the new instruction is to be added.
     * @author            Kevin White
     * @date              22 Apr 2020
     */
    Program.prototype.addInstructionAfter = function (instruction, proceedingInstruction) {
        if (!instruction || !proceedingInstruction) {
            return;
        }
        var proceedingInstructionIndex = this._instructions.indexOf(proceedingInstruction);
        if (proceedingInstructionIndex > -1) {
            this._instructions.splice(proceedingInstructionIndex + 1, 0, instruction);
        }
    };
    /**
     * Adds an instruction before an existing instruction.
     * @param instruction           The instruction instance to be added
     * @param succeedingInstruction The instruction after which the new instruction is to be added.
     * @author            Kevin White
     * @date              22 Apr 2020
     */
    Program.prototype.addInstructionBefore = function (instruction, succeedingInstruction) {
        if (!instruction || !succeedingInstruction) {
            return;
        }
        // const proceedingInstructionIndex = this._instructions.findIndex(e => e === proceedingInstruction);
        var proceedingInstructionIndex = this._instructions.indexOf(succeedingInstruction);
        if (proceedingInstructionIndex > -1) {
            this._instructions.splice(proceedingInstructionIndex, 0, instruction);
        }
    };
    /**
     * Removes an instruction from the collection of instructions.
     * @param instruction   The instruction instance to be removed
     * @author              Kevin White
     * @date                22 Apr 2020
     */
    Program.prototype.removeInstruction = function (instruction) {
        // removes an instruction from the collection
        if (!instruction) {
            return;
        }
        var instructionIndex = this._instructions.indexOf(instruction);
        if (instructionIndex > -1) {
            this._instructions.splice(instructionIndex, 1);
        }
    };
    return Program;
}());
exports.Program = Program;
//# sourceMappingURL=program.js.map