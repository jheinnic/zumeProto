/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {PlugOne} from "./PlugOne";

export class DITypes {
    PlugOne: InjectionToken<PlugOne> = new InjectionToken<PlugOne>("PlugOne");
}
