"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddInstructionPosition;
(function (AddInstructionPosition) {
    /**
     * Add as first instruction in a program.
     */
    AddInstructionPosition[AddInstructionPosition["Start"] = 0] = "Start";
    /**
     * Add before an existing instruction in a program.
     */
    AddInstructionPosition[AddInstructionPosition["Before"] = 1] = "Before";
    /**
     * Add after an existing instruction in a program.
     */
    AddInstructionPosition[AddInstructionPosition["After"] = 2] = "After";
    /**
     * Add as the last instruction in a program
     */
    AddInstructionPosition[AddInstructionPosition["End"] = 3] = "End";
})(AddInstructionPosition = exports.AddInstructionPosition || (exports.AddInstructionPosition = {}));
//# sourceMappingURL=add-instruction-position.js.map