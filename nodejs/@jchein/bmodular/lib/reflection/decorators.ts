/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Type} from "./types";
import {global} from "./pseudo_global";
import {Class, ClassDefinition} from "./class";

require('reflect-metadata');
const Reflect = global['Reflect'];

/**
 * An interface implemented by class decorators generated through this library that
 * decorators as well as
 * Angular DSL syntax.
 *
 * DSL syntax:
 *
 * ```
 * var MyClass = ng
 *   .Component({...})
 *   .Class({...});
 * ```
 *
 * ES7 syntax:
 *
 * ```
 * @ng.Component({...})
 * class MyClass {...}
 * ```
 * @stable
 */
export interface TypeDecorator {
  /**
   * Invoke as ES7 decorator.
   */
  <T extends Type<any>>(type: T): T;

  // Make TypeDecorator assignable to built-in ParameterDecorator type.
  // ParameterDecorator is declared in lib.d.ts as a `declare type`
  // so we cannot declare this interface as a subtype.
  // see https://github.com/angular/angular/issues/3379#issuecomment-126169417
  // (target: Object, propertyKey?: string|symbol, parameterIndex?: number): void;

  /**
   * Storage for the accumulated annotations so far used by the DSL syntax.
   *
   * Used by {@link Class} to annotate the generated class.
   */
  annotations: any[];

  /**
   * Generate a class from the definition and annotate it with {@link TypeDecorator#annotations}.
   */
  Class(obj: ClassDefinition): Type<any>;
}

const noop = (cls: Type<any>, annot: any) => { };

/**
 * @suppress {globalThis}
 */
export function makeDecorator(name: string, props: {[name: string]: any}, parentClass?: any,
                              onLoadFn: (cls: Type<any>, annot: any) => void = noop): (...args: any[]) => (cls: any) => any {
    const metaCtor = makeMetadataCtor([props]);

    function DecoratorFactory(objOrType: any): (cls: any) => any {
        if (!(Reflect && Reflect.getOwnMetadata)) {
            throw 'reflect-metadata shim is required when using class decorators';
        }

        if (this instanceof DecoratorFactory) {
            metaCtor.call(this, objOrType);
            return this;
        }

        const annotationInstance = new (<any>DecoratorFactory)(objOrType);
        const chainAnnotation =
            typeof this === 'function' && Array.isArray(this.annotations) ? this.annotations : [];
        chainAnnotation.push(annotationInstance);

        // function TypeDecorator(cls: Type<any>) {
        const TypeDecorator: TypeDecorator =
            <TypeDecorator>function TypeDecorator(cls: Type<any>) {
            const annotations = Reflect.getOwnMetadata('annotations', cls) || [];
            annotations.push(annotationInstance);
            Reflect.defineMetadata('annotations', annotations, cls);

            if (onLoadFn) {
                onLoadFn(cls, annotationInstance);
            }

            return cls;
        };

        TypeDecorator.annotations = chainAnnotation;
        TypeDecorator.Class = Class;

        // if (chainFn) chainFn(TypeDecorator);
        return TypeDecorator;
    }

    if (parentClass) {
        DecoratorFactory.prototype = Object.create(parentClass.prototype);
    }

    DecoratorFactory.prototype.toString = () => `@${name}`;
    (<any>DecoratorFactory).annotationCls = DecoratorFactory;
    return DecoratorFactory;
}

function makeMetadataCtor(props: ([string, any] | {[key: string]: any})[]): any {
    return function ctor(...args: any[]) {
        props.forEach((prop, i) => {
            const argVal = args[i];
            if (Array.isArray(prop)) {
                // plain parameter
                this[prop[0]] = argVal === undefined ? prop[1] : argVal;
            } else {
                for (const propName in prop) {
                    this[propName] =
                        argVal && argVal.hasOwnProperty(propName) ? argVal[propName] : prop[propName];
                }
            }
        });
    };
}

type AnyOrNull = any[] | null;

export function makeParamDecorator(name: string, props: ([string, any] | {[name: string]: any})[], parentClass?: any): any {
    const metaCtor = makeMetadataCtor(props);

    function ParamDecoratorFactory(...args: any[]): any {
        if (this instanceof ParamDecoratorFactory) {
            metaCtor.apply(this, args);
            return this;
        }
        const annotationInstance = new (<any>ParamDecoratorFactory)(...args);
        (<any>ParamDecorator).annotation = annotationInstance;
        return ParamDecorator;

        function ParamDecorator(cls: any, unusedKey: any, index: number): any {
            const parameters: AnyOrNull[] = Reflect.getOwnMetadata('parameters', cls) || [];

            // there might be gaps if some in between parameters do not have annotations.
            // we pad with nulls.
            while (parameters.length <= index) {
                parameters.push(null);
            }

            parameters[index] = parameters[index] || [];
            (parameters[index]!).push(annotationInstance);

            Reflect.defineMetadata('parameters', parameters, cls);
            return cls;
        }
    }

    if (parentClass) {
        ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    ParamDecoratorFactory.prototype.toString = () => `@${name}`;
    (<any>ParamDecoratorFactory).annotationCls = ParamDecoratorFactory;
    return ParamDecoratorFactory;
}

export function makeMethodDecorator(name: string, props: ([string, any] | {[key: string]: any})[], parentClass?: any): any {
    const metaCtor = makeMetadataCtor(props);

    function MethodDecoratorFactory(...args: any[]): any {
        if (this instanceof MethodDecoratorFactory) {
            metaCtor.apply(this, args);
            return this;
        }

        const decoratorInstance = new (<any>MethodDecoratorFactory)(...args);
        let a: PropertyDecorator;

        return function MethodDecorator(target: any, name: string) {
            const meta = Reflect.getOwnMetadata('methodMetadata', target.constructor) || {};
            meta[name] = meta.hasOwnProperty(name) && meta[name] || [];
            meta[name].unshift(decoratorInstance);
            Reflect.defineMetadata('methodMetadata', meta, target.constructor);
        };
    }

    if (parentClass) {
        MethodDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }

    MethodDecoratorFactory.prototype.toString = () => `@${name}`;
    (<any>MethodDecoratorFactory).annotationCls = MethodDecoratorFactory;
    return MethodDecoratorFactory;
}

export function makePropDecorator(name: string, props: ([string, any] | {[key: string]: any})[], parentClass?: any): any {
    const metaCtor = makeMetadataCtor(props);

    function PropDecoratorFactory(...args: any[]): any {
        if (this instanceof PropDecoratorFactory) {
            metaCtor.apply(this, args);
            return this;
        }

        const decoratorInstance = new (<any>PropDecoratorFactory)(...args);

        return function PropDecorator(target: any, name: string) {
            const meta = Reflect.getOwnMetadata('propMetadata', target.constructor) || {};
            meta[name] = meta.hasOwnProperty(name) && meta[name] || [];
            meta[name].unshift(decoratorInstance);
            Reflect.defineMetadata('propMetadata', meta, target.constructor);
        };
    }

    if (parentClass) {
        PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }

    PropDecoratorFactory.prototype.toString = () => `@${name}`;
    (<any>PropDecoratorFactory).annotationCls = PropDecoratorFactory;
    return PropDecoratorFactory;
}

