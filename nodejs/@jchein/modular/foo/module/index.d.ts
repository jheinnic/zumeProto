/**
 * Created by jheinnic on 4/26/17.
 */
import { Symbolic } from "@bstock/ts-utils/dist";
export { IApplication } from "./IApplication";
export { IModuleCatalog } from "./IModuleCatalog";
export { moduleCatalog } from "./ModuleCatalog";
export { BModule } from "./BModule";
export { IModuleProvider } from "./IModuleProvider";
export { IModulePublisher } from "./IModulePublisher";
export { ModuleId } from "./ModuleId";
export { LoadableModule } from "./LoadableModule";
export declare type DiType = "IModulePublisher" | "IModuleProvider";
export declare const DiTypes: Symbolic<DiType>;
