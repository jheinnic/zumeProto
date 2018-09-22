"use strict";
/**
 * Created by jheinnic on 4/10/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
function injectValidator(loadContext) {
    loadContext.appContainer.bind(class_validator_1.Validator).toSelf().inSingletonScope();
}
exports.injectValidator = injectValidator;
//# sourceMappingURL=06-validator.js.map