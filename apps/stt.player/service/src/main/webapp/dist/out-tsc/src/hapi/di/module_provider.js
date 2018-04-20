"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var inversify_vanillajs_helpers_1 = require("inversify-vanillajs-helpers");
var types_1 = require("./types");
var hapi_1 = require("hapi");
inversify_vanillajs_helpers_1.helpers.annotate(hapi_1.Server, [types_1.TYPES.HapiServerOptions]);
var HapiContainerModule = /** @class */ (function (_super) {
    tslib_1.__extends(HapiContainerModule, _super);
    function HapiContainerModule() {
        return _super.call(this, function (bind) {
            bind(types_1.TYPES.HapiServer)
                .to(hapi_1.Server)
                .onActivation(function (context, injectable) {
                var extensions = context.container.getAll(types_1.TYPES.HapiExtension);
                var augmenter = extensions.reduce(function (augmenter, next) {
                    return next.register(augmenter);
                }, function (server) { });
                augmenter(injectable);
                return injectable;
            });
            bind(types_1.TYPES.HapiExtension).to(NoOpExtension);
        }) || this;
    }
    return HapiContainerModule;
}(inversify_1.ContainerModule));
exports.HapiContainerModule = HapiContainerModule;
var NoOpExtension = /** @class */ (function () {
    function NoOpExtension() {
    }
    NoOpExtension.prototype.register = function (next) {
        return function (server) {
            next(server);
        };
    };
    return NoOpExtension;
}());
//# sourceMappingURL=module_provider.js.map