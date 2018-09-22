/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Type, isType} from './types';
import {global, stringify} from './pseudo_global';
import {PlatformReflectionCapabilities} from './platform_reflection_capabilities';
import {GetterFn, MethodFn, SetterFn} from './types';

/**
 * Attention: This regex has to hold even if the code is minified!
 */
export const DELEGATE_CTOR =
    /^function\s+\S+\(\)\s*\{\s*("use strict";)?\s*(return\s+)?(\S+\s+!==\s+null\s+&&\s+)?\S+\.apply\(this,\s*arguments\)/;

export class ReflectionCapabilities implements PlatformReflectionCapabilities {
    private _reflect: any;

    constructor(reflect?: any) {
        this._reflect = reflect || global['Reflect'];
    }

    isReflectionEnabled(): boolean {
        return true;
    }

    factory<T>(t: Type<T>): (args: any[]) => T {
        return (...args: any[]) => new t(...args);
    }

    /** @internal */
    _zipTypesAndAnnotations(paramTypes: any[], paramAnnotations: any[]): any[][] {
        let result: any[][];

        if (typeof paramTypes === 'undefined') {
            result = new Array(paramAnnotations.length);
        } else {
            result = new Array(paramTypes.length);
        }

        for (let i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            } else if (paramTypes[i] != Object) {
                result[i] = [paramTypes[i]];
            } else {
                result[i] = [];
            }
            if (paramAnnotations && paramAnnotations[i] != null) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    }

    private _ownParameters(type: Type<any>, parentCtor: any): any[][]|null {
        let retVal: any[];

        // If we have no decorators, we only have function.length as metadata.
        // In that case, to detect whether a child class declared an own constructor or not,
        // we need to look inside of that constructor to check whether it is
        // just calling the parent.
        // This also helps to work around for https://github.com/Microsoft/TypeScript/issues/12439
        // that sets 'design:paramtypes' to []
        // if a class inherits from another class but has no ctor declared itself.
        if (DELEGATE_CTOR.exec(type.toString())) {
            return null;
        }

        // API for metadata created by invoking the decorators.
        if (this._reflect != null && this._reflect.getOwnMetadata != null) {
            const paramAnnotations = this._reflect.getOwnMetadata('parameters', type);
            const paramTypes = this._reflect.getOwnMetadata('design:paramtypes', type);
            if (paramTypes || paramAnnotations) {
                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
            }
        }

        // If a class has no decorators, at least create metadata
        // based on function.length.
        // Note: We know that this is a real constructor as we checked
        // the content of the constructor above.
        return new Array((<any>type.length)).fill(undefined);
    }

    parameters(type: Type<any>): any[][] {
        // Note: only report metadata if we have at least one class decorator
        // to stay in sync with the static reflector.
        if (!isType(type)) {
            return [];
        }
        const parentCtor = getParentCtor(type);
        let parameters = this._ownParameters(type, parentCtor);
        if (!parameters && parentCtor !== Object) {
            parameters = this.parameters(parentCtor);
        }
        return parameters || [];
    }

    private _ownAnnotations(typeOrFunc: Type<any>, parentCtor: any): any[] {
        // API for metadata created by invoking the decorators.
        if (this._reflect && this._reflect.getOwnMetadata) {
            return this._reflect.getOwnMetadata('annotations', typeOrFunc);
        }

        return [];
    }

    annotations(typeOrFunc: Type<any>): any[] {
        if (!isType(typeOrFunc)) {
            return [];
        }
        const parentCtor = getParentCtor(typeOrFunc);
        const ownAnnotations = this._ownAnnotations(typeOrFunc, parentCtor) || [];
        const parentAnnotations = parentCtor !== Object ? this.annotations(parentCtor) : [];
        return parentAnnotations.concat(ownAnnotations);
    }

    private _ownPropMetadata(typeOrFunc: any, parentCtor: any): {[key: string]: any[]} {
        // API for metadata created by invoking the decorators.
        if (this._reflect && this._reflect.getOwnMetadata) {
            return this._reflect.getOwnMetadata('propMetadata', typeOrFunc);
        }

        return {};
    }

    propMetadata(typeOrFunc: any): {[key: string]: any[]} {
        if (!isType(typeOrFunc)) {
            return {};
        }

        const parentCtor = getParentCtor(typeOrFunc);
        const propMetadata: {[key: string]: any[]} = {};
        if (parentCtor !== Object) {
            const parentPropMetadata = this.propMetadata(parentCtor);
            Object.keys(parentPropMetadata).forEach((propName) => {
                propMetadata[propName] = parentPropMetadata[propName];
            });
        }

        const ownPropMetadata = this._ownPropMetadata(typeOrFunc, parentCtor);
        if (ownPropMetadata) {
            Object.keys(ownPropMetadata).forEach((propName) => {
                const decorators: any[] = [];
                if (propMetadata.hasOwnProperty(propName)) {
                    decorators.push(...propMetadata[propName]);
                }
                decorators.push(...ownPropMetadata[propName]);
                propMetadata[propName] = decorators;
            });
        }
        return propMetadata;
    }

    private _ownMethodMetadata(typeOrFunc: any, parentCtor: any): {[key: string]: any[]} {
        // API for metadata created by invoking the decorators.
        if (this._reflect && this._reflect.getOwnMetadata) {
            return this._reflect.getOwnMetadata('methodMetadata', typeOrFunc);
        }

        return {};
    }

    methodMetadata(typeOrFunc: any): {[key: string]: any[]} {
        if (!isType(typeOrFunc)) {
            return {};
        }
        const parentCtor = getParentCtor(typeOrFunc);
        const methodMetadata: {[key: string]: any[]} = {};
        // TODO: Check whether return value assumption holds true or not when target had no constructor defined.
        if (parentCtor !== Object) {
            const parentMethodMetadata = this.methodMetadata(parentCtor);
            Object.keys(parentMethodMetadata).forEach((methodName) => {
                methodMetadata[methodName] = parentMethodMetadata[methodName];
            });
        }
        const ownMethodMetadata = this._ownMethodMetadata(typeOrFunc, parentCtor);
        if (ownMethodMetadata) {
            Object.keys(ownMethodMetadata).forEach((methodName) => {
                const decorators: any[] = [];
                if (methodMetadata.hasOwnProperty(methodName)) {
                    decorators.push(...methodMetadata[methodName]);
                }
                decorators.push(...ownMethodMetadata[methodName]);
                methodMetadata[methodName] = decorators;
            });
        }

        return methodMetadata;
    }


    hasMethod(type: any, methodName: string): boolean {
        return type instanceof Type && methodName in type.prototype && (typeof type.prototype[methodName]) === 'function';
    }

    getter(name: string): GetterFn {
        return <GetterFn>new Function('o', 'return o.' + name + ';');
    }

    setter(name: string): SetterFn {
        return <SetterFn>new Function('o', 'v', 'return o.' + name + ' = v;');
    }

    method(name: string): MethodFn {
        const functionBody = `if (!o.${name}) throw new Error('"${name}" is undefined');
        return o.${name}.apply(o, args);`;
        return <MethodFn>new Function('o', 'args', functionBody);
    }

    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
    importUri(type: any): string {
        // StaticSymbol
        if (typeof type === 'object' && type['filePath']) {
            return type['filePath'];
        }
        // Runtime type
        return `./${stringify(type)}`;
    }
}

function getParentCtor(ctor: Function): Type<any> {
    const parentProto = Object.getPrototypeOf(ctor.prototype);
    const parentCtor = parentProto ? parentProto.constructor : null;

    // Note: We always use `Object` as the null value to simplify checking later on.
    return parentCtor || Object;
}
