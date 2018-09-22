"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/inversify-binding-decorators/dts/index.d.ts"/>
require("reflect-metadata");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
exports.autoProvide = inversify_binding_decorators_1.autoProvide;
const inversify_1 = require("inversify");
const container_1 = require("./container");
// import * as Immutable from 'immutable';
// type ProviderTarget = string | symbol | inversifyInterfaces.Newable<any> | inversifyInterfaces.Abstract<any>;
//
// type ProviderFn = (serviceIdentifier: ProviderTarget) => (target: any) => any;
// type FluentProviderFn = (serviceIdentifier: inversifyInterfaces.ServiceIdentifier<any>) => any; // inversifyInterfaces.BindingInWhenOnSyntax<any>
//
// const typeToDecorator: Immutable.Map<ContainerType,ProviderFn> =
//     Immutable.Map.of(
//         ContainerType.SHARED, makeProvideDecorator(sharedContainer),
//         ContainerType.APP, makeProvideDecorator(appContainer),
//         ContainerType.CONTROL, makeProvideDecorator(controlContainer)
//     )
//
// const typeToFluentDecorator: Immutable.Map<ContainerType,FluentProviderFn> =
//     Immutable.Map.of(
//         ContainerType.SHARED, makeFluentProvideDecorator(sharedContainer),
//         ContainerType.APP, makeFluentProvideDecorator(appContainer),
//         ContainerType.CONTROL, makeFluentProvideDecorator(controlContainer)
//     )
let Provide = inversify_binding_decorators_1.makeProvideDecorator(container_1.appContainer);
exports.Provide = Provide;
let fluentDecorator = inversify_binding_decorators_1.makeFluentProvideDecorator(container_1.appContainer);
let ProvideNamed = (identifier, name) => {
    return fluentDecorator(identifier)
        .whenTargetNamed(name)
        .done();
};
exports.ProvideNamed = ProvideNamed;
// let DomainModel = function (boundContext: symbol) {
//     return fluentDecorator(TYPES.DomainModel)
//         .whenTargetTagged("boundedContext", boundContext)
//         .done();
// };
let BoundContext = function (boundContext) {
    return inversify_1.tagged("boundContext", boundContext);
};
exports.BoundContext = BoundContext;
// let DomainExtent = function (aggregateModel: symbol) {
//     return fluentDecorator(TYPES.)
//         .whenTargetTagged("aggregateModel", aggregateModel)
//         .done();
// };
// let CommandHandler = function (aggregateModel: symbol) {
//     return fluentDecorator(TYPES.CommandHandler)
//         .whenTargetTagged("aggregateModel", aggregateModel)
//         .done();
// };
let AggregateRoot = function (aggregateModel) {
    return inversify_1.tagged("aggregateModel", aggregateModel);
};
exports.AggregateRoot = AggregateRoot;
// let EventHandler = function (aggregateModel: symbol) {
//     return fluentDecorator(TYPES.CommandHandler)
//         .whenTargetTagged("aggregateModel", aggregateModel)
//         .done();
// };
// let ProvideByProjectionModel = function (containerType: ContainerType, identifier, projectionModel: symbol) {
//     return typeToFluentDecorator.get(containerType)(identifier)
//         .whenTargetTagged("projectionModel", projectionModel)
//         .done();
// };
//
// let ProjectionModel = function (projectionModel: symbol) {
//     return tagged("projectionModel", projectionModel);
// };
// let ProvideByMicroservice = function (containerType: ContainerType, identifier, microservice: symbol) {
//     return fluentDecorator(TYPES.CommandHandler)
//         .whenTargetTagged("microservice", microservice)
//         .done();
// };
let Microservice = function (microservice) {
    return inversify_1.tagged("microservice", microservice);
};
exports.Microservice = Microservice;
// let ProvideByCommand = function (identifier: ServiceIdentifier, command: symbol) {
//     return typeToFluentDecorator.get(containerType)(identifier)
//         .whenTargetTagged("commandType", command)
//         .done();
// };
// let CommandType = function (command: symbol) {
//     return tagged("commandType", command);
// };
// let ProvideByEvent = function (containerType: ContainerType, identifier, event: symbol) {
//     return typeToFluentDecorator.get(containerType)(identifier)
//         .whenTargetTagged("eventType", event)
//         .done();
// };
//
// let EventType = function (event: symbol) {
//     return tagged("eventType", event);
// };
let Inject = inversify_1.inject;
exports.Inject = Inject;
//# sourceMappingURL=decorators.js.map