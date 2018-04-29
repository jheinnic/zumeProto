// package: 
// file: name/jchein/demo/zumepizza/services/hr/procmgr/grpc-spec.proto

import * as jspb from "google-protobuf";
import * as name_jchein_portfolio_common_grpc_action_actions_pb from "../../../../../../../name/jchein/portfolio/common/grpc/action/actions_pb";

export class CreateExampleRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPilotid(): string;
  setPilotid(value: string): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getMiddlename(): string;
  setMiddlename(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  getSuffix(): string;
  setSuffix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExampleRequest): CreateExampleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateExampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExampleRequest;
  static deserializeBinaryFromReader(message: CreateExampleRequest, reader: jspb.BinaryReader): CreateExampleRequest;
}

export namespace CreateExampleRequest {
  export type AsObject = {
    id: string,
    pilotid: string,
    firstname: string,
    middlename: string,
    lastname: string,
    suffix: string,
  }
}

