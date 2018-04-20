import {ContainerModule, interfaces} from 'inversify';
import {helpers} from 'inversify-vanillajs-helpers';
import {TYPES} from './types';
import {Server} from 'hapi';
import {HapiAugmenter, IHapiExtension} from '../interface';

helpers.annotate(Server, [TYPES.HapiServerOptions]);

export class HapiContainerModule extends ContainerModule
{
   constructor()
   {
      super(
            (bind: interfaces.Bind) => {
               bind<Server>(TYPES.HapiServer)
                     .to(Server)
                     .onActivation(
                           (context: interfaces.Context, injectable: Server) => {
                              const extensions: IHapiExtension[] = context.container.getAll(TYPES.HapiExtension);
                              let augmenter: HapiAugmenter = extensions.reduce(
                                    (augmenter: HapiAugmenter, next: IHapiExtension) => {
                                       return next.register(augmenter);
                                    }, (server: Server) => {});
                              augmenter(injectable);
                              return injectable;
                           }
                     );
               bind<IHapiExtension>(TYPES.HapiExtension).to(NoOpExtension);
            }
      );
   }
}

class NoOpExtension implements IHapiExtension {
   register(next: HapiAugmenter): HapiAugmenter
   {
      return (server: Server) => {
         next(server);
      };
   }

}