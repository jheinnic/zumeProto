/**
 * Created by jheinnic on 4/30/17.
 */
import {ISymbolBundle} from "./ISymbolBundle";

export class SymbolBundle implements ISymbolBundle {
    readonly [K: string]: T;
}

const a: symbol = Symbol("a");
const b: symbol = Symbol("b");

export interface AA<T extends symbol> {
   foo: T;
}

type aa = symbol;
type bb = symbol;

const oneAa: aa = a;
const oneAb: bb = b;
const twoAa: aa = b;
const twoAb: bb = a;

class BAa implements AA<"a"|aa|bb> {
   foo: any;
}

export const ok: ISymbolBundle = {
   [a]: "a",
   [b]: "b"
};