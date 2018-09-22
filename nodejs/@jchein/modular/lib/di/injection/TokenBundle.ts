/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {ITokenBundle} from "./ITokenBundle";

export class TokenBundle<T extends InjectionToken<any>> implements ITokenBundle<T> {
    readonly [K: string]: T;
}

