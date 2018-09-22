/**
 * Created by jheinnic on 4/11/17.
 */
import { interfaces } from "inversify";
import Middleware = interfaces.Middleware;
export declare class BindingObfuscator {
    label: string;
    constructor(val: string);
    getMiddlewareFunction(): Middleware;
}
