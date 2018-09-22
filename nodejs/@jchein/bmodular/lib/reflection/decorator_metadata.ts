/**
 * Created by jheinnic on 3/22/17.
 */

require('reflect-metadata');
let Reflect = global['Reflect'];

/**
 * An alternative to the Reflector class for extracting metadata from a decorated class in bulk.
 */
export class DecoratorMetadata {
    constructor(readonly annotations: any[],
                readonly paramTypes: any[],
                readonly propMetadata: { [key: string]: Object[] },
                readonly methodMetadata: { [key: string]: Object[] },
                readonly params: any[]) {

    }

    public static getDecoratorMetadata(clazz: Function) {
        const annotations = Reflect.getMetadata('annotations', clazz);
        const paramTypes = Reflect.getMetadata('design:paramtypes', clazz);
        const propMetadata = Reflect.getMetadata('propMetadata', clazz);
        const methodMetadata = Reflect.getMetadata('methodMetadata', clazz);
        const parameters = Reflect.getMetadata('parameters', clazz);

        return new DecoratorMetadata(annotations, paramTypes, propMetadata, methodMetadata, parameters);
    }
}

export interface ParameterAnnotation {
    readonly paramName: string;
    readonly paramIndex: number;
}

export class PropertyAnnotation {
    public readonly propertyName: string;
}

export interface MethodAnnotation {
    readonly methodName: string;
}

