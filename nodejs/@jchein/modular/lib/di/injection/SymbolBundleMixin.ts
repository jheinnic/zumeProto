import {SymbolBundleConstructor} from "./SymbolBundleConstructor";
import {ISymbolBundle} from "./ISymbolBundle";
/**
 * Created by jheinnic on 4/30/17.
 */
export interface SymbolBundleMixin<T extends Symbol, B extends ISymbolBundle<T>> {
    /**
     * A mixin for accumulating an interface populated with event type tokens.  Current TypeScript has some
     * issues with exchanging Mixins coherent.  One of the available workarounds is to use a Mixin type and
     * child input that share a common interface that suits the output and voth inputs.
     *
     * The ISymbolBundle interface returned by the various SymbolBundleConstructor algorithms all take
     * this into account for by describing the signature of every properry with an indexed config engine.
     *
     * @param Base The inout child data source
     * @return A
     */
    (Base: SymbolBundleConstructor<ISymbolBundle<T>>): SymbolBundleConstructor<B>;
}

