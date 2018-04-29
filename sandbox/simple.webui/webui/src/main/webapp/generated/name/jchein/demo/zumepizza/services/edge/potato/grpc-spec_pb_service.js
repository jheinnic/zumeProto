// package: 
// file: name/jchein/demo/zumepizza/services/edge/potato/grpc-spec.proto

var name_jchein_demo_zumepizza_services_edge_potato_grpc_spec_pb = require("../../../../../../../name/jchein/demo/zumepizza/services/edge/potato/grpc-spec_pb");
var name_jchein_portfolio_common_grpc_action_actions_pb = require("../../../../../../../name/jchein/portfolio/common/grpc/action/actions_pb");
var grpc = require("grpc-web-client").grpc;

var Example = (function () {
  function Example() {}
  Example.serviceName = "Example";
  return Example;
}());

Example.createExample = {
  methodName: "createExample",
  service: Example,
  requestStream: false,
  responseStream: false,
  requestType: name_jchein_demo_zumepizza_services_edge_potato_grpc_spec_pb.CreateExampleRequest,
  responseType: name_jchein_portfolio_common_grpc_action_actions_pb.BasicReply
};

exports.Example = Example;

function ExampleClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExampleClient.prototype.createExample = function createExample(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Example.createExample, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.ExampleClient = ExampleClient;

