/// <reference path="../../node_modules/inversify-binding-decorators/dts/index.d.ts" />
import 'reflect-metadata';
import { autoProvide } from 'inversify-binding-decorators';
import { inject, interfaces } from 'inversify';
declare let Provide: (serviceIdentifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>) => (target: any) => any;
declare let ProvideNamed: (identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>, name: string) => (target: any) => any;
declare let BoundContext: (boundContext: symbol) => (target: any, targetKey: string, index?: number | undefined) => void;
declare let AggregateRoot: (aggregateModel: symbol) => (target: any, targetKey: string, index?: number | undefined) => void;
declare let Microservice: (microservice: symbol) => (target: any, targetKey: string, index?: number | undefined) => void;
declare let Inject: typeof inject;
export { autoProvide, Provide, ProvideNamed, BoundContext, AggregateRoot, Microservice, Inject };
