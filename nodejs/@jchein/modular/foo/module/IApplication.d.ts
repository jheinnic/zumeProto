export interface IApplication {
    importModule(moduleId: string): void;
    loadEnvironment(): void;
    start(): void;
    stop(): void;
}
