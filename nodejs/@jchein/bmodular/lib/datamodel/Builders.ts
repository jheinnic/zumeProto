import {Builder, Ctor, Instance} from 'fluent-interface-builder';
import {AugmentedFluent, Fluent, KeyAsValue, Keys} from './IndexedTypes';
import {BuildMethod, Director, UpdateConstructor} from './CallSignatures';

// Marker interface that augments a collection of methods that provide
// construction semantics with an additional method to perform the described
// construction.
export interface Wrapper<T> extends Readonly<Instance<T>>
{
  // readonly value: T;
  unwrap(): T;
}

// Helpers function for that creates unwrap method implementations.
export function unwrapHelper<T>(): (T: T) => T
{
  return (self: T) => {
    return self;
  };
}

// Marker interface for any collection of methods that provide construction
// semantics for an immutable data model object.  This library contains utility
// classes that facilitate using such an interface to drive the cloning and
// construction of immutable artifacts with a fluent coding style.
// export interface ModelBuilder<T> { }
export type FluentBuilder<TI extends FluentBuilder<TI>> = {
  [K in Keys<TI>]: (...args: any[]) => TI
  };

export type FluentBuilderWrapper<T, TI extends FluentBuilder<TI>> = TI & Wrapper<T>

// type AutoFluentBuilderWrapper<T> = Fluent<T, Fluent<T> & Wrapper<T>> & Wrapper<T>
export type AutoFluentBuilderWrapper<T> = FluentBuilderWrapper<T, Fluent<T>>


// Helper function that implements the recurring pattern of implementing a
// builder method that:
// 1)  Accepts a Director for some ModelBuilder interface
// 2)  Constructs a Wrapper that also implements ModelBuilder interface
// 3)  Invokes Director with constructed Wrapper as its ModelBuilder argument
// 4)  Uses Wrapper's additional unwrap() method to return constructed object
//     to caller.
//
// This helper needs two arguments
// -- A preconfigured Builder from fluent-interface-builder that has been
//    configured to produce Wrappers that extend the required ModelBuilder API.
// -- A class the provided Builder is used to construct with a No-Argument
//    constructor.
export function buildMethodFactory<T, TI extends FluentBuilder<TI>, TIW extends FluentBuilderWrapper<T, TI>>(
  wrapperCtor: Ctor<T, TIW>,
  ctor: UpdateConstructor<T>): BuildMethod<T, TI>
{
  return function (director: Director<TI>) {
    const wrapper: TIW = new wrapperCtor(new ctor());
    director(wrapper);
    return wrapper.unwrap();
  };
}

export function reflectiveBuildMethodFactory<T>(
  wrapperCtor: Ctor<T, AutoFluentBuilderWrapper<T>>, ctor: UpdateConstructor<T>
) {
  return buildMethodFactory<T, Fluent<T>, AutoFluentBuilderWrapper<T>>(wrapperCtor, ctor);
}

export function copyMethodFactory<T, TI extends FluentBuilder<TI>, TIW extends FluentBuilderWrapper<T, TI>>(
  wrapperCtor: Ctor<T, TIW>, ctor: UpdateConstructor<T>): BuildMethod<T, TI>
{
  return function (this: T, director: Director<TI>) {
    const wrapper: TIW = new wrapperCtor(new ctor(this));
    director(wrapper);
    return wrapper.unwrap();
  };
}

export function reflectiveCopyMethodFactory<T>(
  wrapperCtor: Ctor<T, AutoFluentBuilderWrapper<T>>, ctor: UpdateConstructor<T>
) {
  return copyMethodFactory<T, Fluent<T>, AutoFluentBuilderWrapper<T>>(wrapperCtor, ctor);
}
// Shorthand variant of the more accurate long descriptive type name
export type DataBuilderCtor<T> = Ctor<T, AutoFluentBuilderWrapper<T>>

export function altDeriveDataBuilder<T>(sample: KeyAsValue<T>): DataBuilderCtor<T>
{
  let retVal = new Builder<T, AutoFluentBuilderWrapper<T>>();

  for (const key in sample) {
    if (key !== 'unwrap') {
      retVal = retVal.cascade(
        key,
        (value) => (context: Partial<T>) => {
          const tempVal: Partial<T> = {};
          tempVal[key] = value;
          Object.assign(
            context,
            tempVal);
        })
    }
  }

  return retVal.unwrap(
    'unwrap',
    unwrapHelper).value;
}

export function deriveDataBuilder<T>(sample: Keys<T>[]): DataBuilderCtor<T>
{
  let retVal = new Builder<T, AutoFluentBuilderWrapper<T>>();

  sample.forEach(
    (key: Keys<T>) => {
      if (key !== 'unwrap') {
        retVal = retVal.cascade(
          key,
          (value) => (context: Partial<T>) => {
            const tempVal: Partial<T> = {};
            tempVal[key] = value;
            Object.assign(
              context,
              tempVal);
          })
      }
    }
  );

  return retVal.unwrap(
    'unwrap',
    unwrapHelper).value;
}

