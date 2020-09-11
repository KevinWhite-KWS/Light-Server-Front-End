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
 * Encodes the slider instruction (03).
 * @author  Kevin White
 * @date    23 Jul 2020
 */
var SliderInstructionEncoder = /** @class */ (function (_super) {
    __extends(SliderInstructionEncoder, _super);
    function SliderInstructionEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Serializes the pattern instruction to JSON.
     * @param instructionToSerialize  The pattern instruction instance to be serialized.
     * @author  Kevin White
     * @date    17 Jun 2020
     */
    SliderInstructionEncoder.prototype.serialize = function (instructionToSerialize) {
        var encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 3);
        // add the slider width (two hex digits between 1 and 50 in decimal value)
        var sliderWidth = this.encodeNumberToHex(instructionToSerialize.sliderWidth, 2);
        encodedPatternIns = "" + encodedPatternIns + sliderWidth;
        // add whether the slider starts at the near or far side (0 or 1)
        var startNear = this.encodeNumberToHex(instructionToSerialize.startNear ? 0 : 1, 1);
        encodedPatternIns = "" + encodedPatternIns + startNear;
        // add the slider colour
        var sliderColour = this.encodedColourToHex(instructionToSerialize.sliderColour);
        encodedPatternIns = "" + encodedPatternIns + sliderColour;
        // add the background colour
        var backgroundColour = this.encodedColourToHex(instructionToSerialize.backgroundColour);
        encodedPatternIns = "" + encodedPatternIns + backgroundColour;
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
    SliderInstructionEncoder.prototype.serializeToParts = function (instructionToSerialize) {
        var encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 3);
        // add the slider width (two hex digits between 1 and 50 in decimal value)
        var sliderWidth = this.encodeNumberToHex(instructionToSerialize.sliderWidth, 2);
        encodedPatternIns = "" + encodedPatternIns + sliderWidth;
        // add whether the slider starts at the near or far side (0 or 1)
        var startNear = this.encodeNumberToHex(instructionToSerialize.startNear ? 0 : 1, 1);
        encodedPatternIns = "" + encodedPatternIns + startNear;
        // add the slider colour
        var sliderColour = this.encodedColourToHex(instructionToSerialize.sliderColour);
        encodedPatternIns = "" + encodedPatternIns + sliderColour;
        // add the background colour
        var backgroundColour = this.encodedColourToHex(instructionToSerialize.backgroundColour);
        encodedPatternIns = "" + encodedPatternIns + backgroundColour;
        return [
            new instruction_part_1.InstructionPart(this.serializeLdlInstructionToJson(encodedPatternIns))
        ];
    };
    return SliderInstructionEncoder;
}(instruction_encoder_1.InstructionEncoder));
exports.SliderInstructionEncoder = SliderInstructionEncoder;
//# sourceMappingURL=instruction-3-slider-encoder.js.map