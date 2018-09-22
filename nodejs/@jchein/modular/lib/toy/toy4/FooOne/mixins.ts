/**
 * Created by jheinnic on 5/3/17.
 */
import {interfaces} from "inversify";
import {TokenBundleConstructor} from "../../../index";
import {PlugTwo} from "../../PlugTwo";
import {FactoryToken} from "../../../di/injection/Factory";
import {ToyToken} from "../Toy";
import {Toy} from "./tokens";

const aa = new ToyToken<PlugTwo>("PlugTwo");
const bb = new ToyToken<interfaces.Factory<PlugTwo>>("PlugTwo");
const cc = new ToyToken<PlugTwo>("PlugTwo");
const DataSourceFactory = new FactoryToken<PlugTwo>("PlugTwo");

export interface FooOneBundle {
    aa: ToyToken<PlugTwo>,
    bb: ToyToken<interfaces.Factory<PlugTwo>>
}

export function FooOneToyMixin(lastMixin: TokenBundleConstructor<any>): TokenBundleConstructor<any> {
    return class FooOneToyBundle extends lastMixin implements FooOneBundle {
        aa = aa;
        bb = bb;
        cc = cc;
        DataSourceFactory = DataSourceFactory
    };
}
