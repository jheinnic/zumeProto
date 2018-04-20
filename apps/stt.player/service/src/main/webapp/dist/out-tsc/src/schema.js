"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tools_1 = require("graphql-tools");
var fs_1 = require("fs");
var resolvers_1 = require("./resolvers");
// import mocks from './mocks';
var typeDefs = fs_1.readFileSync('./graphql/stt/player/schema.graphqls')
    .toString('utf8');
exports.schema = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers_1.default });
// addMockFunctionsToSchema({ schema, mocks });
exports.default = exports.schema;
//# sourceMappingURL=schema.js.map