/**
 * Created by jheinnic on 4/20/17.
 */
import {getType, makeDecorator, Type} from "reflect-helper";
import {Constructor} from "reflect-helper/util";
import {injectable} from "inversify";

export type Help = (target: Object, propertyName?: string|symbol, parameterIndex?: number) => void;

export type UniversalDecorator = ClassDecorator | MethodDecorator | PropertyDecorator | ParameterDecorator;

/**
 * A static class utility that offers a simpler implementation than the Reflector implementation, but offers
 * less functionality.
 *
 * Implementation is largely delegated to the reflect-helpers polyfill library.
 */
@injectable()
export class Annotator implements IAnnotator {
    /**
     * Get the decorator instance of a given type from an object (using its constructor
     * function type) or constructor function (using itself).
     *
     * @param target Object whose constructor function is to be queried or that constructor function itself.
     * @param annotationType The type of annotation class to return.
     * @param inherit Search subclasses as well iff true.  False by default.
     */
    static getAnnotation<T>(target: Object, annotationType: Constructor<T>, inherit?: boolean): T[];
    static getAnnotation<T>(target: Constructor<any>, annotationType: Constructor<T>, inherit?: boolean ): T[];
    static getAnnotation<T>(target: Object | Constructor<any>, annotationType: Constructor<T>, inherit: boolean = false): T[] {
        return Annotator.getType(target).getAnnotations(annotationType, inherit);
    }

    /**
     * Get the decorator instance of a given type from an object (using its constructor
     * function type) or constructor function (using itself).
     *
     * @param target Object whose constructor function is to be queried or that constructor function itself.
     * @param annotationType The type of annotation class to return.
     * @param inherit Search subclasses as well iff true.  False by default.
     */
    getAnnotation<T>(target: Object, annotationType: Constructor<T>, inherit?: boolean): T[];
    getAnnotation<T>(target: Constructor<any>, annotationType: Constructor<T>, inherit?: boolean): T[];
    getAnnotation<T>(target: Object | Constructor<any>, annotationType: Constructor<T>, inherit: boolean = false): T[] {
        return Annotator.getAnnotation(target, annotationType);
    }

    static makeClassAnnotation(annotationType: Constructor<any>): (...args: any[]) => ClassDecorator {
        return makeDecorator(annotationType);
    }

    static makeMethodAnnotation(annotationType: Constructor<any>): (...args: any[]) => MethodDecorator {
        return makeDecorator(annotationType) as (...args: any[]) => MethodDecorator
    }

    static makePropertyAnnotation(annotationType: Constructor<any>): (...args: any[]) => PropertyDecorator {
        return makeDecorator(annotationType) as (...args: any[]) => PropertyDecorator;
    }

    static makeParameterAnnotation(annotationType: Constructor<any>): (...args: any[]) => ParameterDecorator {
        return makeDecorator(annotationType) as (...args: any[]) => ParameterDecorator;
    }

    static makeUniversalAnnotation(annotationType: Constructor<any>): (...args: any[]) => UniversalDecorator {
        return makeDecorator(annotationType) as (...args: any[]) => UniversalDecorator;
    }

    makeClassAnnotation(annotationType: Constructor<any>): (...args: any[]) => ClassDecorator {
        return Annotator.makeClassAnnotation(annotationType);
    }

    makePropertyAnnotation(annotationType: Constructor<any>): (...args: any[]) => PropertyDecorator {
        return Annotator.makePropertyAnnotation(annotationType);
    }

    makeMethodAnnotation(annotationType: Constructor<any>): (...args: any[]) => MethodDecorator {
        return Annotator.makeMethodAnnotation(annotationType);
    }

    makeParameterAnnotation(annotationType: Constructor<any>): (...args: any[]) => ParameterDecorator {
        return Annotator.makeParameterAnnotation(annotationType);
    }

    makeUniversalAnnotation(annotationType: Constructor<any>): (...args: any[]) => UniversalDecorator {
        return Annotator.makeUniversalAnnotation(annotationType);
    }

    static getType(clazz: Object): Type;
    static getType(clazz: Constructor<any>): Type;
    static getType(clazz: Object | Constructor<any>): Type {
        let param: Constructor<any>;

        if (isConstructor(clazz)) {
            param = clazz;
        } else {
            param = <Constructor<any>> clazz.constructor;
        }

        return getType(param);
    }

    getType(clazz: Object): Type;
    getType(clazz: Constructor<any>): Type;
    getType(clazz: Object | Constructor<any>): Type {
        return Annotator.getType(clazz)
    }
}

export interface IAnnotator {
    getAnnotation<T>(clazz: Object, annotationType: Constructor<T>, inherit?: boolean): T[];
    getAnnotation<T>(clazz: Constructor<T>, annotationType: Constructor<T>, inherit?: boolean): T[];
    getAnnotation<T>(clazz: Object | Constructor<T>, annotationType: Constructor<T>, inherit?: boolean): T[];

    getType(clazz: Object): Type;
    getType(clazz: Constructor<any>): Type;
    getType(clazz: Object | Constructor<any>): Type;

    makeClassAnnotation(annotationType: Constructor<any>): (...args: any[]) => ClassDecorator;
    makePropertyAnnotation(annotationType: Constructor<any>): (...args: any[]) => PropertyDecorator;
    makeMethodAnnotation(annotationType: Constructor<any>): (...args: any[]) => MethodDecorator;
    makeParameterAnnotation(annotationType: Constructor<any>): (...args: any[]) => ParameterDecorator;
    makeUniversalAnnotation(annotationType: Constructor<any>): (...args: any[]) => UniversalDecorator;
}

function isConstructor(candidate: Object|Constructor<any>): candidate is Constructor<any> {
    return candidate.constructor === Function;
}
