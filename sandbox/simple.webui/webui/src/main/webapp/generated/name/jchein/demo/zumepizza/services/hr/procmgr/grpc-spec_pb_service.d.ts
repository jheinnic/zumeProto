// package: 
// file: name/jchein/demo/zumepizza/services/hr/procmgr/grpc-spec.proto

import * as name_jchein_demo_zumepizza_services_hr_procmgr_grpc_spec_pb from "../../../../../../../name/jchein/demo/zumepizza/services/hr/procmgr/grpc-spec_pb";
import * as name_jchein_portfolio_common_grpc_action_actions_pb from "../../../../../../../name/jchein/portfolio/common/grpc/action/actions_pb";
import {grpc} from "grpc-web-client";

type ExamplecreateExample = {
  readonly methodName: string;
  readonly service: typeof Example;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof name_jchein_demo_zumepizza_services_hr_procmgr_grpc_spec_pb.CreateExampleRequest;
  readonly responseType: typeof name_jchein_portfolio_common_grpc_action_actions_pb.BasicReply;
};

export class Example {
  static readonly serviceName: string;
  static readonly createExample: ExamplecreateExample;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class ExampleClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  createExample(
    requestMessage: name_jchein_demo_zumepizza_services_hr_procmgr_grpc_spec_pb.CreateExampleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: name_jchein_portfolio_common_grpc_action_actions_pb.BasicReply|null) => void
  ): void;
  createExample(
    requestMessage: name_jchein_demo_zumepizza_services_hr_procmgr_grpc_spec_pb.CreateExampleRequest,
    callback: (error: ServiceError, responseMessage: name_jchein_portfolio_common_grpc_action_actions_pb.BasicReply|null) => void
  ): void;
}

