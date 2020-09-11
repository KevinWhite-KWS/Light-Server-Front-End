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
var colour_1 = require("../colour");
/**
 * Solid instruction (01) causes the LEDs
 * to be set to a solid colour for a specified duration.
 * @author    Kevin White
 * @date      21 May 2020
 */
var SolidInstruction = /** @class */ (function (_super) {
    __extends(SolidInstruction, _super);
    function SolidInstruction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colour = new colour_1.Colour(0, 0, 0);
        return _this;
    }
    Object.defineProperty(SolidInstruction.prototype, "instructionType", {
        /**
         * Gets the type of instruction as a simple enumeration value.
         * @returns   The instruction type
         * @author    Kevin White
         * @date      24 Apr 2020
         */
        get: function () {
            return instruction_type_1.InstructionType.Solid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolidInstruction.prototype, "colour", {
        /**
         * Gets the colour to be used for the pixels.
         * @returns   The colour to be used for the pixels
         * @author    Kevin White
         * @date      22 May 2020
         */
        get: function () {
            return this._colour;
        },
        /**
         * Sets the colour to be used for the pixels.
         * @param colour  The colour of the pixels
         * @author        Kevin White
         * @date          22 May 2020
         */
        set: function (colour) {
            if (!colour) {
                return;
            }
            this._colour = colour;
        },
        enumerable: true,
        configurable: true
    });
    return SolidInstruction;
}(instruction_1.Instruction));
exports.SolidInstruction = SolidInstruction;
//# sourceMappingURL=instruction-1-solid.js.map