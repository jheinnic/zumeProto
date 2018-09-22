/**
 * Created by jheinnic on 4/26/17.
 */
import { ContainerModule } from "inversify";
import { ModuleId } from "./ModuleId";
import { IApplication } from "./IApplication";
export interface IModuleCatalog {
    getModuleById(id: ModuleId): ContainerModule;
    getBModuleDecorator(): ClassDecorator;
    getApplication(): IApplication;
}
