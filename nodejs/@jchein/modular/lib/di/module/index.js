"use strict";
/**
 * Created by jheinnic on 4/26/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("@bstock/metajs/dist");
var IExtensionObservable_1 = require("../extensionPoint/IExtensionObservable");
exports.IModulePublisher = IExtensionObservable_1.IModulePublisher;
var app_1 = require("../app");
exports.IApplication = app_1.IApplication;
var IDIRegistry_1 = require("../registry/IDIRegistry");
exports.IModuleCatalog = IDIRegistry_1.IModuleCatalog;
var ModuleId_1 = require("./ModuleId");
exports.ModuleId = ModuleId_1.ModuleId;
// export {LoadableModule} from "./LoadableModule";
var DIRegistry_1 = require("../registry/DIRegistry");
exports.moduleCatalog = DIRegistry_1.moduleCatalog;
exports.DITypes = {
    IModulePublisher: new dist_1.InjectionToken("IModulePublisher"),
    IModuleProvider: new dist_1.InjectionToken("IModuleProvider")
};
exports.LOAD_MODULE_PRIORITY_MAX = 8192;
