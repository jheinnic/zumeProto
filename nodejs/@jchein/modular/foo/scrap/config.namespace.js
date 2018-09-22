"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const is_path_1 = require("lib/validators/is-path");
const is_tcp_port_1 = require("lib/validators/is-tcp-port");
const is_host_addr_1 = require("lib/validators/is-host-addr");
require("reflect-metadata");
global["Reflect"] = Reflect;
var configmodel;
(function (configmodel) {
    /**
     * Classes!!
     */
    class Logging {
    }
    configmodel.Logging = Logging;
    class Retry {
    }
    configmodel.Retry = Retry;
    class Timeout {
    }
    configmodel.Timeout = Timeout;
    class Zookeeper {
    }
    tslib_1.__decorate([
        class_transformer_1.Type(() => Retry),
        tslib_1.__metadata("design:type", Retry)
    ], Zookeeper.prototype, "retry", void 0);
    tslib_1.__decorate([
        class_transformer_1.Type(() => Timeout),
        tslib_1.__metadata("design:type", Timeout)
    ], Zookeeper.prototype, "timeout", void 0);
    configmodel.Zookeeper = Zookeeper;
    class EventBus {
    }
    configmodel.EventBus = EventBus;
    class Messaging {
    }
    tslib_1.__decorate([
        class_transformer_1.Type(() => EventBus),
        tslib_1.__metadata("design:type", EventBus)
    ], Messaging.prototype, "app", void 0);
    tslib_1.__decorate([
        class_transformer_1.Type(() => EventBus),
        tslib_1.__metadata("design:type", EventBus)
    ], Messaging.prototype, "cluster", void 0);
    configmodel.Messaging = Messaging;
    class KafkaDataSource {
    }
    tslib_1.__decorate([
        is_host_addr_1.IsHostAddr(),
        tslib_1.__metadata("design:type", String)
    ], KafkaDataSource.prototype, "host", void 0);
    tslib_1.__decorate([
        is_tcp_port_1.IsTcpPort(),
        tslib_1.__metadata("design:type", Number)
    ], KafkaDataSource.prototype, "port", void 0);
    configmodel.KafkaDataSource = KafkaDataSource;
    class MongoDataSource {
    }
    configmodel.MongoDataSource = MongoDataSource;
    class DataSources {
    }
    tslib_1.__decorate([
        class_transformer_1.Type(() => MongoDataSource),
        tslib_1.__metadata("design:type", Map)
    ], DataSources.prototype, "mongodb", void 0);
    tslib_1.__decorate([
        class_transformer_1.Type(() => KafkaDataSource),
        tslib_1.__metadata("design:type", Map)
    ], DataSources.prototype, "kafka", void 0);
    configmodel.DataSources = DataSources;
    class BaseMicroservice {
    }
    configmodel.BaseMicroservice = BaseMicroservice;
    class WebMicroservice extends BaseMicroservice {
    }
    tslib_1.__decorate([
        is_host_addr_1.IsHostAddr(),
        tslib_1.__metadata("design:type", String)
    ], WebMicroservice.prototype, "bindHost", void 0);
    tslib_1.__decorate([
        is_tcp_port_1.IsTcpPort(),
        tslib_1.__metadata("design:type", Number)
    ], WebMicroservice.prototype, "bindPort", void 0);
    tslib_1.__decorate([
        is_path_1.IsPath(),
        tslib_1.__metadata("design:type", String)
    ], WebMicroservice.prototype, "mountPath", void 0);
    configmodel.WebMicroservice = WebMicroservice;
    class RpcMicroservice extends BaseMicroservice {
    }
    tslib_1.__decorate([
        is_host_addr_1.IsHostAddr(),
        tslib_1.__metadata("design:type", String)
    ], RpcMicroservice.prototype, "bindHost", void 0);
    tslib_1.__decorate([
        is_tcp_port_1.IsTcpPort(),
        tslib_1.__metadata("design:type", Number)
    ], RpcMicroservice.prototype, "requestBindPort", void 0);
    tslib_1.__decorate([
        is_tcp_port_1.IsTcpPort(),
        tslib_1.__metadata("design:type", Number)
    ], RpcMicroservice.prototype, "replyBindPort", void 0);
    tslib_1.__decorate([
        is_path_1.IsPath(),
        tslib_1.__metadata("design:type", String)
    ], RpcMicroservice.prototype, "mountPath", void 0);
    configmodel.RpcMicroservice = RpcMicroservice;
    class TaskMicroservice extends BaseMicroservice {
    }
    configmodel.TaskMicroservice = TaskMicroservice;
    class Microservices {
    }
    configmodel.Microservices = Microservices;
    class BStockConfig {
    }
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty(),
        tslib_1.__metadata("design:type", String)
    ], BStockConfig.prototype, "thisMicroservice", void 0);
    tslib_1.__decorate([
        class_transformer_1.Type(() => Logging),
        tslib_1.__metadata("design:type", Logging)
    ], BStockConfig.prototype, "logging", void 0);
    tslib_1.__decorate([
        class_transformer_1.Type(() => Zookeeper),
        tslib_1.__metadata("design:type", Zookeeper)
    ], BStockConfig.prototype, "zookeeper", void 0);
    tslib_1.__decorate([
        class_transformer_1.Type(() => Messaging),
        tslib_1.__metadata("design:type", Messaging)
    ], BStockConfig.prototype, "messaging", void 0);
    tslib_1.__decorate([
        class_transformer_1.Type(() => DataSources),
        tslib_1.__metadata("design:type", DataSources)
    ], BStockConfig.prototype, "dataSources", void 0);
    tslib_1.__decorate([
        class_transformer_1.Type(() => Microservices),
        tslib_1.__metadata("design:type", Microservices)
    ], BStockConfig.prototype, "microservices", void 0);
    configmodel.BStockConfig = BStockConfig;
})(configmodel = exports.configmodel || (exports.configmodel = {}));
//# sourceMappingURL=config.namespace.js.map