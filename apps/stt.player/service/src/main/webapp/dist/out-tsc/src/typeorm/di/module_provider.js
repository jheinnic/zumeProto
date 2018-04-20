"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var inversify_config_injection_1 = require("inversify-config-injection");
var typeorm_1 = require("typeorm");
var types_1 = require("./types");
var TypeOrmContainerModule = /** @class */ (function (_super) {
    tslib_1.__extends(TypeOrmContainerModule, _super);
    function TypeOrmContainerModule(instanceName) {
        var _this = _super.call(this, function (bind) {
            bind(types_1.TYPES.Connection)
                .toDynamicValue(function (context) {
                var options = context.container.getNamed(types_1.TYPES.ConnectionOptions, _this.instanceName);
                return typeorm_1.createConnection(options);
            })
                .inSingletonScope()
                .whenTargetNamed(_this.instanceName);
            bind(types_1.TYPES.Connection)
                .toProvider(function (context) {
                return function () {
                    return context.container.getNamed(types_1.TYPES.ConnectionPromise, _this.instanceName);
                };
            })
                .whenTargetNamed(_this.instanceName);
        }) || this;
        _this.instanceName = instanceName;
        return _this;
    }
    return TypeOrmContainerModule;
}(inversify_1.ContainerModule));
exports.TypeOrmContainerModule = TypeOrmContainerModule;
var TypeOrmConfigContainerModule = /** @class */ (function (_super) {
    tslib_1.__extends(TypeOrmConfigContainerModule, _super);
    function TypeOrmConfigContainerModule(instanceName) {
        var _this = _super.call(this, function (bind) {
            new inversify_config_injection_1.EagerBinder({});
            bind < Default;
        }) || this;
        _this.instanceName = instanceName;
        return _this;
    }
    return TypeOrmConfigContainerModule;
}(inversify_1.ContainerModule));
exports.TypeOrmConfigContainerModule = TypeOrmConfigContainerModule;
//# sourceMappingURL=module_provider.js.map