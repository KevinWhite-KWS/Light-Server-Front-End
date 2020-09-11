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
var instruction_1 = require("./instruction");
var instruction_type_1 = require("./instruction-type");
var colour_1 = require("../colour");
/**
 * Fade instruction (04) is an animation
 * effect that either fades in the LEDS from a start
 * colour to an end colour or fades out the LEDS.
 * on a constant background.
 * @author    Kevin White
 * @date      24 July 2020
 */
var FadeInstruction = /** @class */ (function (_super) {
    __extends(FadeInstruction, _super);
    function FadeInstruction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startColour = new colour_1.Colour(0, 0, 0);
        _this._endColour = new colour_1.Colour(255, 255, 255);
        _this._step = 1;
        _this._fadeIn = true;
        return _this;
    }
    Object.defineProperty(FadeInstruction.prototype, "instructionType", {
        /**
         * Gets the type of instruction as a simple enumeration value.
         * @returns   The instruction type
         * @author    Kevin White
         * @date      24 July 2020
         */
        get: function () {
            return instruction_type_1.InstructionType.Fade;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FadeInstruction.prototype, "startColour", {
        /**
         * Gets the start colour.
         * @returns   The start colour
         * @author    Kevin White
         * @date      24 July 2020
         */
        get: function () {
            return this._startColour;
        },
        /**
         * Sets the start colour.
         * @param startColour  The start colour.
         * @author             Kevin White
         * @date               24 July 2020
         */
        set: function (startColour) {
            if (!startColour) {
                return;
            }
            this._startColour = startColour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FadeInstruction.prototype, "endColour", {
        /**
         * Gets the end colour.
         * @returns   The end colour
         * @author    Kevin White
         * @date      24 July 2020
         */
        get: function () {
            return this._endColour;
        },
        /**
         * Sets the end colour.
         * @param endColour  The end colour
         * @author           Kevin White
         * @date             24 July 2020
         */
        set: function (endColour) {
            if (!endColour) {
                return;
            }
            this._endColour = endColour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FadeInstruction.prototype, "step", {
        /**
         * Gets the step value of the pixel increment.
         * @returns   The step value of the pixel increment.
         * @author    Kevin White
         * @date      24 July 2020
         */
        get: function () {
            return this._step;
        },
        /**
         * Sets the step value of the pixel increment.
         * @param step      The step value of the pixel incremnet
         * @author          Kevin White
         * @date            24 July 2020
         */
        set: function (step) {
            if (step < 1 || step > 50) {
                return;
            }
            this._step = step;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FadeInstruction.prototype, "fadeIn", {
        /**
         * Gets whether the slider fades in.
         * @returns     True if the LEDs fade in or false if the LEDs fade out
         * @author      Kevin White
         * @date        24 July 2020
         */
        get: function () {
            return this._fadeIn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the LEDs to fade in.
     * @author      Kevin White
     * @date        24 July 2020
     */
    FadeInstruction.prototype.fadeInLeds = function () {
        this._fadeIn = false;
    };
    /**
     * Sets the LEDs to fade out.
     * @author      Kevin White
     * @date        24 July 2020
     */
    FadeInstruction.prototype.fadeOutLeds = function () {
        this._fadeIn = true;
    };
    return FadeInstruction;
}(instruction_1.Instruction));
exports.FadeInstruction = FadeInstruction;
//# sourceMappingURL=instruction-4-fade.js.map