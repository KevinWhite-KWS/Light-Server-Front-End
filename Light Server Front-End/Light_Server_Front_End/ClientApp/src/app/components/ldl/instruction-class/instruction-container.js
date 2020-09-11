"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var instruction_1 = require("./instruction");
var add_instruction_1 = require("./add-instruction");
var add_instruction_position_1 = require("./add-instruction-position");
/**
 * Abstract base class for any LDL instruction that
 * can contain other LDL instructions.  Example:
 * a loop instruction that contains other instructions.
 * @author  Kevin White
 * @date    28 Jul 2020
 */
var InstructionContainer = /** @class */ (function (_super) {
    __extends(InstructionContainer, _super);
    function InstructionContainer(instructionService) {
        var _this = _super.call(this) || this;
        _this.instructionService = instructionService;
        return _this;
    }
    /**
     * Removes an instruction from the program.
     * @param instruction   The instruction to be removed
     * @author              Kevin White
     * @date                21 May 2020
     */
    InstructionContainer.prototype.removeInstruction = function (instruction) {
        this.prg.removeInstruction(instruction);
    };
    /**
     * Adds an instruction to the program.
     * @param instruction   The instruction to be added.
     * @author              Kevin White
     * @date                21 May 2020
     */
    InstructionContainer.prototype.addInstruction = function (instructionToAdd) {
        var newInstruction = this.instructionService.createInstructionInstance(instructionToAdd.instructionType);
        if (!newInstruction) {
            return;
        }
        switch (instructionToAdd.position) {
            case add_instruction_position_1.AddInstructionPosition.Before:
                this.prg.addInstructionBefore(newInstruction, instructionToAdd.existingInstruction);
                break;
            case add_instruction_position_1.AddInstructionPosition.After:
                this.prg.addInstructionAfter(newInstruction, instructionToAdd.existingInstruction);
                break;
            case add_instruction_position_1.AddInstructionPosition.Start:
                this.prg.addInstruction(newInstruction, true);
                break;
            case add_instruction_position_1.AddInstructionPosition.End:
                this.prg.addInstruction(newInstruction, true);
                break;
        }
    };
    /**
     * Adds the first instruction to the program.
     * @param instructionType   The type of instruction to be added.
     * @author                  Kevin White
     * @date                    21 May 2020
     */
    InstructionContainer.prototype.addFirstInstruction = function (instructionType) {
        var addInstruction = new add_instruction_1.AddInstruction(instructionType, add_instruction_position_1.AddInstructionPosition.Start);
        this.addInstruction(addInstruction);
    };
    Object.defineProperty(InstructionContainer.prototype, "instructions", {
        /**
         * Gets the instructions contained in the program.
         * @returns   The collection of instructions of the program.
         * @author    Kevin White
         * @date      4 Aug 2020
         */
        get: function () {
            return this.prg.instructions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructionContainer.prototype, "program", {
        /**
         * Gets the program.
         * @returns   The program instance.
         * @author    Kevin White
         * @date      10 Aug 2020
         */
        get: function () {
            return this.prg;
        },
        enumerable: true,
        configurable: true
    });
    return InstructionContainer;
}(instruction_1.Instruction));
exports.InstructionContainer = InstructionContainer;
//# sourceMappingURL=instruction-container.js.map