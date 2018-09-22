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
var ModOne_1 = require("./ModOne");
var ModTwo_1 = require("./ModTwo");
var DI_1 = require("./DI");
var DI_2 = require("./DI");
exports._MA = ModOne_1.MixinA(DI_1.Blankee);
exports._MAB = ModTwo_1.MixinB(exports._MA);
var M1 = (function (_super) {
    __extends(M1, _super);
    function M1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return M1;
}(exports._MAB));
exports.M1 = M1;
;
exports._MB = ModTwo_1.MixinB(DI_1.Blankee);
exports._MBA = ModOne_1.MixinA(exports._MB);
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
DI_2.TYPES = r2;
var ModThree_1 = require("./ModThree");
ModThree_1.showTypes();
var ModOne_2 = require("./ModOne");
ModOne_2.showTypes();
console.log(r1.aa === r2.aa);
console.log(r1.b === r2.b);
console.log(r1.bb === r1.bb);
console.log(r1.a === r1.a);
