/**
 * Created by jheinnic on 4/28/17.
 */
import {Annotator} from "@jchptf/metajs/dist";
import {Matches} from "class-validator";

export class PrecedenceAnnotation {
    @Matches(/^[a-z]:[a-z][a-zA-Z0-9]+[a-z0-9]$/)
    readonly commandLine?: string

    @Matches(/^[A-Z][A-Z0-9_]+[A-Z0-9]$/)
    readonly envVar?: string

    readonly configJq?: string;

    readonly defaultValue?: string
}

export const Precedence =
    Annotator.makeUniversalAnnotation(PrecedenceAnnotation) as (PropertyDecorator|ParameterDecorator);

