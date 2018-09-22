"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by jheinnic on 4/30/17.
 */
var dist_1 = require("@bstock/metajs/dist");
var DITypes = (function () {
    function DITypes() {
        this.Core = new dist_1.InjectionToken("Core");
    }
    return DITypes;
}());
exports.DITypes = DITypes;
