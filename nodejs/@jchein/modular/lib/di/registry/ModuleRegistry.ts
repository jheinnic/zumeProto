///<reference path="../../../dist/scripts/di/injection/Tag.d.ts"/>
///<reference path="../../../dist/scripts/di/registry/tokens.d.ts"/>

/**
 * Created by jheinnic on 4/26/17.
 */

// import Immutable = require("immutable");
import {Container, ContainerModule} from "inversify";
import {Constructor} from "reflect-helper/util";
import {Undefinable} from "@bstock/ts-utils/dist";
import {ModuleId, IModuleProvider} from "../module";
import {TagToken, TypeToken, FactoryToken, TokenBundle, ITokenBundle} from "../injection";
import {IRegistryAccess} from "./IRegistryAccess";
import {Tag, Type, Factory, PlatformTagTokenMixin, TypeTokenMixin, PlatformFactoryTokenMixin} from "../tokens"
import {LifecycleObserver} from "../middleware/LifecycleObserver";
import {TagRegistry} from "../injection/Tag";
import {FactoryRegistry} from "../injection/Factory";
import {TypeRegistry} from "../injection/Type";


class DIRegistry implements IRegistryAccess {
    readonly registryContainer: Container = new Container();

    private tagTokensCtor: Constructor<Tag.Bundle>;
    private typeTokensCtor: Constructor<Type.Bundle>;
    private factoryTokensCtor: Constructor<Factory.Bundle>;

    private tagTokens: Tag.Bundle;
    private typeTokens: Type.Bundle;
    private factoryTokens: Factory.Bundle;

    constructor() {
        this.registryContainer.applyMiddleware(LifecycleObserver);

        this.tagTokensCtor = PlatformTagTokenMixin(TagRegistry);
        this.typeTokensCtor = TypeTokenMixin(TypeRegistry);
        this.factoryTokensCtor = FactoryTokenMixin(FactoryRegistry);

        this.tagTokens = new this.tagTokensCtor();
        this.typeTokens = new this.typeTokensCtor();
        this.factoryTokens = new this.factoryTokensCtor();
    }
    /**
     * Return a registered ContainerModule, given its ModuleId.  The module may or may not have been loaded, and it
     * must already have been registered.
     *

     * @returns {IModuleProvider}
     */
    getModuleById(moduleId: ModuleId<any>): Undefinable<ContainerModule> {
        return this.registryContainer.getTagged<ContainerModule>(
            this.typeTokens.ContainerModule,
            this.tagTokens.module,
            moduleId);
    }

    addModuleProvider<T extends IModuleProvider>(moduleId: ModuleId<T>, provider: Constructor<T>): void {
        this.registryContainer.bind<IModuleProvider>(Type.Registry.getLatest().IModuleProvider)
            .to(provider)
            .inSingletonScope()
            .whenTargetTagged(tagTokens.moduleId, moduleId);
        this.registryContainer.bind<ContainerModule>(typeTokens.ContainerModule)
            .toDynamicValue(context => {
                let moduleProvider: IModuleProvider =
                    context.container.getTagged(
                        typeTokens.IModuleProvider,
                        tagTokens.moduleId, moduleId);
                return moduleProvider.provide();
            })
            .inSingletonScope()
            .whenTargetTagged(tagTokens.moduleId, moduleId);

        console.log(`BModule injected: ${new Date().getTime()}`);
    }
}

export const moduleCatalog: IRegistryAccess = new DIRegistry();

    // const registry: DIRegistry = new DIRegistry();
    //
    // constructor() {
    //     this.registryContainer = new Container();
    //
    //     // Augment the implemented provider() method to ensure that all required dependencies have been loaded into
    //     // the container
    //     const fluentProvideDecorator = makeFluentProvideDecorator(this.registryContainer);
    //
    //     this._bModuleDecorator = (moduleId: ModuleId, dependsOn?: ModuleId[]) => {
    //         fluentProvideDecorator(typeTokens.ContainerModule)
    //             .to
    //         return fluentProvideDecorator(typeTokens.IModuleProvider)
    //             .inSingletonScope()
    //             .whenTargetTagged("moduleId", moduleId)
    //             .onActivation((context, module) => {
    //                 if( !!dependsOn && (dependsOn.length > 0)) {
    //                     let handler = {
    //                         catalog: this,
    //                         apply: function (target, thisArgument, argumentsList) {
    //                             console.log(`Provide called: ${new Date().getTime()}`);
    //
    //                             for (let nextDependant of dependsOn) {
    //                                 // Ignore return value.  False on repeated load is just as fine as true on first.
    //                                 // TODO: Consider error handling, especially w.r.t. optional dependencies.
    //                                 handler.catalog.currentApplication.load(nextDependant);
    //                             }
    //                             console.log(`Dependencies loaded: ${new Date().getTime()}`);
    //
    //                             let result = target.apply(thisArgument, argumentsList);
    //                             console.log(`Provide returned: ${new Date().getTime()}`);
    //                             return result;
    //                         }
    //                     };
    //                     module.provide = new Proxy(module.provide, handler);
    //                 }
    //
    //                 return module;
    //             });
    //     };
    // }




