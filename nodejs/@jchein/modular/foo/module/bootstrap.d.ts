/**
 * Created by jheinnic on 4/10/17.
 */
import { Container } from "inversify";
import { configmodel } from "../scrap/config.namespace";
import Microservice = configmodel.BaseMicroservice;
import IDataSource = configmodel.IDataSource;
export declare class LoadContext {
    readonly configModel: configmodel.BStockConfig;
    readonly appContainer: Container;
    readonly serviceName: string;
    readonly serviceConfig: Microservice;
    constructor(configModel: configmodel.BStockConfig, appContainer: Container);
    getRequiredDatasources(): IDataSource[];
}
export declare class ContainerBootstrap {
    private readonly appRootDir;
    private readonly configModel;
    private sharedContainer;
    private controlContainer;
    private rpcContainer;
    private edgeContainer;
    private startCallback;
    constructor(appRootDir: string);
    boot(startCallback: (err: any, context: LoadContext) => void): void;
    private processBootScripts();
    /**
     * Find all javascript files (except for those prefixed with _)
     * and all directories.
     * @param {String} dir Full path of the directory to enumerate.
     * @return {Array.<String>} A list of absolute paths to pass to `require()`.
     * @private
     */
    findScripts(dir: string): string[];
    private static readonly excludedExtensions;
    private static isPreferredExtension(filename);
    private static tryReadDir(dir);
}
