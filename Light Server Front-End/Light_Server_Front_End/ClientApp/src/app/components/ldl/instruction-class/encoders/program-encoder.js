"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instruction_0_clear_encoder_1 = require("./instruction-0-clear-encoder");
var instruction_type_1 = require("../instruction-type");
var instruction_1_solid_encoder_1 = require("./instruction-1-solid-encoder");
var instruction_2_pattern_encoder_1 = require("./instruction-2-pattern-encoder");
var instruction_3_slider_encoder_1 = require("./instruction-3-slider-encoder");
var instruction_4_fade_encoder_1 = require("./instruction-4-fade-encoder");
var instruction_5_stochastic_encoder_1 = require("./instruction-5-stochastic-encoder");
var instruction_container_1 = require("../instruction-container");
var instruction_repeat_encoder_1 = require("./instruction-repeat.encoder");
/**
 * Serializes a LDL program to JSON or deserializes
 * an LDL program from JSON.
 * @author  Kevin White
 * @date    2 Jun 2020
 */
var ProgramEncoder = /** @class */ (function () {
    function ProgramEncoder() {
    }
    /**
     * Gets the instruction encoder instance that can be used
     * to serialize / deserialize an LDL instruction.
     * @param instructionType The type of instruction encoder that is required
     * @returns               A InstructionEncoder instance that can be used to encode LDL instructions
     * @author                Kevin White
     * @date                  2 Jun 2020
     */
    ProgramEncoder.prototype.getInstructionEncoder = function (instructionType) {
        var instructionEncoder = null;
        switch (instructionType) {
            // structure
            case instruction_type_1.InstructionType.Repeat:
                instructionEncoder = new instruction_repeat_encoder_1.RepeatInstructionEncoder();
                break;
            // effects
            case instruction_type_1.InstructionType.Clear:
                instructionEncoder = new instruction_0_clear_encoder_1.ClearInstructionEncoder();
                break;
            case instruction_type_1.InstructionType.Solid:
                instructionEncoder = new instruction_1_solid_encoder_1.SolidInstructionEncoder();
                break;
            case instruction_type_1.InstructionType.Pattern:
                instructionEncoder = new instruction_2_pattern_encoder_1.PatternInstructionEncoder();
                break;
            case instruction_type_1.InstructionType.Slider:
                instructionEncoder = new instruction_3_slider_encoder_1.SliderInstructionEncoder();
                break;
            case instruction_type_1.InstructionType.Fade:
                instructionEncoder = new instruction_4_fade_encoder_1.FadeInstructionEncoder();
                break;
            case instruction_type_1.InstructionType.Stochastic:
                instructionEncoder = new instruction_5_stochastic_encoder_1.StochasticInstructionEncoder();
                return instructionEncoder;
        }
        return instructionEncoder;
    };
    /**
     * aa
     * @param instructions
     */
    ProgramEncoder.prototype.serializeInstructions = function (instructions, indentationLevel) {
        if (indentationLevel === void 0) { indentationLevel = 0; }
        var serializedInstructions = '';
        var countIns = instructions.length;
        for (var i = 0; i < countIns; i++) {
            var instruction = instructions[i];
            var instructionEncoder = this.getInstructionEncoder(instruction.instructionType);
            if (!instructionEncoder) {
                throw new Error("Cannot serialize instruction of type " + instruction.instructionType + " as no encoder is available for it!  Create an encoder and add it to the getInstructionEncoder factory method.");
            }
            var serializedChildInstructions = null;
            if (instruction instanceof instruction_container_1.InstructionContainer) {
                var containerInstruction = instruction;
                // this is a container instruction which has other child instructions.  So,
                // we need to serialize those child instructions first
                serializedChildInstructions = this.serializeInstructions(containerInstruction.instructions, indentationLevel + 1);
            }
            serializedInstructions += instructionEncoder.serialize(instruction, serializedChildInstructions);
            if (i < countIns - 1) {
                serializedInstructions += ',\r\n   ';
            }
        }
        return serializedInstructions;
    };
    /**
     * Serializes an LDL program to JSON.
     * @author  Kevin White
     * @date    27 May 2020
     */
    ProgramEncoder.prototype.serialize = function (programToSerialize) {
        if (!programToSerialize) {
            return '';
        }
        var serializedProgram = '';
        // Serialize the instructions first
        serializedProgram = this.serializeInstructions(programToSerialize.instructions);
        // Serialize the rest of the LDL program
        serializedProgram =
            '{\r\n' +
                ' "name" : "Testing",\r\n' +
                ' "instructions" : {\r\n' +
                '   ' + serializedProgram + '\r\n' +
                ' }\r\n' +
                '}';
        return serializedProgram;
    };
    return ProgramEncoder;
}());
exports.ProgramEncoder = ProgramEncoder;
//# sourceMappingURL=program-encoder.js.map