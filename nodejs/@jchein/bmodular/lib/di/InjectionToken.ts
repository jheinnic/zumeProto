/**
 * Created by jheinnic on 4/27/17.
 */

import {interfaces} from "inversify";
import Abstract = interfaces.Abstract;
import {Type} from "reflect-helper";
/**
 * Creates a token that can be used in a DI Provider.
 *
 * Use an `InjectionToken` whenever the type you are injecting is not reified (does not have a
 * runtime representation) such as when injecting an interface, function type, array or parametrized
 * type.
 *
 * `InjectionToken` is parametrized on `T` which is the type of object which will be returned by the
 * `Injector`. This provides additional level of type safety and compensates for lossy type erasure
 * during compilation to runtime JavaScript.
 *
 * ```
 * interface MyInterface {...}
 * var myInterface = injector.get(new InjectionToken<MyInterface>('SomeToken'));
 * // myInterface is inferred to be MyInterface.
 * ```
 *
 * ### Example
 *
 * {@example core/di/ts/injector_spec.ts region='Injector'}
 *
 * @stable
 */
export class InjectionToken<T> implements Abstract<T> {
    constructor(private desc: string) {
    }

    toString() {
        return `InjectionToken ${this.desc}`;
    }

    prototype: T;
}
