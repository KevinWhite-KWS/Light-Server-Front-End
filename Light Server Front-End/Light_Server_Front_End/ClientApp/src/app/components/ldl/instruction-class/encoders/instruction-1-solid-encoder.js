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
 * Encodes the solid instruction.
 * @author  Kevin White
 * @date    28 May 2020
 */
var SolidInstructionEncoder = /** @class */ (function (_super) {
    __extends(SolidInstructionEncoder, _super);
    function SolidInstructionEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Serializes the solid instruction to JSON.
     * @param instructionToSerialize  The clear instruction instance to be serialized.
     * @author  Kevin White
     * @date    28 May 2020
     */
    SolidInstructionEncoder.prototype.serialize = function (instructionToSerialize) {
        var encodedSolidIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 1);
        var solidColor = this.encodedColourToHex(instructionToSerialize.colour);
        encodedSolidIns = "" + encodedSolidIns + solidColor;
        return this.serializeLdlInstructionToJson(encodedSolidIns);
    };
    /**
     * @param   instructionToSerialize      The LDL instruction instance to be serialized
     * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
     *                                      or null if it's not a container instruction.
     * @returns A collection of instruction parts
     * @author  Kevin White
     * @date    12 Aug 2020
     */
    SolidInstructionEncoder.prototype.serializeToParts = function (instructionToSerialize) {
        var encodedSolidIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 1);
        var solidColor = this.encodedColourToHex(instructionToSerialize.colour);
        encodedSolidIns = "" + encodedSolidIns + solidColor;
        return [
            new instruction_part_1.InstructionPart(this.serializeLdlInstructionToJson(encodedSolidIns))
        ];
    };
    return SolidInstructionEncoder;
}(instruction_encoder_1.InstructionEncoder));
exports.SolidInstructionEncoder = SolidInstructionEncoder;
//# sourceMappingURL=instruction-1-solid-encoder.js.map