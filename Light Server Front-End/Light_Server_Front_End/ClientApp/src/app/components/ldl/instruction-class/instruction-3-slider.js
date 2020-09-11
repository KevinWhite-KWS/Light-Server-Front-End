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
 * Slider instruction (03) is an animation
 * effect akin to the knight rider car kit.
 * The 'slider' moves from one side to the other
 * on a constant background.
 * @author    Kevin White
 * @date      23 July 2020
 */
var SliderInstruction = /** @class */ (function (_super) {
    __extends(SliderInstruction, _super);
    function SliderInstruction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sliderColour = new colour_1.Colour(255, 0, 0);
        _this._backgroundColour = new colour_1.Colour(0, 0, 0);
        _this._sliderWidth = 1;
        _this._startNear = true;
        return _this;
    }
    Object.defineProperty(SliderInstruction.prototype, "instructionType", {
        /**
         * Gets the type of instruction as a simple enumeration value.
         * @returns   The instruction type
         * @author    Kevin White
         * @date      23 July 2020
         */
        get: function () {
            return instruction_type_1.InstructionType.Slider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderInstruction.prototype, "sliderColour", {
        /**
         * Gets the colour of the slider.
         * @returns   The colour of the slider
         * @author    Kevin White
         * @date      23 July 2020
         */
        get: function () {
            return this._sliderColour;
        },
        /**
         * Sets the colour of the slider.
         * @param sliderColour  The colour of the slider
         * @author              Kevin White
         * @date                23 July 2020
         */
        set: function (sliderColour) {
            if (!sliderColour) {
                return;
            }
            this._sliderColour = sliderColour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderInstruction.prototype, "backgroundColour", {
        /**
         * Gets the colour of the background pixels.
         * @returns   The colour of the background pixels
         * @author    Kevin White
         * @date      23 July 2020
         */
        get: function () {
            return this._backgroundColour;
        },
        /**
         * Sets the colour of the background pixels.
         * @param backgroundColour  The colour of the background pixels
         * @author                  Kevin White
         * @date                    23 July 2020
         */
        set: function (backgroundColour) {
            if (!backgroundColour) {
                return;
            }
            this._backgroundColour = backgroundColour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderInstruction.prototype, "sliderWidth", {
        /**
         * Gets the width of the slider.
         * @returns   The width of the slider.
         * @author    Kevin White
         * @date      23 July 2020
         */
        get: function () {
            return this._sliderWidth;
        },
        /**
         * Sets the width of the width.
         * @param sliderWidth   The width of the slider
         * @author              Kevin White
         * @date                23 July 2020
         */
        set: function (sliderWidth) {
            if (sliderWidth < 1 || sliderWidth > 50) {
                return;
            }
            this._sliderWidth = sliderWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderInstruction.prototype, "startNear", {
        /**
         * Gets whether the slider starts from the near side.
         * @returns     True if the slider starts from the near side or false if it starts from the far side
         * @author      Kevin White
         * @date        23 July 2020
         */
        get: function () {
            return this._startNear;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the slider to start from the near side.
     * @author      Kevin White
     * @date        23 July 2020
     */
    SliderInstruction.prototype.startSliderNear = function () {
        this._startNear = true;
    };
    /**
     * Sets the slider to start from the far side.
     * @author      Kevin White
     * @date        23 July 2020
     */
    SliderInstruction.prototype.startSliderFar = function () {
        this._startNear = false;
    };
    return SliderInstruction;
}(instruction_1.Instruction));
exports.SliderInstruction = SliderInstruction;
//# sourceMappingURL=instruction-3-slider.js.map