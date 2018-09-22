"use strict";
/**
 * Created by jheinnic on 4/10/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const class_transformer_1 = require("class-transformer");
const config_namespace_1 = require("../scrap/config.namespace");
const assert_1 = require("assert");
const lodash_1 = require("lodash");
const path_1 = require("path");
const fs_1 = require("fs");
const config = require("config");
class LoadContext {
    constructor(configModel, appContainer) {
        this.configModel = configModel;
        this.appContainer = appContainer;
        this.serviceName = configModel.thisMicroservice;
        let findNamedConfig = (entries, target) => {
            for (let nameConfigPair of entries) {
                if (this.serviceName === nameConfigPair[0]) {
                    return nameConfigPair[1];
                }
            }
            return undefined;
        };
        let foundConfig = findNamedConfig(configModel.microservices.task, this.serviceName) ||
            findNamedConfig(configModel.microservices.rpc, this.serviceName) ||
            findNamedConfig(configModel.microservices.web, this.serviceName);
        if (!!foundConfig) {
            this.serviceConfig = foundConfig;
        }
        else {
            throw Error("No configuration found, given microservice key " + this.serviceName);
        }
    }
    getRequiredDatasources() {
        const dsNames = Immutable.Set(this.serviceConfig.dataSources);
        let retVal = [];
        if (!!dsNames && (dsNames.size > 0)) {
            retVal = Object.keys(this.configModel.dataSources).filter((candidateKey) => dsNames.contains(candidateKey)).map((keyMatch) => this.configModel.dataSources[keyMatch]);
        }
        return retVal;
    }
}
exports.LoadContext = LoadContext;
class ContainerBootstrap {
    constructor(appRootDir) {
        this.appRootDir = appRootDir;
        this.configModel = class_transformer_1.plainToClass(config_namespace_1.configmodel.BStockConfig, config)[0];
        this.sharedContainer = new inversify_1.Container();
    }
    boot(startCallback) {
        this.startCallback = startCallback;
        this.processBootScripts();
        // this.zkClient.start();
    }
    processBootScripts() {
        // Enumerate scripts found in the boot directory
        let bootScripts = lodash_1.default.uniq(this.findScripts(path_1.default.join(this.appRootDir, "boot")));
        // Execute the founds scripts in order, and made a component call for each found.
        let functions = {};
        bootScripts.forEach((filepath) => {
            console.log(`Requiring script ${filepath}`);
            try {
                let exports = require(filepath);
                if (typeof exports === 'function') {
                    console.log(`Exported function detected ${filepath}`);
                    functions[filepath] = {
                        path: filepath,
                        func: exports,
                    };
                }
            }
            catch (e) {
                console.error(`Skipping failed execution of ${filepath}: `, e);
            }
        });
        const loadContext = new LoadContext(this.configModel, this.sharedContainer);
        async.eachSeries(functions, (f, done) => {
            console.log(`Running script ${f.path}`);
            if (f.func.length >= 2) {
                console.log(`Starting async function ${f.path}`);
                f.func(loadContext, function (err) {
                    console.log(`Async function finished ${f.path}`);
                    done(err);
                });
            }
            else {
                console.log(`Starting sync function ${f.path}`);
                f.func(loadContext);
                console.log(`Sync function finished ${f.path}`);
                done();
            }
        }, (err) => {
            this.startCallback(err, loadContext);
        });
    }
    /**
     * Find all javascript files (except for those prefixed with _)
     * and all directories.
     * @param {String} dir Full path of the directory to enumerate.
     * @return {Array.<String>} A list of absolute paths to pass to `require()`.
     * @private
     */
    findScripts(dir) {
        assert_1.default(!!dir, "cannot require directory contents without directory name");
        let files = ContainerBootstrap.tryReadDir(dir);
        // extensions = extensions || _.keys(require.extensions);
        // sort files in lowercase alpha for linux
        files.sort(function (a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a < b) {
                return -1;
            }
            else if (b < a) {
                return 1;
            }
            else {
                return 0;
            }
        });
        let results = [];
        files.forEach((filename) => {
            // ignore index.js and files prefixed with underscore
            if (filename === 'index.js' || filename[0] === '_') {
                return;
            }
            let filepath = path_1.default.resolve(path_1.default.join(dir, filename));
            let stats = fs_1.default.statSync(filepath);
            // only require files supported by require.extensions (.txt .md etc.)
            if (stats.isFile()) {
                if (ContainerBootstrap.isPreferredExtension(filename))
                    results.push(filepath);
                else
                    console.error(`Skipping file ${filepath} - unknown extension`);
            }
            else {
                console.error(`Skipping directory ${filepath}`);
            }
        });
        return results;
    }
    static get excludedExtensions() {
        return {
            '.json': '.json',
            '.node': 'node',
        };
    }
    static isPreferredExtension(filename) {
        let includeExtensions = require.extensions;
        let ext = path_1.default.extname(filename);
        return (ext in includeExtensions) && !(ext in ContainerBootstrap.excludedExtensions);
    }
    static tryReadDir(dir) {
        try {
            return fs_1.default.readdirSync(dir);
        }
        catch (e) {
            return [];
        }
    }
}
exports.ContainerBootstrap = ContainerBootstrap;
//# sourceMappingURL=bootstrap.js.map