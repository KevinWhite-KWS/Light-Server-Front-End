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
var instruction_type_1 = require("./instruction-type");
var instruction_container_1 = require("./instruction-container");
var program_1 = require("./program");
/**
 * Repeat instruction is a container type instruction
 * that loops a specified number of times or
 * infinitely and repeats the contained instructions.
 * @author    Kevin White
 * @date      3 Aug 2020
 */
var RepeatInstruction = /** @class */ (function (_super) {
    __extends(RepeatInstruction, _super);
    function RepeatInstruction(instructionService) {
        var _this = _super.call(this, instructionService) || this;
        _this._times = 0;
        _this.prg = new program_1.Program();
        return _this;
    }
    Object.defineProperty(RepeatInstruction.prototype, "instructionType", {
        /**
         * Gets the type of instruction as a simple enumeration value.
         * @returns   The instruction type
         * @author    Kevin White
         * @date      24 Apr 2020
         */
        get: function () {
            return instruction_type_1.InstructionType.Repeat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RepeatInstruction.prototype, "times", {
        /**
         * Gets the number of times the loop will repeat
         * or 0 if it is an infinite loop.
         * @returns     The number of times the loop will repeat
         * @author      Kevin White
         * @date        3 Aug 2020
         */
        get: function () {
            return this._times;
        },
        /**
         * Sets the number of times the loop will repeat.
         * @param times   The number of times the finite loop will repeat (between 1-1000)
         *                or 0 for an infinite loop.
         * @author        Kevin White
         * @date          3 Aug 2020
         */
        set: function (times) {
            if (times < 0 || times > 1000) {
                return;
            }
            this._times = times;
        },
        enumerable: true,
        configurable: true
    });
    return RepeatInstruction;
}(instruction_container_1.InstructionContainer));
exports.RepeatInstruction = RepeatInstruction;
//# sourceMappingURL=instruction-repeat.js.map