import {ContainerModule, interfaces} from 'inversify';

export class GraphqlServiceModule extends ContainerModule
{
   new( bind: interfaces.Bind, unbind: interfaces.Unbind, isBound: interfaces.IsBound, rebind: interfaces.Rebind ) {
      bind<Katana>("Katana").to(Katana);
      bind<Shuriken>("Shuriken").to(Shuriken);
   }
}