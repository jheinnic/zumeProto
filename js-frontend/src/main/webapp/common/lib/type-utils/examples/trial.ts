import {Builder, Instance} from 'fluent-interface-builder';
import {Chain, Keys} from '../../metautils/datamodel/IndexedTypes';

// export interface Instance<T>
// {
//   value: T;
// }
//
// export interface Ctor<T, TI extends Instance<T>>
// {
//   new (value: T): TI;
// }
//
// export type Cascadable<T> = (...args: any[]) => (ctx: T) => void;
// export type Chainable<T> = (...args: any[]) => (ctx: T) => T;
// export type Unwrappable<T, U> = (...args: any[]) => (ctx: T) => U;
//
// export interface IBuilder<T, TI extends Instance<T>>
// {
//   value: Ctor<T, TI>;
//   cascade: (name: string, func: Cascadable<T>) => IBuilder<T, TI>;
//   chain: (name: string, func: Chainable<T>) => IBuilder<T, TI>;
//   unwrap: <U>(name: string, func: Unwrappable<T, U>) => IBuilder<T, TI>;
// }
//
// export declare class Builder<T, TI extends Instance<T>> implements IBuilder<T, TI>
// {
//   value: Ctor<T, TI>;
//
//   constructor(value?: Ctor<T, TI>);
//
//   cascade(name: string, func: Cascadable<T>): IBuilder<T, TI>;
//
//   chain(name: string, func: Chainable<T>): IBuilder<T, TI>;
//
//   unwrap<U>(name: string, func: Unwrappable<T, U>): IBuilder<T, TI>;
// }
class NoImplementationError extends Error
{
}

/*
class UrlBuilder
{
  public value: UrlItem;

  constructor(_value: UrlItem)
  {
    this.value = _value;
  }

  scheme(scheme: string): UrlBuilder { throw NoImplementationError }
  address(address: string): UrlBuilder;
  port(port: number): UrlBuilder;
  toUrl(): UrlItem;
}
*/
interface UrlBuilder extends Instance<UrlItem>
{
  scheme(scheme: string): UrlBuilder;

  address(address: string): UrlBuilder;

  port(port: number): UrlBuilder;

  toUrl(): UrlItem;
}

class UrlItem
{
  scheme: string;

  address: string;

  port: any;

  constructor(value?: Partial<UrlItem>)
  {
    Object.assign(this, value);
  }
}

const AUB = class implements UrlBuilder
{
  value: UrlItem;

  constructor(item?: Partial<UrlItem>)
  {
    this.value = Object.assign(new UrlItem(), item);
  }

  scheme(scheme: string): UrlBuilder
  {
    throw new Error('Method not implemented.');
  }

  address(address: string): UrlBuilder
  {
    throw new Error('Method not implemented.');
  }

  port(port: number): UrlBuilder
  {
    throw new Error('Method not implemented.');
  }

  toUrl(): UrlItem
  {
    throw new Error('Method not implemented.');
  }
};

const AbstractUrlBuilder = new Builder<UrlItem, UrlBuilder>(AUB)
  .cascade('scheme', (scheme) => (url) => { url.scheme = scheme; })
  .cascade('address', (address) => (url) => { url.address = address; })
  .cascade('port', (port) => (url) => { url.port = port; })
  .unwrap('toUrl', () => (url) => { return new UrlItem(url); })
  .value;

export class FooUrlBuilder extends AbstractUrlBuilder
{
  constructor(_value?: Partial<UrlItem>)
  {
    super(Object.assign(new UrlItem(), _value));
  }
}

const localhost = new FooUrlBuilder()
  .scheme('http')
  .address('127.0.0.1')
  .port(80)
  .toUrl();

console.log(localhost);

const localhost2 = new FooUrlBuilder({
  scheme: null,
  address: null,
  port: null
})
  .scheme('http')
  .address('127.0.0.1')
  .port(80)
  .toUrl();

console.log(localhost2);
console.log(new FooUrlBuilder(localhost2).toUrl());

const localhost3 = new FooUrlBuilder({
  scheme: 'https',
  port: 80
})
  .scheme('http')
  .address('127.0.0.1')
  .toUrl();

console.log(localhost3);

type Foo<T> = (a: number, b: string) => T;

const bar: Foo<boolean> = (a: number, b: string) => { return true; }
bar(1, 'f');

interface FooBar
{
  a: Foo<boolean>;
  b: Foo<string>;
}

const m: Chain<FooBarImpl> = {
  a: (input: (a: number, b: string) => boolean) => { return (a2: number, b2: string) => { return false; }; },
  b: (input: (a: number, b: string) => string) => { return (a2: number, b2: string) => { return 'false'; }; },
};

const m2: Chain<FooBarImpl, string> = {
  a: (input: (a: number, b: string) => boolean) => { return input.arguments + 'a'; },
  b: (input: (a: number, b: string) => string) => { return 'b'; }
};

class FooBarImpl implements FooBar
{
  private readonly food = 'food';

  a(a: number, b: string) {
    return true;
  };

  b(a: number, b: string)
  {
    return this.food;
  }
}

// type Fluent<Self extends Fluent<Self>> = {
//   [K in (keyof Self)]: ((...args: any[]) => Self) | (() => string)
// } & { unwrap: () => string };
type Fluent<Self extends Fluent<Self>> = {
  [K in Keys<Self>]: (...args: any[]) => Self
};
type FluentWrapper<Item, Base extends Fluent<Base>> = Base & { unwrap: () => Item };

interface FBuilder {
  one(input: string): FBuilder;
  two(input: string): FBuilder;
}

class FBuilderImpl implements FBuilder {
  public one(input: string): FBuilder
  {
    return undefined;
  }

  public two(input: string): FBuilder
  {
    return undefined;
  }

  public unwrap(): string {
    return 'unwrap';
  }
}

let a1: Fluent<FBuilder>;
let a2: FluentWrapper<string, FBuilder>;
const b1: FBuilderImpl = new FBuilderImpl();
const b2: FBuilder = b1;
a1 = b1;
a1 = b2;
a2 = b1;
// a2 = b2;
