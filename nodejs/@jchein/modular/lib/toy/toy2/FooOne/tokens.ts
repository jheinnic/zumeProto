/**
 * Created by jheinnic on 5/3/17.
 */
import {interfaces} from "inversify";
import {TokenBundleConstructor} from "../../../index";
import {PlugTwo} from "../../PlugTwo";
import {FactoryToken} from "../../../di/injection/Factory";

declare namespace Factory {
    export interface Bundle {
        aa: FactoryToken<PlugTwo>,
        bb: FactoryToken<interfaces.Factory<PlugTwo>>
    }
}

const aa = new FactoryToken<PlugTwo>("PlugTwo");
const bb = new FactoryToken<interfaces.Factory<PlugTwo>>("PlugTwo");
const cc = new FactoryToken<PlugTwo>("PlugTwo");
const DataSourceFactory = new FactoryToken<PlugTwo>("PlugTwo");

export function FooOneFactoryMixin(lastMixin: TokenBundleConstructor<any>): TokenBundleConstructor<any> {
    return class FooOneFactoryBundle extends lastMixin implements Factory.Bundle {
        aa = aa;
        bb = bb;
        cc = cc;
        DataSourceFactory = DataSourceFactory
    };
}
