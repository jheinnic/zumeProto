/**
 * Created by jheinnic on 4/30/17.
 */
import {InjectionToken} from "@jchptf/metajs/dist";
import {MixinConstructor} from "@jchptf/ts-utils/dist";
import {ITokenBundle} from "./ITokenBundle";


// export interface TokenBundleMixin<T extends InjectionToken<any>, B extends ITokenBundle<T>> {
export interface TokenBundleMixin<T extends InjectionToken<any>, B extends InjectionToken<any>> {
    /**
     * A mixin for accumulating an interface populated with event type tokens.  Current TypeScript has some
     * issues with exchanging Mixins coherent.  One of the available workarounds is to use a Mixin type and
     * child input that share a common interface that suits the output and voth inputs.
     *
     * The ITokenBundle interface returned by the various TokenBundleConstructor algorithms all take
     * this into account for by describing the signature of every properry with an indexed config engine.
     *
     * @param Base The inout child data source
     * @return A
     */
    (Base:MixinConstructor<ITokenBundle<T>>): MixinConstructor<ITokenBundle<T|B>>;
}

