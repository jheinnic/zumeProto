"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = {
    Config: Symbol("Config"),
    Container: Symbol("Container"),
    // CommandHandler: Symbol("CommandHandler"),
    // DataSourceFactory: Symbol("DataSourceFactory"),
    // DataSource: Symbol("DataSource"),
    // DomainExtent: Symbol("DomainExtent"),
    // DomainModel: Symbol("DomainModel"),
    // MongoClient: Symbol("MongoClient"),
    // User is a Type b/c in this prototype, only Bid and Auction apply CQRS.  The User model is
    // therefore neither an Aggregate nor a Projection.  It also does not draw a distinction between
    // its on-the-wire message object representation and its server-side domain object representation.
    // To better appreciate this as an oversimplification, contemplate how one would convey User objects
    // over a gRPC channel where Protobuf is required...
    // User: Symbol("User"),
    // UserService: Symbol("UserService"),
    Logger: Symbol("Logger"),
    // ClientTopicRegistry: Symbol("ClientTopicRegistry"),
    // EventBus: Symbol("EventBus"),
    Validator: Symbol("Validator"),
};
exports.default = exports.TYPES;
//# sourceMappingURL=types.js.map