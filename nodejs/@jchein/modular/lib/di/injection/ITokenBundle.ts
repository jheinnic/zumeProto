/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@jchptf/metajs/dist";

export interface ITokenBundle<T extends InjectionToken<any>> {
    // readonly [K: string]: T;
}
