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
 * Encodes the pattern instruction (02).
 * @author  Kevin White
 * @date    17 Jun 2020
 */
var PatternInstructionEncoder = /** @class */ (function (_super) {
    __extends(PatternInstructionEncoder, _super);
    function PatternInstructionEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Serializes the pattern instruction to JSON.
     * @param instructionToSerialize  The pattern instruction instance to be serialized.
     * @author  Kevin White
     * @date    17 Jun 2020
     */
    PatternInstructionEncoder.prototype.serialize = function (instructionToSerialize) {
        var encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 2);
        // the pattern is encoded with the lengths then followed by the
        // colours.  For example: say with have 3 leds of (255,0,0),(255,0,0),(255,0,0)
        // These are just three red leds so the they are encoded to: 03FF0000 (03 = 3 pixels, FF0000 = red)
        // In the case of (255,0,0),(0,255,0),(255,0,0) we have one red pixel, then one green pixel, then one red pixel.
        // It is encoded as: 010101FF000000FF00FF0000 (01 = 1 pixel, 01 = 1 pixel, 01 = 1 pixel, FF0000 = red, 00FF00 = green, FF0000 = red)
        var patternElementCount = 0;
        var currentColourCount = 0;
        var lengthsStr = '';
        var coloursStr = '';
        var colours = instructionToSerialize.colours;
        var colourCount = colours.length;
        for (var i = 0; i < colourCount; i++) {
            var currentColour = colours[i];
            var nextColour = (i === colourCount - 1 ? null : colours[i + 1]);
            currentColourCount++;
            if (!nextColour || currentColour.toRgb() !== nextColour.toRgb()) {
                lengthsStr += this.encodeNumberToHex(currentColourCount, 2);
                coloursStr += this.encodedColourToHex(currentColour);
                currentColourCount = 0;
                patternElementCount++;
            }
        }
        var patternElementStr = this.encodeNumberToHex(patternElementCount, 2);
        encodedPatternIns = "" + encodedPatternIns + patternElementStr + lengthsStr + coloursStr;
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
    PatternInstructionEncoder.prototype.serializeToParts = function (instructionToSerialize) {
        var encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 2);
        // the pattern is encoded with the lengths then followed by the
        // colours.  For example: say with have 3 leds of (255,0,0),(255,0,0),(255,0,0)
        // These are just three red leds so the they are encoded to: 03FF0000 (03 = 3 pixels, FF0000 = red)
        // In the case of (255,0,0),(0,255,0),(255,0,0) we have one red pixel, then one green pixel, then one red pixel.
        // It is encoded as: 010101FF000000FF00FF0000 (01 = 1 pixel, 01 = 1 pixel, 01 = 1 pixel, FF0000 = red, 00FF00 = green, FF0000 = red)
        var patternElementCount = 0;
        var currentColourCount = 0;
        var lengthsStr = '';
        var coloursStr = '';
        var colours = instructionToSerialize.colours;
        var colourCount = colours.length;
        for (var i = 0; i < colourCount; i++) {
            var currentColour = colours[i];
            var nextColour = (i === colourCount - 1 ? null : colours[i + 1]);
            currentColourCount++;
            if (!nextColour || currentColour.toRgb() !== nextColour.toRgb()) {
                lengthsStr += this.encodeNumberToHex(currentColourCount, 2);
                coloursStr += this.encodedColourToHex(currentColour);
                currentColourCount = 0;
                patternElementCount++;
            }
        }
        var patternElementStr = this.encodeNumberToHex(patternElementCount, 2);
        encodedPatternIns = "" + encodedPatternIns + patternElementStr + lengthsStr + coloursStr;
        return [
            new instruction_part_1.InstructionPart(this.serializeLdlInstructionToJson(encodedPatternIns))
        ];
    };
    return PatternInstructionEncoder;
}(instruction_encoder_1.InstructionEncoder));
exports.PatternInstructionEncoder = PatternInstructionEncoder;
//# sourceMappingURL=instruction-2-pattern-encoder.js.map