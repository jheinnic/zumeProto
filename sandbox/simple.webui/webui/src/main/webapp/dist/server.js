"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayIt = function () {
        console.log("Hello World!");
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
var helloWorld = new HelloWorld();
helloWorld.sayIt();
var client_1 = require("./client");
console.log(client_1.callExample());
//# sourceMappingURL=server.js.map