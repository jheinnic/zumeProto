"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const dist_1 = require("@bstock/metajs/dist");
const Application_1 = require("./Application");
const immutable = require('immutable');
class ModuleCatalog {
    constructor() {
        this.catalogMap = immutable.Map.of();
        this.appContainer = new inversify_1.Container();
        this.application =
            new Application_1.Application(this.appContainer, this);
    }
    getApplication() {
        return this.application;
    }
    register(unregistered) {
        let retVal = this.getModuleById(module.id);
        let registered = true;
        if (!retVal) {
            this.catalogMap = this.catalogMap.set(unregistered.id, unregistered.module);
            ``;
        }
        else {
            registered = false;
        }
        return registered;
    }
    getModuleById(id) {
        return this.catalogMap.get(id);
    }
    // getModulesById()
    getBModuleDecorator() {
        // let annotator: Annotator = new Annotator();
        let BModuleAnnotator = dist_1.Annotator.makeClassAnnotation(BModuleAnnotation);
        return function (target) {
            if (isModuleProvider(target)) {
                let provider = new target.prototype.constructor();
                let moduleId = provider.moduleId;
                let module = provider.provide();
                this.catalogMap = this.catalogMap.set(moduleId, module);
            }
            else {
                console.error("Cannot load " + target + " as an IModuleProvider");
            }
        };
    }
    load(moduleId) {
        let module = this.catalogMap.get(moduleId);
        if (!module) {
            throw Error("No module found for module ID of ${moduleId}");
        }
        this.appContainer.load(module);
        return true;
    }
    unload(moduleId) {
        let module = this.catalogMap.get(moduleId);
        if (!module) {
            throw Error("No module found for module ID of ${moduleId}");
        }
        this.appContainer.unload(module);
        return true;
    }
}
function isModuleProvider(item) {
    if (!!(item && item.prototype && item.prototype.provide)) {
        return true;
    }
    return false;
}
exports.moduleCatalog = new ModuleCatalog();
class BModuleAnnotation {
}
exports.BModuleAnnotation = BModuleAnnotation;
//# sourceMappingURL=ModuleCatalog.js.map