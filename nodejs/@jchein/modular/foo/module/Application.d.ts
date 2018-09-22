/**
 * Created by jheinnic on 4/21/17.
 */
import { Container } from "inversify";
import { ModuleId } from "./ModuleId";
import { IModuleRegistry } from "./IModuleRegistry";
export interface IApplication {
    importModule(moduleId: string): void;
    start(): void;
    stop(): void;
}
export declare class Application implements IApplication {
    private appContainer;
    private moduleRegistry;
    private initState;
    private environment;
    constructor(appContainer: Container, moduleRegistry: IModuleRegistry);
    importModule(moduleId: ModuleId): boolean;
    loadEnvironment(): void;
    start(): void;
    stop(): void;
}
