import { ClassType } from "class-transformer/ClassTransformer";
import { IEnvironment } from "./IEnvironment";
export declare class Environment implements IEnvironment {
    rpcHost: string;
    rpcPort: number;
    configDir: string;
    configObj: any;
    /**
     * TODO: Separate command line processing from config file parsing!!!
     */
    constructor();
    getConfigBranch(jsonPath: string): Promise<any | any[]>;
    getConfigBranchAs<T>(jsonPath: string, type: ClassType<T>): Promise<T | T[]>;
}
