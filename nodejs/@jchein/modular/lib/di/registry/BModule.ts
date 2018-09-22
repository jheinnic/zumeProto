/**
 * Created by jheinnic on 4/26/17.
 */

import {Annotator} from "@bstock/metajs/dist";
import {ITokenBundle} from "../injection/ITokenBundle";
import {ModuleId} from "../module/ModuleId";
import {moduleCatalog} from "./ModuleRegistry";

export declare class BModuleAnnotation {
    // moduleId: ModuleId<any>;
    dependsOn: ReadonlyArray<string>;
    reqdTokenSuites: ReadonlyArray<ITokenBundle<any>>
}

const attachAnnotation = Annotator.makeClassAnnotation(BModuleAnnotation);

const handler = {
    apply: function (target, thisArgument, argumentsList) {
        console.log(`BModule called: ${new Date().getTime()}`);
        moduleCatalog.addModuleProvider(argumentsList[0], thisArgument);
        let result = target.apply(thisArgument, argumentsList);
        console.log(`Provide returned ${result} at ${new Date().getTime()}`);
        return result;
    }
};

export const BModule = new Proxy(attachAnnotation, handler);
