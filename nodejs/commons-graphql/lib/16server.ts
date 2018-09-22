import {Server as Hapi} from 'hapi';
import {graphiqlHapi, graphqlHapi} from 'apollo-server-hapi';
import {schema as myGraphQLSchema} from './schema';

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

console.log(myGraphQLSchema);

const HOST = 'localhost';
const PORT = 3000;

async function StartServer()
{
   const server = new Hapi({
      debug: {
         log: ["*"],
         request: ["*"]
      }
   });
   server.connection({
      host: HOST,
      port: PORT
   });

   await server.register({
      register: graphqlHapi.register,
      options: {
         path: '/graphql',
         graphqlOptions: {
            schema: myGraphQLSchema
         },
         route: {
            cors: true
         }
      }
   });
   /*
   await server.register({
      register: graphiqlHapi.register,
      options: {
         path: '/graphiql'
      }
   });
   */

   try {
      await server.start();
      console.log(`Server running at: ${server.info.uri}`);
   } catch (err) {
      console.error(`Error while starting server: ${err.message}`);
   }
}

StartServer();

