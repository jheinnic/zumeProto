import {Container, ContainerModule, interfaces} from "inversify";
import ContainerModuleCallBack = interfaces.ContainerModuleCallBack;
/**
 * Created by jheinnic on 4/30/17.
 */
export interface IInversifyFactory {
    createContainer(): Container;

    createContainerModule( callback: ContainerModuleCallBack ): ContainerModule;
}
