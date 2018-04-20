import {IResolvers} from './i_resolvers';
import {ITypeDefinitions} from 'graphql-tools/dist/interfaces';
import {GraphQLSchema} from 'graphql';

export interface ISchemaFactory {
   makeExecutableSchema( schemaDef: ITypeDefinitions, resolvers: IResolvers ): GraphQLSchema
}