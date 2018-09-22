/**
 * Created by jheinnic on 4/12/17.
 */
import { Symbolic } from "@bstock/ts-utils/dist";
export declare type TagType = "BoundedContext" | "Aggregate" | "Projection" | "Microservice" | "Controller" | "Command" | "Event" | "DataSourceType" | "DataSourceName";
export declare const TAGS: Symbolic<TagType>;
export default TAGS;
