/**
 * Created by jheinnic on 5/3/17.
 */
import {interfaces} from "inversify";
import {PlugTwo} from "../../PlugTwo";
import {ToyToken} from "../Toy";

export declare namespace Toy {
    export interface Bundle {
        aa: ToyToken<PlugTwo>,
        bb: ToyToken<interfaces.Factory<PlugTwo>>
    }
}

