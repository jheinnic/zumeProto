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
var dist_1 = require("@bstock/metajs/dist");
/**
 * Created by jheinnic on 4/26/17.
 */
var ModuleId = (function (_super) {
    __extends(ModuleId, _super);
    function ModuleId(moduleId) {
        return _super.call(this, moduleId) || this;
    }
    return ModuleId;
}(dist_1.InjectionToken));
exports.ModuleId = ModuleId;
