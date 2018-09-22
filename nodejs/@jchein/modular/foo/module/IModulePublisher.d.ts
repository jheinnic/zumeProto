import { Observable } from "rxjs";
import { ContainerModule } from "inversify";
/**
 * Created by jheinnic on 4/26/17.
 */
export interface IModulePublisher {
    getPublishedModules(): Observable<ContainerModule>;
}
