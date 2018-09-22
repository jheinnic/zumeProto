/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {PlugTwo} from "./PlugTwo";
import {PlugOne} from "../../../scripts/toy/plugOne/PlugOne";
import {interfaces} from "inversify";
import Factory = interfaces.Factory;

// export class DITypes implements DI.Type {
//     PlugTwo: InjectionToken<PlugTwo> = new InjectionToken<PlugTwo>("PlugTwo");
// }

declare namespace DI {
    export interface Type extends IB {
        // a: InjectionToken<PlugOne>;
        // b: InjectionToken<interfaces.Factory<PlugOne>>;
    }
}
// export interface BI {
//     aa: InjectionToken<PlugTwo>;
//     bb: InjectionToken<interfaces.Factory<PlugTwo>>;
// }

export class B {
    a = new InjectionToken<PlugOne>("PP");
    b = new InjectionToken<interfaces.Factory<PlugOne>>("AA");
}

export interface IB extends B { }

declare namespace DI {
    export interface Type extends A {
        aa: InjectionToken<PlugTwo>;
        bb: InjectionToken<interfaces.Factory<PlugTwo>>;
    }
}

export class A {
    aa = new InjectionToken<PlugTwo>("P");
    bb = new InjectionToken<interfaces.Factory<PlugTwo>>("A");
}

export interface IA extends A {
}


export class KEE {
    readonly [K: string]: InjectionToken<any>;
}
export interface KeeConstructor {
    new(...args: any[]): KEE;
}

export function MixinA<T extends KeeConstructor>(Base: T): KeeConstructor {
    return class extends Base implements IA {
        readonly aa = new InjectionToken<PlugTwo>("PlugTwoA");
        readonly bb = new InjectionToken<interfaces.Factory<PlugTwo>>("Fact2");

        constructor(...args: any[]) {
            super(args);
        }
    };
}
export function MixinB<T extends KeeConstructor>(Base: T): KeeConstructor {
    return class extends Base implements IB {
        readonly a = new InjectionToken<PlugOne>("PP");
        readonly b = new InjectionToken<interfaces.Factory<PlugOne>>("AA");

        constructor(...args: any[]) {
            super(args);
        }
    };
}

export class Blankee extends KEE {

}

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
