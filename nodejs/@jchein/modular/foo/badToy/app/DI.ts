/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";

export class DIType {
    readonly [K: string]: InjectionToken<any>;
}

export interface DITypeConstructor {
    new(...args: any[]): DIType;
}

export class Blankee extends DIType { }

declare namespace DI {
    export interface Type extends DIType { }
}

export var TYPES: DIType;

