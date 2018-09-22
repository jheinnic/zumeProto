import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import {readFileSync} from 'fs';
import resolvers from './resolvers';
// import mocks from './mocks';

const typeDefs =
      readFileSync('./graphql/stt/player/schema.graphqls')
            .toString('utf8');

export const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;