/**
 * Created by jheinnic on 5/3/17.
 */
import {interfaces} from "inversify";
import {TokenBundleConstructor} from "../../../index";
import {PlugTwo} from "../../PlugTwo";
import {FactoryToken} from "../../../di/injection/Factory";
import {TypeToken} from "../../foo/TypeToken";
import {ICommandLineParam} from "./cmdLine/ICommandLineParam";
import {CommandLine} from "./cmdLine/CommandLine";

declare namespace Type {
    export interface Bundle {
        ICommandLineParam: TypeToken<ICommandLineParam>,
        CommandLine: TypeToken<CommandLine>
    }
}

const iclp = new TypeToken<ICommandLineParam>("ICommandLineParam");
const cmdl = new TypeToken<CommandLine>("CommandLine");

export function FooOneTypeMixin(lastMixin: TokenBundleConstructor<any>): TokenBundleConstructor<any> {
    return class FooOneTypeBundle extends lastMixin implements Type.Bundle {
        ICommandLineParam = iclp;
        CommandLine = cmdl
    };
}
