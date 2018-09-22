import { KeyAsValue } from "@bstock/ts-utils/dist";
export declare type CommandType = "PlaceBid" | "CancelBid" | "CreateAuction" | "AcceptBid" | "RejectBid";
export declare const COMMANDS: KeyAsValue<CommandType>;
export default COMMANDS;
