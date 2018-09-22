/**
 * Created by jheinnic on 4/21/17.
 */
import {Container} from "inversify";
import {makeLoggerMiddleware} from "inversify-logger-middleware";
import {ModuleId} from "../module/ModuleId";
import {IModuleProvider} from '../module/IModuleProvider';


export interface IApplication {
    importModule <T extends IModuleProvider> (moduleId: ModuleId<T>): boolean;
    loadEnvironment(): void;
    start(): void;
    stop(): void;
}

