"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hapi_1 = require("hapi");
var apollo_server_hapi_1 = require("apollo-server-hapi");
var schema_1 = require("./schema");
var HOST = 'localhost';
var PORT = 3000;
function StartServer() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var server, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    server = new hapi_1.Server({
                        host: HOST,
                        port: PORT,
                    });
                    return [4 /*yield*/, server.register({
                            plugin: apollo_server_hapi_1.graphqlHapi,
                            options: {
                                path: '/graphql',
                                graphqlOptions: {
                                    schema: schema_1.schema,
                                },
                                route: {
                                    cors: true,
                                },
                            },
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, server.register({
                            plugin: apollo_server_hapi_1.graphiqlHapi,
                            options: {
                                path: '/graphiql',
                                graphiqlOptions: {
                                    endpointURL: '/graphql'
                                }
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, server.start()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log("Error while starting server: " + err_1.message);
                    return [3 /*break*/, 6];
                case 6:
                    console.log("Server running at: " + server.info.uri);
                    return [2 /*return*/];
            }
        });
    });
}
StartServer();
//# sourceMappingURL=server.js.map