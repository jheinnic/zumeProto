/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {Core} from "./Core";

export class DITypes {
    Core: InjectionToken<Core> = new InjectionToken<Core>("Core");
}
