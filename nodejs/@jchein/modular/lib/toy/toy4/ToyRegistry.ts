/**
 * Created by jheinnic on 4/28/17.
 */
import {ITokenBundle} from "../../di/injection/ITokenBundle";
import {ToyToken} from "./Toy";

export class ToyRegistry implements ITokenBundle<ToyToken<any>> {
    constructor() {
        console.log("Before");
        for (let name in this) {
            console.log(`In ${name}`);
        }
        console.log("After: ", JSON.stringify(this));
        let self = this;
        setTimeout(function () {
            console.log("Later: ", JSON.stringify(self));
        }, 2500);
    }
}
