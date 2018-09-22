/**
 * Created by jheinnic on 4/26/17.
 */
import * as program from "commander";
import * as path from "path";
// import * as konfig from "konfig";
import * as process from "process";
import * as jq from "node-jq";
import {plainToClass} from "class-transformer";
import {ClassType} from "class-transformer/ClassTransformer";
import {IEnvironment} from "./IEnvironment";

const DEFAULT_RPC_HOST: string = "0.0.0.0";
const DEFAULT_RPC_PORT: number = 9393;
const DEFAULT_CONFIG_DIR: string = path.join(__dirname, "..", "config");

export class Environment implements IEnvironment {

    rpcHost: string = DEFAULT_RPC_HOST;
    rpcPort: number = DEFAULT_RPC_PORT;
    configDir: string = DEFAULT_CONFIG_DIR;
    configObj: any;

    /**
     * TODO: Separate command line processing from config file parsing!!!
     */
    constructor() {
        program.command("auctionCommands start")
            .option("-h", "--rpcHost", "Hostname to bind RPC endpoint, overrides AUCTION_RPC_HOST")
            .option("-p", "--rpcPort", "TCP port to bind RPC endpoint to, overrides AUCTION_RPC_PORT")
            .option("-c", "--configDir", "Root directory to find configuration in, overrides AUCTION_CONFIG_DIR")
            .action(function (options) {
                if (!!options.rpcHost) {
                    this.rpcHost = options.rpcHost;
                } else if (!!process.env.AUCTION_RPC_HOST) {
                    this.rpcHost = process.env.AUCTION_RPC_HOST;
                }

                if (!!options.this.rpcPort) {
                    this.rpcPort = options.rpcPort;
                } else if (!!process.env.AUCTION_RPC_PORT) {
                    this.rpcPort = process.env.AUCTION_RPC_PORT;
                }

                if (!!options.configDir) {
                    this.configDir = options.configDir;
                } else if (!!process.env.AUCTION_CONFIG_DIR) {
                    this.configDir = process.env.AUCTION_CONFIG_DIR;
                }
            });

        this.configObj = require("konfig")({path: this.configDir});
    }

    getConfigBranch(jsonPath: string): Promise<any|any[]> {
        return new Promise((resolve, reject) => {
            jq.run(jsonPath, this.configObj, {input: 'json', output: 'json'});
        });
    }

    getConfigBranchAs<T>(jsonPath: string, type: ClassType<T>): Promise<T|T[]> {
        return this.getConfigBranch(jsonPath)
            .then((value: any) => {
                if (!value) {
                    return null;
                }

                if ((typeof value) !== "object") {
                    return <T|T[]> value;
                }

                return <T|T[]> plainToClass(value, type);
            });
    }
}

