"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var graphql_tools_1 = require("graphql-tools");
var types_1 = require("../di/types");
var types_2 = require("../../hapi/di/types");
var ApolloContainerModule = /** @class */ (function (_super) {
    tslib_1.__extends(ApolloContainerModule, _super);
    function ApolloContainerModule() {
        return _super.call(this, function (bind) {
            // bind<interfaces.Factory<GraphQLSchema>>(TYPES.ExecutableSchema)
            //       .toFactory<GraphQLSchema>((context: interfaces.Context) => {
            //          console.log(JSON.stringify(context));
            //          return makeExecutableSchema; });
            bind(types_1.TYPES.ExecutableSchema)
                .toDynamicValue(function (context) {
                var def = context.container.get(types_1.TYPES.ExecutableSchemaDefinition);
                return graphql_tools_1.makeExecutableSchema(def);
            });
            bind(types_1.TYPES.GraphQLMicroservice).toService(types_2.TYPES.HapiServer);
        }) || this;
    }
    return ApolloContainerModule;
}(inversify_1.ContainerModule));
exports.ApolloContainerModule = ApolloContainerModule;
//# sourceMappingURL=module.js.map