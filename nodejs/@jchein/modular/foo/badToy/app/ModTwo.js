"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by jheinnic on 4/30/17.
 */
var dist_1 = require("@bstock/metajs/dist");
var B = (function () {
    function B() {
        this.a = new dist_1.InjectionToken("PP");
        this.b = new dist_1.InjectionToken("AA");
    }
    return B;
}());
exports.B = B;
function MixinB(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.call(this, args) || this;
            _this.a = new dist_1.InjectionToken("PP");
            _this.b = new dist_1.InjectionToken("AA");
            return _this;
        }
        return class_1;
    }(Base));
}
exports.MixinB = MixinB;
;
