import {ToyToken} from "../Toy";
import {ModelRepositoryFactory} from "./ModelRepositoryFactory";
import {DataSourceFactory} from "./DataSourceFactory";
/**
 * Created by jheinnic on 5/3/17.
 */


export declare namespace Toy {
    export interface Bundle {
        readonly DataSourceFactory: ToyToken<DataSourceFactory>;
        readonly ModelRepositoryFactory: ToyToken<ModelRepositoryFactory>;
    }
}
