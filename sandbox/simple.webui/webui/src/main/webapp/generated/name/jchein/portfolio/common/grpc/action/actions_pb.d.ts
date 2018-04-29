// package: 
// file: name/jchein/portfolio/common/grpc/action/actions.proto

import * as jspb from "google-protobuf";

export class BasicReply extends jspb.Message {
  getStatus(): StatusCode;
  setStatus(value: StatusCode): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicReply.AsObject;
  static toObject(includeInstance: boolean, msg: BasicReply): BasicReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicReply;
  static deserializeBinaryFromReader(message: BasicReply, reader: jspb.BinaryReader): BasicReply;
}

export namespace BasicReply {
  export type AsObject = {
    status: StatusCode,
    message: string,
  }
}

export enum StatusCode {
  OK = 0,
  NOT_AUTHORIZED = 1,
  MALFORMED_REQUEST = 2,
  DUPLICATE_REQUEST = 3,
  INVALID_REQUEST = 4,
  STALE_REQUEST = 5,
  INTERNAL_ERROR = 6,
}

