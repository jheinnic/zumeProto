"use strict";
/**
 * Created by jheinnic on 4/17/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const inversify_logger_middleware_1 = require("inversify-logger-middleware");
exports.appContainer = new inversify_1.Container();
if (process.env.NODE_ENV === 'development') {
    let logger = inversify_logger_middleware_1.makeLoggerMiddleware();
    exports.appContainer.applyMiddleware(logger);
}
//# sourceMappingURL=container.js.map