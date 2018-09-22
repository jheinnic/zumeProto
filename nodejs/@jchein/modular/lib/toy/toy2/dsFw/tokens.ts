/**
 * Created by jheinnic on 5/3/17.
 */

import {FactoryToken, TokenBundleConstructor} from "../../../../scripts";
import {ModelRepositoryFactory} from "./ModelRepositoryFactory";
import {DataSourceFactory} from "./DataSourceFactory";

declare namespace Factory {
    export interface Bundle {
        readonly DataSourceFactory: FactoryToken<DataSourceFactory>;
        readonly ModelRepositoryFactory: FactoryToken<ModelRepositoryFactory>;
    }
}

const dsf = new FactoryToken<DataSourceFactory>("DataSourceFactory");
const mrf = new FactoryToken<ModelRepositoryFactory>("ModelRepositoryFactory");

export function DsFwFactoryMixin(lastMixin: TokenBundleConstructor<any>): TokenBundleConstructor<any> {
    return class DsFwFactoryBundle extends lastMixin implements Factory.Bundle {
        readonly DataSourceFactory = dsf;
        readonly ModelRepositoryFactory = mrf;
    };
}
