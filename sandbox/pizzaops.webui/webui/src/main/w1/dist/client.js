"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_spec_pb_service_1 = require("../generated/name/jchein/demo/zumepizza/services/edge/potato/grpc-spec_pb_service");
var grpc_spec_pb_1 = require("../generated/name/jchein/demo/zumepizza/services/edge/potato/grpc-spec_pb");
var uuid_1 = require("uuid");
exports.client = new grpc_spec_pb_service_1.ExampleClient("http://portfolio.dev.jchein.name:9090");
function callExample() {
    var req = new grpc_spec_pb_1.CreateExampleRequest();
    req.setFirstname("John");
    req.setMiddlename("Q");
    req.setLastname("Public");
    req.setId(uuid_1.v1());
    req.setPilotid(uuid_1.v1());
    return exports.client.createExample(req, function (err, basicReply) {
        if (!!err) {
            console.log(JSON.stringify(err));
        }
        else {
            console.log(JSON.stringify(basicReply));
        }
    });
}
exports.callExample = callExample;
//# sourceMappingURL=client.js.map