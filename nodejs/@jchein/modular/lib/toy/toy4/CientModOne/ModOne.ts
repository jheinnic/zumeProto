import {IModuleProvider} from "../../../di/module/IModuleProvider";
import {ContainerModule} from "inversify";
import {IInversifyFactory} from "../../../di/inversify/IInversifyFactory";
/**
 * Created by jheinnic on 4/30/17.
 */

export class ModOne implements IModuleProvider {
    provide(factory: IInversifyFactory): ContainerModule {
        return factory.createContainerModule(
            (bind, unbind, isBound, rebind) => {

            }
        );
    }
}
