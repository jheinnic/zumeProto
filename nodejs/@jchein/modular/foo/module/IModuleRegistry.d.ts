/**
 * Created by jheinnic on 4/26/17.
 */
import { LoadableModule } from "./LoadableModule";
import { ModuleId } from "./ModuleId";
/**
 * Internal interface used by the BModule decorator to inform the catalog of discovered models and their on
 * publication credentials.
 */
export interface IModuleRegistry {
    register(unregistered: LoadableModule): boolean;
    load(moduleId: ModuleId): boolean;
    unload(moduleId: ModuleId): boolean;
}
