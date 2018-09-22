/**
 * Created by jheinnic on 4/30/17.
 */
// import {ITokenBundle} from "./ITokenBundle";
// import {InjectionToken} from "@jchptf/metajs/dist";
import {ISymbolBundle} from "./ISymbolBundle";

export interface SymbolBundleConstructor<B extends ISymbolBundle> {
    new(...args: any[]): B;
}

