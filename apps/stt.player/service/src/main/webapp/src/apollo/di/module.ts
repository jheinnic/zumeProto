import {ContainerModule, interfaces} from 'inversify';
import {makeExecutableSchema} from 'graphql-tools';
import {IExecutableSchemaDefinition} from 'graphql-tools/dist/Interfaces';
import {GraphQLSchema} from 'graphql';
import {TYPES} from '../di/types';
import {TYPES as HAPI_TYPES} from '../../hapi/di/types';
import {Server} from 'hapi';

export class ApolloContainerModule extends ContainerModule
{
   constructor()
   {
      super(
            (bind: interfaces.Bind) => {
               // bind<interfaces.Factory<GraphQLSchema>>(TYPES.ExecutableSchema)
               //       .toFactory<GraphQLSchema>((context: interfaces.Context) => {
               //          console.log(JSON.stringify(context));
               //          return makeExecutableSchema; });
               bind<GraphQLSchema>(TYPES.ExecutableSchema)
                     .toDynamicValue((context: interfaces.Context) => {
                        const def: IExecutableSchemaDefinition = context.container.get(TYPES.ExecutableSchemaDefinition);
                        return makeExecutableSchema(def);
                     });
               bind<Server>(TYPES.GraphQLMicroservice).toService(HAPI_TYPES.HapiServer);

            }
      );
   }
}