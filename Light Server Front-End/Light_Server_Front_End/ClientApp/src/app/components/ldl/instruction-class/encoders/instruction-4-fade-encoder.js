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
 * Encodes the fade instruction (04).
 * @author  Kevin White
 * @date    24 Jul 2020
 */
var FadeInstructionEncoder = /** @class */ (function (_super) {
    __extends(FadeInstructionEncoder, _super);
    function FadeInstructionEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Serializes the fade instruction to JSON.
     * @param instructionToSerialize  The pattern instruction instance to be serialized.
     * @author  Kevin White
     * @date    24 Jun 2020
     */
    FadeInstructionEncoder.prototype.serialize = function (instructionToSerialize) {
        var encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 4);
        // add the step value (two hex digits between 1 and 50 in decimal value)
        var step = this.encodeNumberToHex(instructionToSerialize.step, 2);
        encodedPatternIns = "" + encodedPatternIns + step;
        // add whether to fade in (0) or fade out (1)
        var fadeIn = this.encodeNumberToHex(instructionToSerialize.fadeIn ? 0 : 1, 1);
        encodedPatternIns = "" + encodedPatternIns + fadeIn;
        // add the start colour
        var startColour = this.encodedColourToHex(instructionToSerialize.startColour);
        encodedPatternIns = "" + encodedPatternIns + startColour;
        // add the end colour
        var endColour = this.encodedColourToHex(instructionToSerialize.endColour);
        encodedPatternIns = "" + encodedPatternIns + endColour;
        return this.serializeLdlInstructionToJson(encodedPatternIns);
    };
    /**
     * @param   instructionToSerialize      The LDL instruction instance to be serialized
     * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
     *                                      or null if it's not a container instruction.
     * @returns A collection of instruction parts
     * @author  Kevin White
     * @date    12 Aug 2020
     */
    FadeInstructionEncoder.prototype.serializeToParts = function (instructionToSerialize) {
        var encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 4);
        // add the step value (two hex digits between 1 and 50 in decimal value)
        var step = this.encodeNumberToHex(instructionToSerialize.step, 2);
        encodedPatternIns = "" + encodedPatternIns + step;
        // add whether to fade in (0) or fade out (1)
        var fadeIn = this.encodeNumberToHex(instructionToSerialize.fadeIn ? 0 : 1, 1);
        encodedPatternIns = "" + encodedPatternIns + fadeIn;
        // add the start colour
        var startColour = this.encodedColourToHex(instructionToSerialize.startColour);
        encodedPatternIns = "" + encodedPatternIns + startColour;
        // add the end colour
        var endColour = this.encodedColourToHex(instructionToSerialize.endColour);
        encodedPatternIns = "" + encodedPatternIns + endColour;
        return [
            new instruction_part_1.InstructionPart(this.serializeLdlInstructionToJson(encodedPatternIns))
        ];
    };
    return FadeInstructionEncoder;
}(instruction_encoder_1.InstructionEncoder));
exports.FadeInstructionEncoder = FadeInstructionEncoder;
//# sourceMappingURL=instruction-4-fade-encoder.js.map