/**
 * Created by jheinnic on 5/7/17.
 */
import {Annotator} from "@bstock/metajs/dist";
import {ModuleId} from "../module/ModuleId";
import {ITokenSuite} from "../injection/ITokenBundle";
import {moduleCatalog} from "./ModuleRegistry";

export declare class HasTokensFromAnnotation {
    bundle: ITokenBundle<any>
}

const attachAnnotation = Annotator.makeClassAnnotation(HasTokensFromAnnotation);

const handler = {
    apply: function (target, thisArgument, argumentsList) {
        console.log(`HasTokensFrom called: ${new Date().getTime()}`);
        console.log(target, thisArgument, argumentsList);
    }
};

export const HasTokensFrom = new Proxy(attachAnnotation, handler);
