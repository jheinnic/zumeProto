"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hapi = require("hapi");
var apollo_server_hapi_1 = require("apollo-server-hapi");
var graphql_tools_1 = require("graphql-tools");
// import {neo4jgraphql} from 'neo4j-graphql-js';
var neo4j_1 = require("neo4j");
var driver;
function context(headers, secrets) {
    if (!driver) {
        driver = neo4j_1.neo4j.driver("bolt://localhost:27687", neo4j_1.neo4j.auth.basic("neo4j", "portfolio"));
    }
    return { driver: driver };
}
var schema_1 = require("./schema");
/*
    type Movie {
        title: String!
        released: Int
        tagline: String
        actors: [Person]
    }
    
    type Person {
        name: String!
        born: Int
        movies: [Movie]
    }
`;
*/
/*
const store = new OperationStore(myGraphQLSchema);
store.put('query testquery{ testString }');
graphqlOptions = {
    schema: myGraphQLSchema,
    formatParams(params) {
        params['query'] = store.get(params.operationName);
        return params;
    },
};
*/
var myGraphQLSchema = graphql_tools_1.makeExecutableSchema({
    typeDefs: schema_1.schema,
    resolvers: schema_1.resolvers,
});
console.log(myGraphQLSchema);
var HOST = 'localhost';
var PORT = 3000;
var server = new hapi.Server({ debug: { log: ["*"], request: ["*"] } });
server.connection({
    host: HOST,
    port: PORT,
});
server.register({
    register: apollo_server_hapi_1.graphqlHapi,
    options: {
        path: '/graphql',
        graphqlOptions: {
            schema: myGraphQLSchema,
        },
        route: {
            cors: true
        }
    },
});
/* {
  register: graphiqlHapi,
  options: {
    path: '/graphiql'
  }
});*/
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log("Server running at: " + server.info.uri);
});
