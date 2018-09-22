"use strict";
//
// TypeScript Support Utilities
//
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Legacy support function for TypeScript Mixins.  Deprecated by the MixinConstructor<T> facility
 * as documented in release notes for TypeScript 2.2.
 *
 * @param derivedCtor
 * @param baseCtors
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
exports.applyMixins = applyMixins;
//# sourceMappingURL=LegacyMixins.js.map