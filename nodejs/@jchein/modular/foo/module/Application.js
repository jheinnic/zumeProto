"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_logger_middleware_1 = require("inversify-logger-middleware");
const assert = require("assert");
const Environment_1 = require("./Environment");
var InitStates;
(function (InitStates) {
    InitStates[InitStates["INITIAL"] = 0] = "INITIAL";
    InitStates[InitStates["BOOTSTRAPPING"] = 1] = "BOOTSTRAPPING";
    InitStates[InitStates["READY"] = 2] = "READY";
    InitStates[InitStates["STARTING"] = 3] = "STARTING";
    InitStates[InitStates["RUNNING"] = 4] = "RUNNING";
    InitStates[InitStates["STOPPING"] = 5] = "STOPPING";
    InitStates[InitStates["FAILED"] = 6] = "FAILED";
})(InitStates || (InitStates = {}));
;
class Application {
    // ModuleCatalog provides the app Container and loads modules into it when asked to.
    constructor(appContainer, moduleRegistry) {
        this.appContainer = appContainer;
        this.moduleRegistry = moduleRegistry;
        assert(!!this.appContainer);
        assert(!!this.moduleRegistry);
        this.initState = InitStates.INITIAL;
    }
    importModule(moduleId) {
        return (!!moduleId) && this.moduleRegistry.load(moduleId);
    }
    loadEnvironment() {
        if (this.initState !== InitStates.INITIAL) {
            throw Error("Cannot load environment from " + this.initState);
        }
        this.initState = InitStates.BOOTSTRAPPING;
        this.environment = new Environment_1.Environment();
        this.initState = InitStates.READY;
    }
    start() {
        if (this.initState !== InitStates.READY) {
            throw Error("Cannot load environment from " + this.initState);
        }
        this.initState = InitStates.STARTING;
        if (process.env.NODE_ENV === 'development') {
            let logger = inversify_logger_middleware_1.makeLoggerMiddleware();
            this.appContainer.applyMiddleware(logger);
        }
        this.initState = InitStates.RUNNING;
    }
    stop() {
        // throw new Error('Method not implemented.');
        // TODO: Stop application
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map