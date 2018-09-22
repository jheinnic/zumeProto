/**
 * Created by jheinnic on 4/26/17.
 */
import {ContainerModule} from "inversify";
import {InjectionToken} from "@bstock/metajs/dist";

export class ExtensionId extends InjectionToken<ContainerModule>
{
    constructor(moduleId: string) {
        super(moduleId);
    }
}
