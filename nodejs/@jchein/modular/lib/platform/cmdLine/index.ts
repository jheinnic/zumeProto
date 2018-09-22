/**
 * Created by jheinnic on 4/28/17.
 */

import {InjectionToken} from '@jchptf/metajs/dist';
import {CommandLine} from './CommandLine';
import {ICommandLineParam} from './ICommandLineParam';
export {Precedence} from "./Precedence"

export type DITypeLabels = "CommandLine" | "ICommandLineParam"

export const DITypes: Record<DITypeLabels,InjectionToken<CommandLine|ICommandLineParam>> = {
    "CommandLine": new InjectionToken<CommandLine>("CommandLine"),
    "ICommandLineParam": new InjectionToken<ICommandLineParam>("ICommandLineParam")
};

export type DITagLabels = "ICommandLineParam"

export const DITags: Record<DITagLabels,InjectionToken<ICommandLineParam>> = {
    "ICommandLineParam": new InjectionToken<ICommandLineParam>("ICommandLineParam")
};

