/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {PlugOne} from "./PlugOne";
import {DITypeConstructor} from "./DI";
import {interfaces} from "inversify";
import Factory = interfaces.Factory;

export class B {
    a = new InjectionToken<PlugOne>("PP");
    b = new InjectionToken<Factory<PlugOne>>("AA");
}

export interface IB extends B {
}

declare namespace DI {
    export interface Type extends IB {
    }
}

export function MixinB(Base: DITypeConstructor): DITypeConstructor {
    return class extends Base implements IB {
        readonly a = new InjectionToken<PlugOne>("PP");
        readonly b = new InjectionToken<Factory<PlugOne>>("AA");

        constructor(...args: any[]) {
            super(args);
        }
    };
}
;
