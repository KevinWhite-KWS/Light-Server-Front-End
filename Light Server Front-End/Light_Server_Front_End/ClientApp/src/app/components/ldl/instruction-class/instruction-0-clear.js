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
var instruction_type_1 = require("./instruction-type");
/**
 * Clear instruction (00) causes the LEDs
 * to be cleared for a specified duration.
 * @author    Kevin White
 * @date      21 Apr 2020
 */
var ClearInstruction = /** @class */ (function (_super) {
    __extends(ClearInstruction, _super);
    function ClearInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ClearInstruction.prototype, "instructionType", {
        /**
         * Gets the type of instruction as a simple enumeration value.
         * @returns   The instruction type
         * @author    Kevin White
         * @date      24 Apr 2020
         */
        get: function () {
            return instruction_type_1.InstructionType.Clear;
        },
        enumerable: true,
        configurable: true
    });
    return ClearInstruction;
}(instruction_1.Instruction));
exports.ClearInstruction = ClearInstruction;
//# sourceMappingURL=instruction-0-clear.js.map