/**
 * Created by jheinnic on 4/30/17.
 */
import {ContainerModule} from "inversify";
import {TypeToken, TagToken, FactoryToken, IModuleProvider, TokenBundle, SymbolBundle, BModule, IInversifyFactory } from "../../../../scripts";
import {DataSourceFactory} from "./DataSourceFactory";

@BModule( [], [] )
export class DsFwOne implements IModuleProvider {
    // static moduleId = new ModuleId<DsFwOne>("dsFwOne");

    // @HasTokensFrom()
    readonly TYPES: TokenBundle<TypeToken<any>>;
    readonly TAGS: SymbolBundle<TagToken>;
    readonly FACTORIES: TokenBundle<FactoryToken<any>>;

    constructor() {
        FACTORIES =
    }
    provide(factory: IInversifyFactory): ContainerModule {
        return factory.createContainerModule(
            (bind, unbind, isBound, rebind ) => {
                bind(DataSourceFactory).to(DataSourceFactory).inSingletonScope();
            }
        );
    }

}
