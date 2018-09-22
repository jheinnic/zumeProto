/**
 * Created by jheinnic on 4/28/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";
import {ITokenBundle} from "../../di/injection/ITokenBundle";


export class ToyToken<T> extends InjectionToken<T> {
    constructor(label: string) { super(`Toy<${label}>`); }
}

export declare namespace Toy {
    export interface Bundle extends ITokenBundle<ToyToken<any>> { }

}

// export class Registry implements Toy.Bundle {
//     constructor() {
//         console.log("Before");
//         for (let name in this) {
//             console.log(`In ${name}`);
//         }
//         console.log("After");
//     }
// }
