"use strict";
/**
 * Created by jheinnic on 4/10/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const config_namespace_1 = require("../scrap/config.namespace");
var BStockConfig = config_namespace_1.configmodel.BStockConfig;
function injectConfiguration(loadContext) {
    loadContext.appContainer.bind(BStockConfig).toConstantValue(loadContext.configModel);
}
exports.injectConfiguration = injectConfiguration;
//# sourceMappingURL=01-configuration.js.map