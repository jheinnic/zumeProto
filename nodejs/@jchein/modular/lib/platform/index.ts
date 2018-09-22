/**
 * Created by jheinnic on 4/28/17.
 */

import {DITypeLabels as CmdDITypeLabels} from "./cmdLine";
import {DITypes as CmdDITypes} from "./cmdLine";
import {DITagLabels as CmdDITagLabels} from "./cmdLine";
import {DITags as CmdDITags} from "./cmdLine";
import {Type} from "../di/injection/Type";
import {Tag} from "../di/injection/Tag";

export type DITypeLabels = CmdDITypeLabels;

export const DITypes: Record<DITypeLabels,Type.Token<any>> = { CmdDITypes };

export type DITagLabels = CmdDITagLabels;

export const DITags: Record<DITagLabels,Tag.Token> = { CmdDITags };

