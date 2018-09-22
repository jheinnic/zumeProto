///<reference path="../../../../dist/scripts/toy/toy4/dsFw/tokens.d.ts"/>
/**
 * Created by jheinnic on 5/3/17.
 */

import {TokenBundleConstructor} from "../../../../scripts";
import {ModelRepositoryFactory} from "./ModelRepositoryFactory";
import {DataSourceFactory} from "./DataSourceFactory";
import {ToyToken} from "../Toy";
import {ITokenBundle} from "../../../di/injection/ITokenBundle";

export interface DsFwBundle extends ITokenBundle<ToyToken<any>> {
    readonly DataSourceFactory: ToyToken<DataSourceFactory>;
    readonly ModelRepositoryFactory: ToyToken<ModelRepositoryFactory>;
}

const dsf = new ToyToken<DataSourceFactory>("DataSourceFactory");
const mrf = new ToyToken<ModelRepositoryFactory>("ModelRepositoryFactory");

export function DsFwFactoryMixin(lastMixin: TokenBundleConstructor<any>): TokenBundleConstructor<DsFwBundle> {
    return class DsFwFactoryBundle extends lastMixin implements DsFwBundle {
        readonly DataSourceFactory = dsf;
        readonly ModelRepositoryFactory = mrf;
    };
}
