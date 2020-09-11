"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
/**
 * Abstract base class for any LDL instruction.  This
 * class contains the basic properties, including
 * unique ID and duration.
 * @author  Kevin White
 * @date    21 Apr 2020
 */
var Instruction = /** @class */ (function () {
    function Instruction() {
        this._id = guid_typescript_1.Guid.create(); // assign a unique ID to the instruction so we can easily refer to it
        this.duration = 1;
    }
    Object.defineProperty(Instruction.prototype, "id", {
        /**
         * Gets the unique ID of the instruction.
         * @returns   A GUID which is the unique ID of the instruction.
         * @author    Kevin White
         * @date      21 Apr 2020
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instruction.prototype, "duration", {
        /**
         * Gets the effect duration of the instruction
         * in rendering frames.
         * @returns   The duration of the instruction in rendering frames
         * @author    Kevin White
         * @date      21 Apr 2020
         */
        get: function () {
            return this._duration;
        },
        /**
         * Sets the effect duration of the instruction
         * in rendering frames.
         * @param duration    The duration of the instruction in rendering frames (1 - 255).
         * @author    Kevin White
         * @date      21 Apr 2020
         */
        set: function (duration) {
            if (duration > 0 && duration < 256) {
                this._duration = duration;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Instruction;
}());
exports.Instruction = Instruction;
//# sourceMappingURL=instruction.js.map