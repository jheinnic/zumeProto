/**
 * Created by jheinnic on 4/30/17.
 */
import {ContainerModule} from "inversify";
import {Constructor} from "reflect-helper/util";
import {ModuleId} from "../module/ModuleId";
import {IModuleProvider} from "../module/IModuleProvider";

export interface IRegistryAccess {
    getModuleById <T extends IModuleProvider> (moduleId: ModuleId<T>): ContainerModule|undefined;
    addModuleProvider <T extends IModuleProvider> (moduleId: ModuleId<T>, provider: Constructor<T>): void;
}
