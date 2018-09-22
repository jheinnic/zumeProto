/**
 * Created by jheinnic on 4/28/17.
 */
import {IsPositive} from "class-validator";
import {Annotator} from "@bstock/metajs/dist";

export class FixedLifecycleAnnotation {
    @IsPositive()
    orderPriority: number;

    autoStart: boolean;
}

export const FixedLifecycle = Annotator.makeClassAnnotation(FixedLifecycleAnnotation);
