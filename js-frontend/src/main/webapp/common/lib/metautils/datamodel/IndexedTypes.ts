//
// TypeScript Support Utilities
//

// Building on standard library....

import {IBuilder, Instance} from 'fluent-interface-builder';

export type Keys<T> = keyof T;
export type KeyMap<T> = { [P in Keys<T>]: Keys<T> }
export type KeyAsValue<T> = { [P in Keys<T>]: P }

export type Kernel<T, K extends Keys<T>> = Pick<T, K> & Partial<T>

export type Alt<P, O> = { [K in keyof P]: P[K] | O; }
export type OrNull<P> = Alt<P, null>;

export type Mapped<P, T> = { [K in keyof P]: T }
export type Flags<P> = Mapped<P, boolean>
export type Symbolic<P> = Mapped<P, symbol>
export type SelfSelect<P> = Mapped<P, P>

export type IdentityRecord<P extends string> = { [K in P]: K }
export type Paired<P extends string> = Record<P, P>

export type Some<P> = Readonly<P> | ReadonlyArray<P>;
export type DataValue = string | number | boolean | null | Date;
// export type MadeOfData<P extends string> = {
//   [K in P]: Some<DataValue> | Some<MadeOfData<any>>;
//   }
export type MadeOfData<P> = {
  [K in keyof P]: Some<DataValue> | Some<MadeOfData<P[K]>>;
  }

// Function-oriented indexed types that produce a builder API that is defined
// by the names and types of a data object's properties.  Each property maps
// to a builder method by the same name that accepts an arguments of the
// property's corresponding type.
export type Functions<I, O = I, P extends string = Keys<I>> = {
  [K in P]: (input: I) => O;
};
export type Chain<I, P = Keys<I>> = {
  [K in Keys<I> & P]: (input: I[K]) => I[K]
};
export type Reduce<I, A = I, P = Keys<I> & Keys<A>> = {
  [K in Keys<I> & Keys<A> & P]: (acc: A[K], input: I[K]) => A[K]
};
export type RecordTx<I, O = I, P = Keys<I>> = {
  [K in Keys<I> & P]: (input: I[K]) => O
};
export type Fluent<I, P = Keys<I>> = {
  [K in Keys<I> & P]: (input: I[K]) => Fluent<I, P>
};
export type AugmentedFluent<I, A, P = Keys<I>> = {
  [K in Keys<I> & P]: (input: I[K]) => Fluent<I, P> & A
  };

// export type FluentWrapper<I, P = Keys<I>> = {
//   [K in Keys<I> & P]: (input: I[K]) => Fluent<I, P>
// } & Readonly<Instance<I>>;
//
// SelfFluent defines a derived type based on a core type of T.  By default, all properties of T are used
// in the derivation, but an optional third parameter, P, is provided to restrict the pattern to an
// enumerated subset of those properties.  For every included property of the base type, SelfFluent
// provides a method call with the same name and a single parameter matching the base property's type.
// The return value of each such method is the SelfFluent derived type itself, allowing method calls to
// be chained as per the defining characteristic of fluent style.
//
// The primary use case for this derived type is for the derivation of simple builder interfaces that
// mirrors an artifact's property setters.  The optional P argument is there to facilitate exclusion of
// read-only properties and non-property methods.
// export type SelfFluent<T, P = keyof T, I = SelfFluent<T, P, I>> = {
//   [K in (keyof T) & P]: (param: T[K]) => I
// };
//
// export type AutoBuilder<T, P = keyof T, I = SelfFluent<T, P, I>> = Builder<T, I>
// export type AutoBuilder<T> = IBuilder<T, SelfFluent<T> & Instance<T>>;


// PairMap defines an object of type I for every pair of properties from type T by defining an outer
// object using properties from T that are typed by a nested object that again uses properties from T,
// each of which is typed by I.  The common use case is for defining various qualities of a graph
// traversal algorithm, where each node in the graph has a corresponding property in some associated
// type, T, and I is a data structure describing something of interest about the edges of the graph.
// Examples are things like navigability, flow weights, or references to methods for calculating such
// traits at runtime.
//
// For directed graph edges, a convention should be declared as to whether source and target vertices
// correlate to the inner and outer objects or vice-versa.  If the graph is relatively sparse, but has
// a handful of nodes that are used as a majority of either inbound or outbound edges, then one of the
// two possible choices will involve a considerably smaller number of objects to encapsulate.
//
// Note that all the property types are optional.  For use cases involving complete graphs, consider
// defining the mandatory alternative.  See Kernel for ideas about a partial component use cases.
export type PairMap<T, I = T, P = keyof T, Q = P> = { [K1 in Keys<T> & P] : { [K2 in Keys<T> & Q] : I } };

export type Intersection<P, T> = { [K in ((keyof P) & (keyof T))] : P[K] | T[K] };
export type Union<P, T> = { [K in ((keyof P) | (keyof T))] : (P & T)[K] };

export type Nullable<P> = P | null;
export type Possible<P> = P | undefined;
export type Nixable<P> = P | null | undefined;

