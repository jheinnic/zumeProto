/**
 * Created by jheinnic on 4/30/17.
 */
import {MixinA} from "./ModOne";
import {MixinB} from "./ModTwo";
import {Blankee} from "./DI";
import {TYPES} from "./DI";

export const _MA = MixinA<typeof Blankee>(Blankee);
export const _MAB = MixinB<typeof Blankee>(_MA);
export class M1 extends _MAB { };

export const _MB = MixinB<typeof Blankee>(Blankee);
export const _MBA = MixinA<typeof Blankee>(_MB);
export class M2 extends _MBA { };

const r1 = new M1();
const r2 = new M2();

console.log(r1);
console.log(r2);

export declare namespace DI {
    export interface Type {}

    export class M1 extends _MAB { };

    export class M2 extends _MBA { };
}

TYPES = r2;

import {showTypes} from "./ModThree";
showTypes();

import {showTypes as badShowTypes} from "./ModOne";
badShowTypes();

console.log(r1.aa === r2.aa);
console.log(r1.b === r2.b);
console.log(r1.bb === r1.bb);
console.log(r1.a === r1.a);
