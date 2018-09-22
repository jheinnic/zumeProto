/**
 * Created by jheinnic on 4/28/17.
 */
import {InjectionToken} from "@jchptf/metajs/dist";
import {ITokenBundle} from "./ITokenBundle";
import {TokenBundleMixin} from "./TokenBundleMixin";


export class TypeToken<T> extends InjectionToken<T> {
    constructor(label: string) { super(`Type<${label}>`); }
}

export type TypeBundle = ITokenBundle<TypeToken<any>>

export class TypeRegistry implements TypeBundle
{
    readonly [K: string]: TypeToken<any>;
}

export type TypeBundleMixin = TokenBundleMixin<TypeToken<any>,TypeBundle>
