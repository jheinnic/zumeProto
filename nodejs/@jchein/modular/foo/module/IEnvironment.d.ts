/**
 * Created by jheinnic on 4/26/17.
 */
import { ClassType } from "class-transformer/ClassTransformer/ClassType";
export interface IEnvironment {
    getConfigBranch(jsonPath: string): Promise<any | any[]>;
    getConfigBranchAs<T>(jsonPath: string, type: ClassType<T>): Promise<T | T[]>;
}
