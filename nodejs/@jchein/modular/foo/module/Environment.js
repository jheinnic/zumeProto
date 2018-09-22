"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by jheinnic on 4/26/17.
 */
const program = require("commander");
const path = require("path");
// import * as konfig from "konfig";
const process = require("process");
const jq = require("node-jq");
const class_transformer_1 = require("class-transformer");
const DEFAULT_RPC_HOST = "0.0.0.0";
const DEFAULT_RPC_PORT = 9393;
const DEFAULT_CONFIG_DIR = path.join(__dirname, "..", "..", "config");
class Environment {
    /**
     * TODO: Separate command line processing from config file parsing!!!
     */
    constructor() {
        this.rpcHost = DEFAULT_RPC_HOST;
        this.rpcPort = DEFAULT_RPC_PORT;
        this.configDir = DEFAULT_CONFIG_DIR;
        program.command("auctionCommands start")
            .option("-h", "--rpcHost", "Hostname to bind RPC endpoint, overrides AUCTION_RPC_HOST")
            .option("-p", "--rpcPort", "TCP port to bind RPC endpoint to, overrides AUCTION_RPC_PORT")
            .option("-c", "--configDir", "Root directory to find configuration in, overrides AUCTION_CONFIG_DIR")
            .action(function (options) {
            if (!!options.rpcHost) {
                this.rpcHost = options.rpcHost;
            }
            else if (!!process.env.AUCTION_RPC_HOST) {
                this.rpcHost = process.env.AUCTION_RPC_HOST;
            }
            if (!!options.this.rpcPort) {
                this.rpcPort = options.rpcPort;
            }
            else if (!!process.env.AUCTION_RPC_PORT) {
                this.rpcPort = process.env.AUCTION_RPC_PORT;
            }
            if (!!options.configDir) {
                this.configDir = options.configDir;
            }
            else if (!!process.env.AUCTION_CONFIG_DIR) {
                this.configDir = process.env.AUCTION_CONFIG_DIR;
            }
        });
        this.configObj = require("konfig")({ path: this.configDir });
    }
    getConfigBranch(jsonPath) {
        return new Promise((resolve, reject) => {
            jq.run(jsonPath, this.configObj, { input: 'json', output: 'json' });
        });
    }
    getConfigBranchAs(jsonPath, type) {
        return this.getConfigBranch(jsonPath)
            .then((value) => {
            if (!value) {
                return null;
            }
            if ((typeof value) !== "object") {
                return value;
            }
            return class_transformer_1.plainToClass(value, type);
        });
    }
}
exports.Environment = Environment;
//# sourceMappingURL=Environment.js.map