///<reference path='../../node_modules/immutable/dist/immutable.d.ts'/>
import * as Immutable from 'immutable';


//
// Generic Helper Methods
//

// const unwrapHelper = <T>(): (T)=>T => { return _.identity; };

export type Value = string | number | boolean;

export type Buildable<T> = {
  [K in keyof T]: Value | Buildable<any> | Immutable.List<Value> | Immutable.List<Buildable<any>>;
};

export abstract class BuildableImpl<Self extends Buildable<Self>> {
  constructor(previous: Partial<Self> = {}, delta: Partial<Self> = {}) {
    Object.assign(this, previous, delta);
  }
}

// // Marker interface for any collection of methods that provide construction semantics
// // for an immutable data model object.  This library contains utility classes that facilitate
// // using such an interface to drive the cloning and construction of immutable artifacts
// // with a fluent coding style.
// // export interface ModelBuilder<T> { }
//
// export type InstanceWrapper<T, M> = M & Instance<T>;
// export type InstanceWrapperBuilder<T, M> = IBuilder<T, InstanceWrapper<T, M>>;
// export type PartialWrapperBuilder<T, M extends Instance<T>> = IBuilder<Partial<T>, M>;
//
// export type FluentAdapter<T extends Buildable<T>> = { [K in keyof T]: (...params: any[]) => FluentAdapter<T> };
// export type FluentWrapper<T extends Buildable<T>> = InstanceWrapper<T, FluentAdapter<T>>;
//
// export type FluentWrapperBuilder<T extends Buildable<T>> = PartialWrapperBuilder<T, FluentWrapper<T>>;
// export type FluentWrapperCtor<T extends Buildable<T>> = Ctor<Partial<T>, FluentWrapper<T>>;
//
// // Named signature for a method that takes a Model Wrapper and uses it to define how a
// // desired object is to be constructed.
// export type Director<M> = (builder: M) => void;
//
// // Named signature for a method that takes a Director, calls it with a ModelBuilder
// // matching its signature requirements, and uses the work the Director does on that
// // ModelBuilder to return an instance of what the Director described to caller.
// export type BuildMethod<T, M> = (director: Director<M>) => T;
// export type ReflectiveBuildMethod<T> = BuildMethod<T, FluentAdapter<T>>
//
// export type CopyMethod<T, M> = (director: Director<M>) => T;
// export type ReflectiveCopyMethod<T> = CopyMethod<T, FluentAdapter<T>>
//
// // Marker interface that augments a collection of methods that provide construction
// // semantics with an additional method to perform the described construction.
// // export interface Wrapper<T, M extends ModelBuilder<T,M>> extends ModelBuilder<T,M> {
// //   unwrap(): T;
// // }
//
//
// export function unwrapHelper<T>(): (self: Partial<T>) => T { return (self: Partial<T>) => { return <T> self; }; }
//
// // Helper function that implements the recurring pattern of implementing a builder method
// // that:
// // 1)  Accepts a Director for some ModelBuilder interface
// // 2)  Constructs a Wrapper that also implements ModelBuilder interface
// // 3)  Invokes Director with constructed Wrapper as its ModelBuilder argument
// // 4)  Uses Wrapper's additional unwrap() method to return constructed object to caller.
// //
// // This helper needs two arguments
// // -- A preconfigured Builder from fluent-interface-builder that has been configured to
// //    produce Wrappers that extend the required ModelBuilder API.
// // -- A class the provided Builder is used to construct with a No-Argument constructor.
// export function buildMethodFactory<T, W extends Instance<T>>(
//   wrapperBuilder: Ctor<Partial<T>, W>, ctor: PartialConstructor<T>
// ): BuildMethod<T, W> {
//   return (director: Director<W>): T => {
//     const wrapper: W = new wrapperBuilder(new ctor({}));
//     director(wrapper);
//     return wrapper.value;
//   };
// }
//
// export function reflectiveBuildMethodFactory<T>(
//   builder: FluentWrapperCtor<T>, ctor: PartialConstructor<T>
// ): ReflectiveBuildMethod<T> {
//   return buildMethodFactory(builder, ctor);
// }
//
// export function oldCopyMethodFactory<T, M extends FluentAdapter<M>, W extends Instance<T> & M>(
//   self: T, wrapperBuilder: Builder<T, W>): BuildMethod<T, M> {
//   return function (director: Director<M>): T {
//     const wrapper: W = new wrapperBuilder.value(self);
//     director(wrapper);
//     return wrapper.value;
//   };
// }
//
// export function copyMethodFactory<T, W extends Instance<T>>(
//   wrapperBuilder: Ctor<Partial<T>, W>
// ): CopyMethod<T, W> {
//   return function (director: Director<W>): T {
//     const wrapper: W = new wrapperBuilder(this);
//     director(wrapper);
//     return wrapper.value;
//   };
// }
//
// export function copyMethod<T, W extends Instance<T>>(
//   self: T, wrapperBuilder: Ctor<Partial<T>, W>, director: Director<W>
// ): T {
//   const wrapper: W = new wrapperBuilder(self);
//   director(wrapper);
//   return wrapper.value;
// }
//
// export function reflectiveCopyMethodFactory<T>(
//   builder: FluentWrapperCtor<T>
// ): ReflectiveCopyMethod<T> {
//   return copyMethodFactory(builder);
// }
//
//
// type Keys<T> = keyof T;
//
// export function deriveFactoryWrapper<T extends Buildable<T>>(sample: Keys<T>[] = []): FluentWrapperCtor<T> {
//   let retVal: FluentWrapperBuilder<T> = new Builder<Partial<T>, FluentWrapper<T>>();
//
//   // let targetKeys: Keys<T>[];
//   // if (sample.length === 0) {
//   //   targetKeys = Object.keys(T);
//   // } else {
//   //   targetKeys = sample;
//   // }
//
//   sample.forEach((key: keyof T) => {
//     if (key !== 'unwrap') {
//       retVal = retVal.cascade(key,
//         (value) => (context: Partial<T>) => {
//           const tempVal = {} as Partial<T>;
//           tempVal[key] = value;
//           Object.assign(context, tempVal);
//         })
//     }
//   });
//
//   retVal.unwrap<T>('unwrap', unwrapHelper);
//
//   return retVal.value;
// }

