import { ModuleId } from "../module/ModuleId";
export interface IApplication {
    importModule(moduleId: string): void;
    importModules(moduleIds: string[]): void;
    start(): void;
    stop(): void;
}
export declare class Application implements IApplication {
    private readonly appContainer;
    constructor();
    importModule(moduleId: ModuleId): void;
    importModules(moduleIds: ModuleId[]): void;
    start(): void;
    stop(): void;
}
