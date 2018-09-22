import {IModuleProvider} from "../../../di/module/IModuleProvider";
import {IInversifyFactory} from "../../../di/inversify/IInversifyFactory";
import {ModuleId} from "../../../index";
import {ContainerModule} from "inversify";
import {BrokerConnectInfo} from "./BrokerConnectInfo";
import {ClusterExtension} from "./ClusterExtension";
/**
 * Created by jheinnic on 4/30/17.
 */

export class ExtOne implements IModuleProvider {
    moduleId: ModuleId;

    provide(factory: IInversifyFactory): ContainerModule {
        return factory.createContainerModule(
            (bind, unbind, isBound, rebind ) => {
                bind(ClusterExtension).to(ClusterExtension);
            }
        );
    }

}
