/**
 * Created by jheinnic on 4/30/17.
 */
import {ITokenBundle} from "./ITokenBundle";
import {InjectionToken} from "@jchptf/metajs/dist";

export interface TokenBundleConstructor<B extends ITokenBundle<any>> {
    new(...args: any[]): B;
}

