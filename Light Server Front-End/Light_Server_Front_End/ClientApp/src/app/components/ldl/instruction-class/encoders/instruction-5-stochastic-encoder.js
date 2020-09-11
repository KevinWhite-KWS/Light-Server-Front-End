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
 * Encodes the stochastic instruction (05).
 * @author  Kevin White
 * @date    17 Jun 2020
 */
var StochasticInstructionEncoder = /** @class */ (function (_super) {
    __extends(StochasticInstructionEncoder, _super);
    function StochasticInstructionEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Serializes the stochastic instruction to JSON.
     * @param instructionToSerialize  The pattern instruction instance to be serialized.
     * @author  Kevin White
     * @date    27 Jun 2020
     */
    StochasticInstructionEncoder.prototype.serialize = function (instructionToSerialize) {
        var encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 5);
        // add the number of colours involved in the effect
        var numberOfColours = instructionToSerialize.colours.length;
        var numberOfColoursStr = this.encodeNumberToHex(numberOfColours, 2);
        encodedPatternIns = "" + encodedPatternIns + numberOfColoursStr;
        // add the individual colours
        for (var _i = 0, _a = instructionToSerialize.colours; _i < _a.length; _i++) {
            var colour = _a[_i];
            var colourStr = this.encodedColourToHex(colour);
            encodedPatternIns = "" + encodedPatternIns + colourStr;
        }
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
    StochasticInstructionEncoder.prototype.serializeToParts = function (instructionToSerialize) {
        var encodedPatternIns = this.encodeInstructionOpcode(instructionToSerialize.duration, 5);
        // add the number of colours involved in the effect
        var numberOfColours = instructionToSerialize.colours.length;
        var numberOfColoursStr = this.encodeNumberToHex(numberOfColours, 2);
        encodedPatternIns = "" + encodedPatternIns + numberOfColoursStr;
        // add the individual colours
        for (var _i = 0, _a = instructionToSerialize.colours; _i < _a.length; _i++) {
            var colour = _a[_i];
            var colourStr = this.encodedColourToHex(colour);
            encodedPatternIns = "" + encodedPatternIns + colourStr;
        }
        return [
            new instruction_part_1.InstructionPart(this.serializeLdlInstructionToJson(encodedPatternIns))
        ];
    };
    return StochasticInstructionEncoder;
}(instruction_encoder_1.InstructionEncoder));
exports.StochasticInstructionEncoder = StochasticInstructionEncoder;
//# sourceMappingURL=instruction-5-stochastic-encoder.js.map