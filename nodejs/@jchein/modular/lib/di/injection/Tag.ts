/**
 * Created by jheinnic on 4/28/17.
 */
import {ISymbolBundle} from "./ISymbolBundle";
import {SymbolBundleMixin} from "./SymbolBundleMixin";


// export class TagToken extends InjectionToken<string> {
//     constructor(label: string) { super(`${label}::Tag`); }
// }

// export interface TagToken extends Symbol { }

export type TagToken = symbol;

export type TagBundle = ISymbolBundle;

export class TagRegistry implements TagBundle {
    readonly [K: string]: TagToken;
}

export type TagBundleMixin = SymbolBundleMixin<TagToken, TagBundle>
