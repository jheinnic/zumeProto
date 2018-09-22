"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
function initDatasources(loadContext, asyncDone) {
    const sharedContainer = loadContext.appContainer;
    const searchPaths = loadContext.serviceConfig.searchPaths.split(/:/);
    loadContext.serviceConfig.moduleIds.split(/:/).forEach((moduleId) => {
        const containerModule = searchPaths.reduce((previousFind, basePath) => {
            let retVal = previousFind;
            if (!retVal) {
                const moduleFqId = path_1.default.join(basePath, moduleId);
                try {
                    // TODO: Would it be more accurate to expect a Provider<ContainerModule> with some data
                    //       exchange (e.g. an opportunity to inspect configuration?
                    retVal = require(moduleFqId);
                }
                catch (e) {
                    console.log(`Failed to find ${moduleId} at ${moduleFqId}`);
                    retVal = null;
                }
            }
            return retVal;
        }, null);
        if (containerModule === null) {
            console.error(`Failed to find ${moduleId} anywhere in the search path!!!`);
            throw new Error(`Failed to find ${moduleId} anywhere in the search path!!!`);
        }
        else {
            try {
                sharedContainer.load(containerModule);
            }
            catch (e) {
                console.error(`Exception thrown while loading container module for ${moduleId}`, e);
                throw new Error(`Exception thrown while loading container module for ${moduleId}: ${e}`);
            }
        }
    });
}
exports.default = initDatasources;
//# sourceMappingURL=18-common-modules.js.map