import  * as hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';
import { makeExecutableSchema } from 'graphql-tools';
import {neo4jgraphql} from 'neo4j-graphql-js';
import {neo4j} from 'neo4j';

let driver;
 
function context(headers, secrets) {
  if (!driver) {
    driver = neo4j.driver("bolt://localhost:27687", neo4j.auth.basic("neo4j", "portfolio"))
  }
  return {driver};
}

import {schema, resolvers} from './schema';
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

const myGraphQLSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

console.log(myGraphQLSchema);

const HOST = 'localhost';
const PORT = 3000;
const server = new hapi.Server({ debug: { log: ["*"], request: ["*"] } });

server.connection({
    host: HOST,
    port: PORT,
});

server.register({
    register: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema: myGraphQLSchema,
        // context: context(request.headers, process.env)
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

server.start((err: any) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

