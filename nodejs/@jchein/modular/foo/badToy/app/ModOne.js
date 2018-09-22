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
var DI_1 = require("./DI");
var A = (function () {
    function A() {
        this.aa = new dist_1.InjectionToken("P");
        this.bb = new dist_1.InjectionToken("A");
    }
    return A;
}());
exports.A = A;
function MixinA(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.call(this, args) || this;
            _this.aa = new dist_1.InjectionToken("PlugTwoA");
            _this.bb = new dist_1.InjectionToken("Fact2");
            return _this;
        }
        return class_1;
    }(Base));
}
exports.MixinA = MixinA;
function showTypes() {
    console.log("In Mod Three: ", DI_1.TYPES);
    // console.log("In Mod Three: ", DI.M1, DI.M2);
}
exports.showTypes = showTypes;
