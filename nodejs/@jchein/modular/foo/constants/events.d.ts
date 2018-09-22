/**
 * Created by jheinnic on 4/5/17.
 */
import { KeyAsValue } from "@bstock/ts-utils/dist";
export declare type EventTypes = "BidPlaced" | "BidCancelled" | "AuctionCreated" | "BidAccepted" | "BidRejected";
export declare const EVENTS: KeyAsValue<EventTypes>;
export default EVENTS;
