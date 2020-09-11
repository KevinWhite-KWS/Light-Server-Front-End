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
var instruction_encoder_1 = require("./instruction-encoder");
var instruction_part_1 = require("./instruction-part");
/**
 * Encodes the clear instruction.
 * @author  Kevin White
 * @date    28 May 2020
 */
var ClearInstructionEncoder = /** @class */ (function (_super) {
    __extends(ClearInstructionEncoder, _super);
    function ClearInstructionEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Serializes the clear instruction to JSON.
     * @param instructionToSerialize  The clear instruction instance to be serialized.
     * @author  Kevin White
     * @date    28 May 2020
     */
    ClearInstructionEncoder.prototype.serialize = function (instructionToSerialize) {
        var ldl = this.encodeInstructionOpcode(instructionToSerialize.duration, 0);
        return this.serializeLdlInstructionToJson(ldl);
    };
    /**
     * @param   instructionToSerialize      The LDL instruction instance to be serialized
     * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
     *                                      or null if it's not a container instruction.
     * @returns A collection of instruction parts
     * @author  Kevin White
     * @date    12 Aug 2020
     */
    ClearInstructionEncoder.prototype.serializeToParts = function (instructionToSerialize) {
        var ldl = this.encodeInstructionOpcode(instructionToSerialize.duration, 0);
        return [
            new instruction_part_1.InstructionPart(this.serializeLdlInstructionToJson(ldl))
        ];
    };
    return ClearInstructionEncoder;
}(instruction_encoder_1.InstructionEncoder));
exports.ClearInstructionEncoder = ClearInstructionEncoder;
//# sourceMappingURL=instruction-0-clear-encoder.js.map