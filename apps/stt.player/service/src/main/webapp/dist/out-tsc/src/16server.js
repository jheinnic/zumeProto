"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hapi_1 = require("hapi");
var apollo_server_hapi_1 = require("apollo-server-hapi");
var schema_1 = require("./schema");
/*
// import {neo4jgraphql} from 'neo4j-graphql-js';
import {neo4j} from 'neo4j';

let driver;

function context(headers, secrets)
{
   if (!driver) {
      driver = neo4j.driver("bolt://localhost:27687", neo4j.auth.basic("neo4j", "portfolio"))
   }
   return {driver};
}
*/
console.log(schema_1.schema);
var HOST = 'localhost';
var PORT = 3000;
function StartServer() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var server, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    server = new hapi_1.Server({
                        debug: {
                            log: ['*'],
                            request: ['*']
                        }
                    });
                    server.connection({
                        host: HOST,
                        port: PORT
                    });
                    return [4 /*yield*/, server.register({
                            register: apollo_server_hapi_1.graphqlHapi.register,
                            options: {
                                path: '/graphql',
                                graphqlOptions: {
                                    schema: schema_1.schema
                                },
                                route: {
                                    cors: true
                                }
                            }
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, server.start()];
                case 3:
                    _a.sent();
                    console.log("Server running at: " + server.info.uri);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error("Error while starting server: " + err_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
StartServer();
//# sourceMappingURL=16server.js.map