import {decorate, injectable, interfaces as inversifyInterfaces, METADATA_KEY} from 'inversify';
import interfaces from 'inversify-binding-decorators/dts/interfaces/interfaces';
import ProvideWhenOnSyntax from 'inversify-binding-decorators/dts/syntax/provide_when_on_syntax';

// export interface IContainerModuleBuilder {
//    bind((serviceIdentifier: string | symbol | inversifyInterfaces.Newable<any> |
// inversifyInterfaces.Abstract<any>, director: Director<interfaces.ProvideInWhenOnSyntax<any>>) }

export class FluentContainerModuleBuilder<T> implements inversifyInterfaces.ContainerModule,
                                                        interfaces.ProvideDoneSyntax
   // interfaces.ProvideInWhenOnSyntax<T>
{
   public readonly registry: inversifyInterfaces.ContainerModuleCallBack;

   constructor(public readonly guid: string)
   {
      this.registry = (
            bind: inversifyInterfaces.Bind,
            unbind: inversifyInterfaces.Unbind,
            isBound: inversifyInterfaces.IsBound,
            rebind: inversifyInterfaces.Rebind): void => { }
   }

   makeNextIn(): ModuleProviderInSyntaxBuilder<T>
   {
      return new ModuleProviderInSyntaxBuilder<T>(this);
   }

   makeNextWhen(): ModuleProviderWhenSyntaxBuilder<T>
   {
      return new ModuleProviderWhenSyntaxBuilder<T>(this);
   }

   makeNextOn(): ModuleProviderOnSyntaxBuilder<T>
   {
      return new ModuleProviderOnSyntaxBuilder<T>(this);
   }

   public done(force?: boolean): (target: any) => any
   {
      const that = this;
      return function (target: any) {

         const isAlreadyDecorated = Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target);
         const redecorateWithInject = force === true;

         if (redecorateWithInject === true && isAlreadyDecorated === false) {
            decorate(injectable(), target);
         } else if (redecorateWithInject === true && isAlreadyDecorated === true) {
            // Do nothing
         } else {
            try {
               decorate(injectable(), target);
            } catch (e) {
               throw new Error(
                     "Cannot apply @provideFluent decorator multiple times but is has been used " +
                     `multiple times in ${target.name} ` +
                     "Please use done(true) if you are trying to declare multiple bindings!"
               );
            }
         }

         // TODO: Account for this line!!
         // that._binding.implementationType = target;
         return target;
      };

   }
}

export class ModuleProviderInSyntaxBuilder<T> implements interfaces.ProvideInSyntax<T>
{
   _provideDoneSyntax;

   constructor(private readonly provideDoneSyntax: FluentContainerModuleBuilder<T>)
   {
      this._provideDoneSyntax = provideDoneSyntax;
   }

   public inSingletonScope(): interfaces.ProvideWhenOnSyntax<T>
   {
      // const mock = TypeMoq.Mock.ofInstance(() => new interfaces.ProvideWhenOnSyntax<T>())
      //       .returns(
      return new ProvideWhenOnSyntax<T>(
            this._provideDoneSyntax.makeNextWhen(),
            this._provideDoneSyntax.makeNextOn());
      // .object();
   }

   public inTransientScope(): interfaces.ProvideWhenOnSyntax<T>
   {
      // const prev = this._provideDoneSyntax.provideIn;
      // this._provideDoneSyntax.provideIn =
      //       (provideIn: interfaces.ProvideInSyntax): interfaces.ProvideWhenOnSyntax => {
      //       }
      return new ProvideWhenOnSyntax<T>(
            this._provideDoneSyntax.makeNextWhen(),
            this._provideDoneSyntax.makeNextOn());
   }

   public done(force?: boolean): (target: any) => any
   {
      throw Error('Not implemented yet');
   }
}

export class ModuleProviderWhenSyntaxBuilder<T> implements interfaces.ProvideWhenSyntax<T>
{
   _provideDoneSyntax;

   constructor(private readonly provideDoneSyntax: FluentContainerModuleBuilder<T>)
   {
      this._provideDoneSyntax = provideDoneSyntax;
   }

   public when(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenTargetNamed(name: string): interfaces.ProvideOnSyntax<T>;
   public whenTargetNamed(name: string): interfaces.ProvideOnSyntax<T>;
   public whenTargetNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenTargetTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
   public whenTargetTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
   public whenTargetTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenInjectedInto(parent: Function | string): interfaces.ProvideOnSyntax<T>;
   public whenInjectedInto(parent: Function | string): interfaces.ProvideOnSyntax<T>;
   public whenInjectedInto(parent: Function | string): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenParentNamed(name: string): interfaces.ProvideOnSyntax<T>;
   public whenParentNamed(name: string): interfaces.ProvideOnSyntax<T>;
   public whenParentNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenParentTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
   public whenParentTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
   public whenParentTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenAnyAncestorIs(ancestor: Function | string): interfaces.ProvideOnSyntax<T>;
   public whenAnyAncestorIs(ancestor: Function | string): interfaces.ProvideOnSyntax<T>;
   public whenAnyAncestorIs(ancestor: Function | string): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenNoAncestorIs(ancestor: Function | string): interfaces.ProvideOnSyntax<T>;
   public whenNoAncestorIs(ancestor: Function | string): interfaces.ProvideOnSyntax<T>;
   public whenNoAncestorIs(ancestor: Function | string): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenAnyAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>;
   public whenAnyAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>;
   public whenAnyAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenAnyAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
   public whenAnyAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
   public whenAnyAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenNoAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>;
   public whenNoAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>;
   public whenNoAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenNoAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
   public whenNoAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
   public whenNoAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenAnyAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>;
   public whenAnyAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>;
   public whenAnyAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public whenNoAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>;
   public whenNoAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>;
   public whenNoAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public done(force?: boolean): (target: any) => any
   {
      throw Error('Not implemented yet');
   }
}

export class ModuleProviderOnSyntaxBuilder<T> implements interfaces.ProvideOnSyntax<T>
{
   _provideDoneSyntax;

   constructor(private readonly provideDoneSyntax: FluentContainerModuleBuilder<T>)
   {
      this._provideDoneSyntax = provideDoneSyntax;
   }

   public onActivation(fn: (
         context: inversifyInterfaces.Context,
         injectable: T) => T): interfaces.ProvideWhenSyntax<T>;
   public onActivation(fn: (
         context: inversifyInterfaces.Context,
         injectable: T) => T): interfaces.ProvideWhenSyntax<T>;
   public onActivation(fn: (
         context: inversifyInterfaces.Context,
         injectable: T) => T): interfaces.ProvideWhenSyntax<T>
   {
      return this._provideDoneSyntax.makeNextOn();
   }

   public done(force?: boolean): (target: any) => any
   {
      throw Error('Not implemented yet');
   }
}