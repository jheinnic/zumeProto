// import {FileModule} from "prettygoat-file-store";
// import ClusteredEngine from "../lib/prettygoat/cluster/engine/ClusteredReadEngine";
// import {AuctionsCommandModule} from "./modules/services/auction/auctions-commands.module";
import {IApplication} from "./di/registry/IApplication";
import {moduleCatalog} from "./di/registry/DIRegistry";

console.log("1");
var ModuleCatalog;
console.log("2");
let engine:IApplication = moduleCatalog.application;
console.log("3");
engine.loadEnvironment();
console.log("4");
// engine.register(new FileModule());
// engine.register(new AuctionsCommandModule());
engine.start();
console.log("5");
