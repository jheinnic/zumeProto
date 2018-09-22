"use strict";
let process = require("process");
let fs = require('fs');

Object.defineProperty(exports, "__esModule", { value: true });
const ModuleCatalog_1 = require("./module/ModuleCatalog");
console.log("1");
var ModuleCatalog;
console.log("2");
let engine = ModuleCatalog_1.moduleCatalog.getApplication();
console.log("3");
engine.loadEnvironment();
console.log("4");
// engine.register(new FileModule());
// engine.register(new AuctionsCommandModule());
engine.start();
console.log("5");
//# sourceMappingURL=server3.js.map

setInterval(function() { }, 5000);//

var p = new Promise(() => {
        console.log("6");
        () => process.stdin.read();
        console.log("7")
    }).then(console.read)
    .then( () => process.stdin.read());

console.log("8");
