// export interface NoArgConstructor<T = {}> { new (): T; }
export type NoArgConstructor<T = {}> = new () => T;

// export interface UpdateConstructor<T = {}> { new (previous?: Partial<T>, update?: Partial<T>): T; }
export type UpdateConstructor<T extends Object = {}> = new (basis?: Partial<T>, deltas?: Partial<T>) => T;

// export interface PartialConstructor<T = {}> { new (state?: Partial<T>): T; }
export type PartialConstructor<T = {}> = new (state?: Partial<T>) => T;

export type MixinConstructor<T extends Object = {}> = new(...args: any[]) => T;

// Named signature for a method that takes a ModelBuilder and uses it to define
// how a desired object is to be constructed.
export type Director<TI> = (builder: TI) => void;

// Named signature for a method that takes a Director, calls it with a
// ModelBuilder matching its signature requirements, and uses the work the
// Director does on that ModelBuilder to return an instance of what the
// Director described to caller.
export type BuildMethod<T, TI> = (director: Director<TI>) => T;
// export type CopyMethod<T, TI> = (director: Director<TI>) => T;
