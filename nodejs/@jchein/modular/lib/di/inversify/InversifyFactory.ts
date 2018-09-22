/**
 * Created by jheinnic on 5/1/17.
 */
import {IInversifyFactory} from "./IInversifyFactory";
import {Container, ContainerModule, interfaces} from "inversify";
import ContainerModuleCallBack = interfaces.ContainerModuleCallBack;

export class InversifyFactory implements IInversifyFactory {
    createContainer(): Container {
        return new Container();
    }

    createContainerModule(callback: ContainerModuleCallBack): ContainerModule {
        return new ContainerModule(callback);
    }
}
