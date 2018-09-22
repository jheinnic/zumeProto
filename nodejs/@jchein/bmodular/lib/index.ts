// This is a library that declares a requirement that its consumers import reflect-metadata once near their
// application root.  It should not attempt to perform that import itself, even though it is a requirement,
// because it has no way of knowing where it will first be used, and whether it will be imported before any
// other reflect-metadata dependent library is first accessed.
//
// import "reflect-metadata";

export * from './di';
export * from './mixins';
export * from './datamodel';
export * from './decorators';
export * from './reflection';
export * from './validators';
