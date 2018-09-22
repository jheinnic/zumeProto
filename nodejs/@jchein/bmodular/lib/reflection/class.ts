/**
 * Created by jheinnic on 4/20/17.
 */

import {Type} from "./types";
import {stringify} from "./pseudo_global";

let _nextClassId = 0;
// const Reflect = global['Reflect'];


/**
 * Declares the interface to be used with {@link Class}.
 *
 * @stable
 */
export type ClassDefinition = {
    /**
     * Optional argument for specifying the superclass.
     */
    extends?: Type<any>;

    /**
     * Required constructor function for a class.
     *
     * The function may be optionally wrapped in an `Array`, in which case additional parameter
     * annotations may be specified.
     * The number of arguments and the number of parameter annotations must match.
     *
     * See {@link Class} for example of usage.
     */
    constructor: Function; // |any[];

    /**
     * Other methods on the class. Note that values should have type 'Function' but TS requires
     * all properties to have a narrower type than the index signature.
     */
    [x: string]: Function|Type<any>|any[]|undefined;  // Type<any>|Function|any[];
};



function extractAnnotation(annotation: any): any {
    if (typeof annotation === 'function' && annotation.hasOwnProperty('annotation')) {
        // it is a decorator, extract annotation
        annotation = annotation.annotation;
    }
    return annotation;
}

function applyParams(fnOrArray: (Function | any[]), key: string): Function {
    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
        fnOrArray === Number || fnOrArray === Array) {
        throw new Error(`Can not use native ${stringify(fnOrArray)} as constructor`);
    }

    if (typeof fnOrArray === 'function') {
        return fnOrArray;
    }

    if (Array.isArray(fnOrArray)) {
        const annotations: any[] = fnOrArray;
        const annoLength = annotations.length - 1;
        const fn: Function = fnOrArray[annoLength];
        if (typeof fn !== 'function') {
            throw new Error(
                `Last position of Class method array must be Function in key ${key} was '${stringify(fn)}'`);
        }
        if (annoLength != fn.length) {
            throw new Error(
                `Number of annotations (${annoLength}) does not match number of arguments (${fn.length}) in the function: ${stringify(fn)}`);
        }
        const paramsAnnotations: any[][] = [];
        for (let i = 0, ii = annotations.length - 1; i < ii; i++) {
            const paramAnnotations: any[] = [];
            paramsAnnotations.push(paramAnnotations);
            const annotation = annotations[i];
            if (Array.isArray(annotation)) {
                for (let j = 0; j < annotation.length; j++) {
                    paramAnnotations.push(extractAnnotation(annotation[j]));
                }
            } else if (typeof annotation === 'function') {
                paramAnnotations.push(extractAnnotation(annotation));
            } else {
                paramAnnotations.push(annotation);
            }
        }
        Reflect.defineMetadata('parameters', paramsAnnotations, fn);
        return fn;
    }

    throw new Error(
        `Only Function or Array is supported in Class definition for key '${key}' is '${stringify(fnOrArray)}'`);
}

/**
 * Provides a way for expressing ES6 classes with parameter annotations in ES5.
 *
 * ## Basic Example
 *
 * ```
 * var Greeter = ng.Class({
 *   constructor: function(name) {
 *     this.name = name;
 *   },
 *
 *   greet: function() {
 *     alert('Hello ' + this.name + '!');
 *   }
 * });
 * ```
 *
 * is equivalent to ES6:
 *
 * ```
 * class Greeter {
 *   constructor(name) {
 *     this.name = name;
 *   }
 *
 *   greet() {
 *     alert('Hello ' + this.name + '!');
 *   }
 * }
 * ```
 *
 * or equivalent to ES5:
 *
 * ```
 * var Greeter = function (name) {
 *   this.name = name;
 * }
 *
 * Greeter.prototype.greet = function () {
 *   alert('Hello ' + this.name + '!');
 * }
 * ```
 *
 * ### Example with parameter annotations
 *
 * ```
 * var MyService = ng.Class({
 *   constructor: [String, [new Optional(), Service], function(name, myService) {
 *     ...
 *   }]
 * });
 * ```
 *
 * is equivalent to ES6:
 *
 * ```
 * class MyService {
 *   constructor(name: string, @Optional() myService: Service) {
 *     ...
 *   }
 * }
 * ```
 *
 * ### Example with inheritance
 *
 * ```
 * var Shape = ng.Class({
 *   constructor: (color) {
 *     this.color = color;
 *   }
 * });
 *
 * var Square = ng.Class({
 *   extends: Shape,
 *   constructor: function(color, size) {
 *     Shape.call(this, color);
 *     this.size = size;
 *   }
 * });
 * ```
 * @suppress {globalThis}
 * @stable
 */
export function Class(clsDef: ClassDefinition): Type<any> {
    if (!clsDef.hasOwnProperty('constructor')) {
        throw Error(`${clsDef} has no constructor`);
    }
    const constructor: Function =
        applyParams(clsDef.constructor, 'constructor');

    let proto = constructor.prototype;

    if (clsDef.hasOwnProperty('extends')) {
        if (typeof clsDef.extends === 'function') {
            (<Function>constructor).prototype = proto =
                Object.create((<Function>clsDef.extends).prototype);
        } else {
            throw new Error(
                `Class definition 'extends' property must be a constructor function was: ${stringify(clsDef.extends)}`);
        }
    }

    for (const key in clsDef) {
        if (key !== 'extends' && key !== 'prototype' && clsDef.hasOwnProperty(key)) {
            // Only one property of a classDefinition, 'extends', is intended to use Type<any>, and
            // it is filtered out in this loop because it is metadata about class inheritance, not a
            // description of a data value slot.  We can therefore confidently cast each property to
            // <Function|any[]> in order to comply with applyParams( )'s call signature.
            proto[key] = applyParams(<Function|any[]>clsDef[key], key);
        }
    }

    if (this && this.annotations instanceof Array) {
        Reflect.defineMetadata('annotations', this.annotations, constructor);
    }

    const constructorName = constructor['name'];
    if (!constructorName || constructorName === 'constructor') {
        (constructor as any)['overriddenName'] = `class${_nextClassId++}`;
    }

    return <Type<any>>constructor;
}

