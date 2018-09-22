import {ContainerModule} from "inversify";
import {InjectionToken} from "@bstock/metajs/dist";
import {moduleCatalog} from "../di/module/ModuleCatalog";
/**
 * Created by jheinnic on 4/26/17.
 */

export const CatalogDecorators = {
    BModule: moduleCatalog.bModuleDecorator,
    ExtendingPlugins: moduleCatalog.extendingPlugin,
    ExtensionPoint: moduleCatalog.extensionPoint
};

export const BModule = CatalogDecorators.BModule;
export const ExtendingPlugins = CatalogDecorators.ExtendingPlugins;
export const ExtensionPoint = CatalogDecorators.ExtensionPoint;

