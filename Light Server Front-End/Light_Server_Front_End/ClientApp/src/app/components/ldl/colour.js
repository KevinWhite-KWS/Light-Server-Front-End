"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGB_COLOR_REGEX = /\((\d+),\s*(\d+),\s*(\d+)(,\s*(\d*.\d*))?\)/;
var Colour = /** @class */ (function () {
    function Colour(r, g, b, a) {
        if (typeof r === 'string') {
            r = r.trim();
            if (r.indexOf('#') === 0) {
                r = r.substr(r.indexOf('#') + 1);
                this.r = parseInt(r.substr(0, 2), 16);
                this.g = parseInt(r.substr(2, 2), 16);
                this.b = parseInt(r.substr(4, 2), 16);
            }
            else if (r.indexOf('rgb') === 0) {
                var res = exports.RGB_COLOR_REGEX.exec(r);
                this.r = parseInt(res[1], 10);
                this.g = parseInt(res[2], 10);
                this.b = parseInt(res[3], 10);
                this.a = res[5] ? parseFloat(res[5]) : 1;
            }
        }
        else {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a || 1;
        }
    }
    Colour.prototype.toHex = function () {
        return '#' + this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
    };
    Colour.prototype.toRgb = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    Colour.prototype.toRgba = function () {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
    };
    return Colour;
}());
exports.Colour = Colour;
//# sourceMappingURL=colour.js.map