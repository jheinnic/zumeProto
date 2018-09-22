/**
 * Created by jheinnic on 4/26/17.
 */
import { ModuleId } from "./ModuleId";
import { ContainerModule } from "inversify";
/**
 * Interface that must be implemented by root-level modules that get injected to the ModuleCatalog by virtue
 * of their BModule annotation.
 */
export interface IModuleProvider {
    moduleId: ModuleId;
    provide(): ContainerModule;
}
