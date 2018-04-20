import {Server} from 'hapi';
import {graphiqlHapi, graphqlHapi} from 'apollo-server-hapi';
import {schema as myGraphQLSchema} from './schema';

const HOST = 'localhost';
const PORT = 3000;

async function StartServer() {
   const server = new Server({
      host: HOST,
      port: PORT,
   });

   await server.register({
      plugin: graphqlHapi,
      options: {
         path: '/graphql',
         graphqlOptions: {
            schema: myGraphQLSchema,
         },
         route: {
            cors: true,
         },
      },
   });
   await server.register({
      plugin: graphiqlHapi,
      options: {
         path: '/graphiql',
         graphiqlOptions: {
            endpointURL: '/graphql'
         }
      }
   });

   try {
      await server.start();
   } catch (err) {
      console.log(`Error while starting server: ${err.message}`);
   }

   console.log(`Server running at: ${server.info.uri}`);
}

StartServer();
