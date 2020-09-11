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
 * Stochastic instruction (05) generates a random set
 * of colours of a given set of possible colours.
 * @author    Kevin White
 * @date      27 Jul 2020
 */
var StochasticInstruction = /** @class */ (function (_super) {
    __extends(StochasticInstruction, _super);
    function StochasticInstruction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Store a collection of colours.
        _this._colours = [
            new colour_1.Colour(255, 0, 0),
            new colour_1.Colour(0, 255, 0)
        ];
        return _this;
    }
    Object.defineProperty(StochasticInstruction.prototype, "instructionType", {
        /**
         * Gets the type of instruction as a simple enumeration value.
         * @returns   The instruction type
         * @author    Kevin White
         * @date      27 Jul 2020
         */
        get: function () {
            return instruction_type_1.InstructionType.Stochastic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StochasticInstruction.prototype, "colours", {
        /**
         * Gets the colours to use to render the pixels in a random manner.
         * @returns   The collection of colours to be used to render the pixels
         * @author    Kevin White
         * @date      27 Jul 2020
         */
        get: function () {
            return this._colours;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Removes the colour at the given index from the
     * collection of colours.  This removes that particular
     * colour from the possible colours to be used to render
     * the LEDs.
     * NOTE: there must be at least two colours.
     * @param index   The index of the colour to be removed from the collection of colours
     * @author        Kevin White
     * @date          27 Jul 2020
     */
    StochasticInstruction.prototype.removeColourAtIndex = function (index) {
        if (this._colours.length <= 2) {
            return;
        }
        this._colours.splice(index, 1);
    };
    /**
     * Sets the colour of a pixel at a particular index.
     * @param newColour   The new colour of the pixel
     * @param index       The index of the colour to be changed
     * @author            Kevin White
     * @date              27 Jul 2020
     */
    StochasticInstruction.prototype.setColour = function (newColour, index) {
        if (index >= this._colours.length) {
            return;
        }
        this._colours[index].r = newColour.r;
        this._colours[index].g = newColour.g;
        this._colours[index].b = newColour.b;
    };
    /**
     * Adds a new colour to the collection of
     * colours to be used to render the pixels.
     * NOTE: there can only be 10 colours maximum.
     * @param colour  The new colour that is to be added
     * @author        Kevin White
     * @date          27 Jul 2020
     */
    StochasticInstruction.prototype.addColour = function (colour) {
        if (this._colours.length >= 10) {
            return;
        }
        this._colours.push(colour);
    };
    return StochasticInstruction;
}(instruction_1.Instruction));
exports.StochasticInstruction = StochasticInstruction;
//# sourceMappingURL=instruction-5-stochastic.js.map