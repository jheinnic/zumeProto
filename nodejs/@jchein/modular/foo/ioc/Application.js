"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by jheinnic on 4/21/17.
 */
const inversify_1 = require("inversify");
const inversify_logger_middleware_1 = require("inversify-logger-middleware");
class Application {
    constructor() {
        this.appContainer = new inversify_1.Container();
        if (process.env.NODE_ENV === 'development') {
            let logger = inversify_logger_middleware_1.makeLoggerMiddleware();
            this.appContainer.applyMiddleware(logger);
        }
    }
    importModule(moduleId) {
        throw new Error('Method not implemented.');
    }
    importModules(moduleIds) {
        throw new Error('Method not implemented.');
    }
    start() {
        throw new Error('Method not implemented.');
    }
    stop() {
        throw new Error('Method not implemented.');
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map