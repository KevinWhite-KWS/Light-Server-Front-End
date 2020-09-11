"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple enum that determines the particular type
 * that an instruction instance represents.
 * @author    Kevin White
 * @date      27 Apr 2020
 */
var InstructionType;
(function (InstructionType) {
    // effects
    InstructionType[InstructionType["Clear"] = 0] = "Clear";
    InstructionType[InstructionType["Solid"] = 1] = "Solid";
    InstructionType[InstructionType["Pattern"] = 2] = "Pattern";
    InstructionType[InstructionType["Slider"] = 3] = "Slider";
    InstructionType[InstructionType["Fade"] = 4] = "Fade";
    InstructionType[InstructionType["Stochastic"] = 5] = "Stochastic";
    // structure
    InstructionType[InstructionType["Repeat"] = 100] = "Repeat";
})(InstructionType = exports.InstructionType || (exports.InstructionType = {}));
//# sourceMappingURL=instruction-type.js.map