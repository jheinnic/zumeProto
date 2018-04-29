//
// TypeScript Support Utilities
//

/**
 * Legacy support function for TypeScript Mixins.  Deprecated by the MixinConstructor<T> facility
 * as documented in release notes for TypeScript 2.2.
 *
 * @param derivedCtor
 * @param baseCtors
 */
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}
