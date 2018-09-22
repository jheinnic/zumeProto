import interfaces from 'inversify-binding-decorators/dts/interfaces/interfaces';
import { interfaces as inversifyInterfaces } from "inversify";

export class BlankProvideInSyntax<T> implements interfaces.ProvideInSyntax<T> {
   done(force?: boolean | undefined): (target: any) => any {
      throw new Error("Method not implemented.");
   }

   inSingletonScope(): interfaces.ProvideWhenOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   inTransientScope(): interfaces.ProvideWhenOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }
}

export class BlankProvideWhenSyntax<T> implements interfaces.ProvideWhenSyntax<T> {
   when(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenTargetNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenTargetTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenInjectedInto(parent: string | Function): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenParentNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenParentTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorIs(ancestor: string | Function): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorIs(ancestor: string | Function): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   done(force?: boolean | undefined): (target: any) => any {
      throw new Error("Method not implemented.");
   }

}

export class BlankProvideOnSyntax<T> implements interfaces.ProvideOnSyntax<T> {
   onActivation(fn: (context: inversifyInterfaces.Context, injectable: T) => T): interfaces.ProvideWhenSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   done(force?: boolean | undefined): (target: any) => any {
      throw new Error("Method not implemented.");
   }

}

export class BlankWhenOnSyntax<T> implements interfaces.ProvideWhenOnSyntax<T> {
   when(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenTargetNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenTargetTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenInjectedInto(parent: string | Function): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenParentNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenParentTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorIs(ancestor: string | Function): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorIs(ancestor: string | Function): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   done(force?: boolean | undefined): (target: any) => any {
      throw new Error("Method not implemented.");
   }

   onActivation(fn: (context: inversifyInterfaces.Context, injectable: T) => T): interfaces.ProvideWhenSyntax<T>
   {
      throw new Error("Method not implemented.");
   }
}

export class BlankProvideInWhenOnSyntax<T> implements interfaces.ProvideInWhenOnSyntax<T> {
   inSingletonScope(): interfaces.ProvideWhenOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   inTransientScope(): interfaces.ProvideWhenOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   done(force?: boolean | undefined): (target: any) => any {
      throw new Error("Method not implemented.");
   }

   when(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenTargetNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenTargetTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenInjectedInto(parent: string | Function): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenParentNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenParentTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorIs(ancestor: string | Function): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorIs(ancestor: string | Function): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenAnyAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   whenNoAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>
   {
      throw new Error("Method not implemented.");
   }

   onActivation(fn: (context: inversifyInterfaces.Context, injectable: T) => T): interfaces.ProvideWhenSyntax<T>
   {
      throw new Error("Method not implemented.");
   }
}
