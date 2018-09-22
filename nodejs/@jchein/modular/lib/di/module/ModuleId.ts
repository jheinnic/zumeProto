import {ContainerModule} from "inversify";
import {InjectionToken} from "@jchptf/metajs/dist";
import {IModuleProvider} from "./IModuleProvider";
import {Constructor} from "reflect-helper/util";
/**
 * Created by jheinnic on 4/26/17.
 */

export class ModuleId<T extends IModuleProvider> extends InjectionToken<T> {
    constructor(moduleProvider: Constructor<T>) {
        super(moduleProvider.name!);
    }
}
