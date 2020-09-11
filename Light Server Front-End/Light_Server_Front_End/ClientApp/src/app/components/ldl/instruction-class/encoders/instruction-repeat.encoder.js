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
 * Encodes the repeat instruction.
 * @author  Kevin White
 * @date    3 Aug 2020
 */
var RepeatInstructionEncoder = /** @class */ (function (_super) {
    __extends(RepeatInstructionEncoder, _super);
    function RepeatInstructionEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Serializes the repeat container instruction to JSON.
     * @param   instructionToSerialize  The repeat instruction instance to be serialized.
     * @author  Kevin White
     * @date    3 Aug 2020
     */
    RepeatInstructionEncoder.prototype.serialize = function (instructionToSerialize, serializedChildInstructions) {
        /*
         * Example:
         * "repeat": {
         *    "times": 10,
         *    "instructions" : [
         *      "ins1" : ...
         *    ]
         * }
         */
        var ldl = '"repeat": {\r\n' +
            ("\t\"times\" : " + instructionToSerialize.times + ",\r\n") +
            '\t"instructions" : {\r\n' +
            ("\t" + serializedChildInstructions + "\r\n") +
            '\t}\r\n' +
            '}';
        /*
        let ldl = [
          new InstructionPart('"repeat": {', 0),
            new InstructionPart(`"times" : ${instructionToSerialize.times},`, 1),
            new InstructionPart('"instructions" : {', 1),
              new InstructionPart(`${serializedChildInstructions}`, 2),
            new InstructionPart('}', 1)
        ];
        */
        return ldl;
    };
    /**
     * @param   instructionToSerialize      The LDL instruction instance to be serialized
     * @param   serializedChildInstructions A string of serialized child instructions if the instructonToSerialize is a container instruction
     *                                      or null if it's not a container instruction.
     * @returns A collection of instruction parts
     * @author  Kevin White
     * @date    12 Aug 2020
     */
    RepeatInstructionEncoder.prototype.serializeToParts = function (instructionToSerialize, serializedChildInstructions) {
        return [
            new instruction_part_1.InstructionPart('"repeat": {', 0),
            new instruction_part_1.InstructionPart("\"times\" : " + instructionToSerialize.times + ",", 1),
            new instruction_part_1.InstructionPart('"instructions" : {', 1),
            new instruction_part_1.InstructionPart("" + serializedChildInstructions, 2),
            new instruction_part_1.InstructionPart('}', 1),
            new instruction_part_1.InstructionPart('}', 0)
        ];
    };
    return RepeatInstructionEncoder;
}(instruction_encoder_1.InstructionEncoder));
exports.RepeatInstructionEncoder = RepeatInstructionEncoder;
//# sourceMappingURL=instruction-repeat.encoder.js.map