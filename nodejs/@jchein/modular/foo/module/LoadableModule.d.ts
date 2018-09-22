/**
 * Created by jheinnic on 4/26/17.
 */
import { ModuleId } from "./ModuleId";
import { ContainerModule } from "inversify";
/**
 * Implementatiomn-agnostic container for loadable container modules received either from an IModuleProvider or an
 * IModulePublisher.
 *
 * This artifact does nothing of itself. but its ContainerModule can be loaded into a Container.
 */
export declare class LoadableModule {
    id: ModuleId;
    module: ContainerModule;
}
