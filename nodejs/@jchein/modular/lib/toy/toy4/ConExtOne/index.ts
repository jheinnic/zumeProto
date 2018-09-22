/**
 * Created by jheinnic on 5/3/17.
 */

import {Tag, Type, TokenBundleConstructor} from "../../../../scripts";
import {BrokerConnectInfo} from "./BrokerConnectInfo";
import {ClusterExtension} from "./ClusterExtension";

export namespace Type {
    export interface Bundle {
        readonly BrokerConnectInfo: Type.Token<BrokerConnectInfo>;
        readonly ClusterExtension: Type.Token<ClusterExtension>;
    }
}

Type.Registry.addBundleMixin(
    (nextMixin: TokenBundleConstructor<Type.Bundle>) => {
        return class TypeTokenBundle extends nextMixin implements Type.Bundle {
            readonly BrokerConnectInfo = new Type.Token<BrokerConnectInfo>("BrokerConnectInfo");
            readonly ClusterExtension = new Type.Token<ClusterExtension>("ClusterExtension");
        }
    }
);

export namespace Tag {
    export interface Bundle {
        readonly BrokerConnectInfo: Tag.Token;
        readonly bb: Tag.Token;
    }
}

Tag.Registry.addBundleMixin(
    (nextMixin: TokenBundleConstructor<Tag.Bundle>) => {
        return class TagTokenBundle extends nextMixin implements Tag.Bundle {
            readonly BrokerConnectInfo = new Tag.Token("BrokerConnectInfo");
            readonly bb = new Tag.Token("bb");
        }
    }
);
