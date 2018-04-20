import  * as hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';
import { makeExecutableSchema } from 'graphql-tools';


import {schema, resolvers} from './schema2';
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

