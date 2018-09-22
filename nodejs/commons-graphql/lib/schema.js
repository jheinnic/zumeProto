"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tools_1 = require("graphql-tools");
var fs_1 = require("fs");
var mocks_1 = require("./mocks");
var typeDefs = fs_1.readFileSync('./graphql/stt/player/schema.graphqls')
    .toString('utf8');
exports.schema = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs });
graphql_tools_1.addMockFunctionsToSchema({ schema: exports.schema, mocks: mocks_1.default });
exports.default = exports.schema;
