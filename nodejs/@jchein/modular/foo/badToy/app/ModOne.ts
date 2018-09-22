/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {PlugTwo} from "../plugTwo/PlugTwo";
import {DITypeConstructor, TYPES} from "./DI";
import {interfaces} from "inversify";
import Factory = interfaces.Factory;

export class A {
    aa = new InjectionToken<PlugTwo>("P");
    bb = new InjectionToken<Factory<PlugTwo>>("A");
}

export interface IA extends A {
}

declare namespace DI {
    export interface Type extends A {
    }
}

export function MixinA<T extends DITypeConstructor>(Base: T): DITypeConstructor {
    return class extends Base implements IA {
        readonly aa = new InjectionToken<PlugTwo>("PlugTwoA");
        readonly bb = new InjectionToken<Factory<PlugTwo>>("Fact2");

        constructor(...args: any[]) {
            super(args);
        }
    };
}

export function showTypes() {
    console.log("In Mod Three: ", TYPES);
    // console.log("In Mod Three: ", DI.M1, DI.M2);
}


