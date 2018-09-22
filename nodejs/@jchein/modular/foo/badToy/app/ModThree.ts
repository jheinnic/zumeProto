/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {DITypeConstructor, TYPES} from "./DI";
import {interfaces} from "inversify";
import Factory = interfaces.Factory;

declare namespace DI {
    // export interface Type {}
}

export function showTypes() {
    console.log("In Mod Three: ", TYPES);
    // console.log("In Mod Three: ", DI.M1, DI.M2);
}
