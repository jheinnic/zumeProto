"use strict";
/**
 * Created by jheinnic on 4/26/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ModuleCatalog_1 = require("./ModuleCatalog");
exports.moduleCatalog = ModuleCatalog_1.moduleCatalog;
var BModule_1 = require("./BModule");
exports.BModule = BModule_1.BModule;
var ModuleId_1 = require("./ModuleId");
exports.ModuleId = ModuleId_1.ModuleId;
var LoadableModule_1 = require("./LoadableModule");
exports.LoadableModule = LoadableModule_1.LoadableModule;
exports.DiTypes = {
    IModulePublisher: Symbol("IModulePublisher"),
    IModuleProvider: Symbol("IModuleProvider")
};
//# sourceMappingURL=index.js.map