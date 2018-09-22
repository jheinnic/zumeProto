/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {PlugTwo} from "./PlugTwo";
import {DITypeConstructor, Tokens} from "./DI";
import {interfaces} from "inversify";
import Factory = interfaces.Factory;

// export class A {
//     aa = new InjectionToken<PlugTwo>("P");
//     bb = new InjectionToken<Factory<PlugTwo>>("A");
// }

declare namespace DI {
    export interface Type {
        aa: InjectionToken<PlugTwo>,
        bb: InjectionToken<Factory<PlugTwo>>
    }
}

// export function MixinA<T extends DITypeConstructor>(Base: T): DITypeConstructor {
export function MixinA(Base: DITypeConstructor): DITypeConstructor {
    return class extends Base implements DI.Type {
        readonly aa = new InjectionToken<PlugTwo>("PlugTwo");
        readonly bb = new InjectionToken<Factory<PlugTwo>>("Fact2");

        constructor(...args: any[]) {
            super(args);
        }
    };
}

export function showTypes() {
    console.log("In Mod Three: ", Tokens.TYPE);
}


