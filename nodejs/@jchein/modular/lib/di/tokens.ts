///<reference path="injection/Type.ts"/>
/**
 * Created by jheinnic on 5/7/17.
 */
import {ContainerModule} from "inversify";
import {SymbolBundleConstructor, TokenBundleConstructor} from "./injection";
import {IInversifyFactory} from "./inversify";
import {IModuleProvider} from "./module";
import {FactoryBundle, FactoryBundleMixin} from "./injection/Factory";
import {TagBundle, TagBundleMixin, TagToken} from "./injection/Tag";
import {TypeBundle, TypeBundleMixin, TypeToken} from "./injection/Type";
import {MixinConstructor} from "@jchptf/ts-utils/dist";

//=======//
// Types //
//=======//

export interface PlatformTypeBundle extends TypeBundle
{
   readonly IModuleProvider: TypeToken<IModuleProvider>;
   readonly ContainerModule: TypeToken<ContainerModule>;
   readonly IInversifyFactory: TypeToken<IInversifyFactory>;
   readonly FactoryBundleMixin: TypeToken<FactoryBundleMixin>;
   readonly TypeBundleMixin: TypeToken<TypeBundleMixin>;
   readonly TagBundleMixin: TypeToken<TagBundleMixin>;
}

const imp = new TypeToken<IModuleProvider>("IModuleProvider");
const cm = new TypeToken<ContainerModule>("ContainerModule");
const realIVF = new TypeToken<IInversifyFactory>("IInversifyFactory");
const factb = new TypeToken<FactoryBundleMixin>("FactoryBundleMixin");
const typeb = new TypeToken<TypeBundleMixin>("TypeBundleMixin");
const tagb = new TypeToken<TagBundleMixin>("TagBundleMixin");

export function PlatformTypeTokenBundleMixin(lastBundleMixin: TokenBundleConstructor<TypeBundle>): TokenBundleConstructor<PlatformTypeBundle>
{
   return class TypeTokens extends lastBundleMixin implements PlatformTypeBundle
   {
      readonly IModuleProvider: TypeToken<IModuleProvider> = imp;

      readonly ContainerModule: TypeToken<ContainerModule> = cm;

      readonly IInversifyFactory: TypeToken<IInversifyFactory> = realIVF;

      readonly FactoryBundleMixin: TypeToken<FactoryBundleMixin> = factb;

      readonly TypeBundleMixin: TypeToken<TypeBundleMixin> = typeb;

      readonly TagBundleMixin: TypeToken<TagBundleMixin> = tagb;
   };
}

//======//
// Tags //
//======//

export interface PlatformTagBundle extends TagBundle
{
   readonly module: TagToken;
   readonly tagMixin: TagToken;
   readonly typeMixin: TagToken;
   readonly factoryMixin: TagToken;
}

const module = Symbol("module");
const tagMixin = Symbol("tagMixin");
const typeMixin = Symbol("typeMixin");
const factoryMixin = Symbol("factoryMixin");

export function PlatformTagTokenMixin(lastMixin: SymbolBundleConstructor<TagBundle>): SymbolBundleConstructor<PlatformTagBundle>
{
   return class PlatformTagTokens extends lastMixin implements PlatformTagBundle
   {
      readonly module: TagToken = module;

      readonly tagMixin: TagToken = tagMixin;

      readonly typeMixin: TagToken = typeMixin;

      readonly factoryMixin: TagToken = factoryMixin;
   };
}

//===========//
// Factories //
//===========//

export interface PlatformFactoryBundle
{

}

export function PlatformFactoryTokenMixin(lastMixin: MixinConstructor<FactoryBundle>): MixinConstructor<PlatformFactoryBundle>
{
   return class PlatformFactoryTokens extends lastMixin implements PlatformFactoryBundle
   {
   };
}



