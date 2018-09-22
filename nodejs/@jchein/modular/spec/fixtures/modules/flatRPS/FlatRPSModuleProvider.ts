/**
 * Created by jheinnic on 4/30/17.
 */

import {BModule} from "../../../../dist"; // /di/registry/BModule";
import {IModuleProvider} from "../../../../dist";
import {ModuleId} from "../../../../dist"; ///di/module/ModuleId";
import {ContainerModule} from "inversify";

@BModule(
    new ModuleId("tests/fixtures/modules/flatRPS"),
)
export class FlatRPSModuleProvider implements IModuleProvider {
    moduleId: ModuleId;

    provide(): ContainerModule {

    }
}
