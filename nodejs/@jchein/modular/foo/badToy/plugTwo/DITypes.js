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
// export interface BI {
//     aa: InjectionToken<PlugTwo>;
//     bb: InjectionToken<interfaces.Factory<PlugTwo>>;
// }
var B = (function () {
    function B() {
        this.a = new dist_1.InjectionToken("PP");
        this.b = new dist_1.InjectionToken("AA");
    }
    return B;
}());
exports.B = B;
var A = (function () {
    function A() {
        this.aa = new dist_1.InjectionToken("P");
        this.bb = new dist_1.InjectionToken("A");
    }
    return A;
}());
exports.A = A;
var KEE = (function () {
    function KEE() {
    }
    return KEE;
}());
exports.KEE = KEE;
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
function MixinB(Base) {
    return (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.call(this, args) || this;
            _this.a = new dist_1.InjectionToken("PP");
            _this.b = new dist_1.InjectionToken("AA");
            return _this;
        }
        return class_2;
    }(Base));
}
exports.MixinB = MixinB;
var Blankee = (function (_super) {
    __extends(Blankee, _super);
    function Blankee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Blankee;
}(KEE));
exports.Blankee = Blankee;
exports._MA = MixinA(Blankee);
exports._MAB = MixinB(exports._MA);
var M1 = (function (_super) {
    __extends(M1, _super);
    function M1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return M1;
}(exports._MAB));
exports.M1 = M1;
;
exports._MB = MixinB(Blankee);
exports._MBA = MixinA(exports._MB);
var M2 = (function (_super) {
    __extends(M2, _super);
    function M2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return M2;
}(exports._MBA));
exports.M2 = M2;
;
var r1 = new M1();
var r2 = new M2();
console.log(r1);
console.log(r2);
