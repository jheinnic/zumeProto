/**
 * Created by jheinnic on 4/28/17.
 */
import {Annotator} from "@jchptf/metajs/dist";
import {ContainerModule} from "inversify";
import {ModuleId} from "../di/module/ModuleId";
import {IModuleProvider} from "../di/module/IModuleProvider";
import {BModule} from "../di/registry/BModule";
import {ICommandLineParam} from "./cmdLine/ICommandLineParam";
import {PrecedenceAnnotation} from "./cmdLine/Precedence";

@BModule()
export class PlatformModule implements IModuleProvider {
    moduleId = new ModuleId<PlatformModule>(PlatformModule);

    provide(): ContainerModule {
        return new ContainerModule(
            (bind, unbind, rebind, foo) => {
                var CommonCommandLineParams;
                <ICommandLineParam>bind.to(CommonCommandLineParams).onActivation(
                    (context, params) => {
                        console.log(`Provide called: ${new Date().getTime()}`);
                        let paramsType = Annotator.getType(params);
                        for (let property of paramsType.properties) {
                            let annots = property.getAnnotations(PrecedenceAnnotation);
                            if (annots.length > 0) {
                                const cmdLine: string|undefined = annots[0].commandLine;
                                const envVar: string|undefined = annots[0].envVar;
                                const defaultValue: string|undefined = annots[0].defaultValue;
                                let actualValue = params[property.name];

                                if (false /*check Command Line TBD*/) {
                                    // TODO
                                    // actualValue = actualValue;
                                } else if (!!envVar && !!process.env[envVar]) {
                                    actualValue = process.env[envVar];
                                } else if (! actualValue) {
                                    actualValue = defaultValue;
                                } else {
                                    continue;
                                }

                                const handler = {
                                    apply: function (target, thisArgument, argumentsList) {
                                        console.log(`Adapting ${property.name}`);
                                        let result = target.apply(thisArgument, argumentsList);
                                        console.log(`Provide returned at: ${new Date().getTime()}`);
                                        console.log(`Original return: ${target}; Actual return: ${result}`);
                                        return result;
                                    }
                                };
                                params[property.name] = new Proxy(params[property.name], handler);
                            }
                        }
                    }
                );


            }
        );
    }
}
