import {ContainerModule, interfaces} from 'inversify';
import {EagerBinder} from 'inversify-config-injection';
import {Connection, ConnectionOptions, createConnection} from 'typeorm';
import {TYPES} from './types';

export class TypeOrmContainerModule extends ContainerModule
{
   constructor(readonly instanceName: string)
   {
      super(
            (bind: interfaces.Bind) => {
               bind<Promise<Connection>>(TYPES.Connection)
                     .toDynamicValue(
                           (context: interfaces.Context) => {
                              const options: ConnectionOptions = context.container.getNamed(
                                    TYPES.ConnectionOptions,
                                    this.instanceName);
                              return createConnection(options);
                           }
                     )
                     .inSingletonScope()
                     .whenTargetNamed(this.instanceName);
               bind<interfaces.Provider<Connection>>(TYPES.Connection)
                     .toProvider<Connection>(
                           (context: interfaces.Context) => {
                              return () => {
                                 return context.container.getNamed(TYPES.ConnectionPromise, this.instanceName);
                              };
                           }
                     )
                     .whenTargetNamed(this.instanceName);
            }
      );
   }
}

export class TypeOrmConfigContainerModule extends ContainerModule
{
   constructor(readonly instanceName: string) {
      super(
            (bind: interfaces.Bind) => {
               new EagerBinder({})
               bind<Default
            }
      )
   }
}