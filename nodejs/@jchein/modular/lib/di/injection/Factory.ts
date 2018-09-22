/**
 * Created by jheinnic on 4/28/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {ITokenBundle} from "./ITokenBundle";
import {TokenBundleMixin} from "./TokenBundleMixin";


export class FactoryToken<T> extends InjectionToken<T>
{
    constructor(label: string) {
        super(`Factory<${label}>`);
    }
}

export type FactoryBundle = ITokenBundle<FactoryToken<any>>


export class FactoryRegistry implements FactoryBundle
{
    readonly [K: string]: FactoryToken<any>;
}


export type FactoryBundleMixin = TokenBundleMixin<FactoryToken<any>,FactoryBundle>
