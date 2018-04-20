"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fluent_interface_builder_1 = require("fluent-interface-builder");
var hapi_1 = require("hapi");
var HapiServerBuilder = /** @class */ (function () {
    function HapiServerBuilder() {
        this.value = {
            options: {},
            config: function (server) { }
        };
    }
    HapiServerBuilder.prototype.host = function (host) {
        throw new Error('Method not implemented.');
    };
    HapiServerBuilder.prototype.port = function (port) {
        throw new Error('Method not implemented.');
    };
    HapiServerBuilder.prototype.address = function (address) {
        throw new Error('Method not implemented.');
    };
    HapiServerBuilder.prototype.registerPlugin = function (plugin, pluginOptions, serverOptions) {
        throw new Error('Method not implemented.');
    };
    HapiServerBuilder.prototype.unwrap = function () {
        throw new Error('Method not implemented.');
    };
    return HapiServerBuilder;
}());
new fluent_interface_builder_1.Builder(HapiServerBuilder)
    .cascade('address', function (address) { return function (server) {
    server.options.address = address;
}; })
    .cascade('host', function (host) { return function (server) {
    server.options.host = host;
}; })
    .cascade('port', function (port) { return function (server) {
    server.options.port = port;
}; })
    .cascade('registerPlugin', function (plugin, pluginOptions, serverOptions) { return function (builderOptions) {
    var next = builderOptions.config;
    var pluginObject = {
        plugin: plugin,
        options: pluginOptions
    };
    builderOptions.config = function (server) {
        server.register(pluginObject, serverOptions);
        next(server);
    };
}; })
    .unwrap('unwrap', function () { return function (builderOptions) {
    var retVal = new hapi_1.Server(builderOptions.options);
    builderOptions.config(retVal);
    return retVal;
}; });
var HapiServerFactory = /** @class */ (function () {
    function HapiServerFactory() {
    }
    HapiServerFactory.prototype.makeServer = function (director) {
        var builder = new this.HapiServerBuilder();
    };
    return HapiServerFactory;
}());
exports.HapiServerFactory = HapiServerFactory;
//# sourceMappingURL=hapi_server_factory.js.map