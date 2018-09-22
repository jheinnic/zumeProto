/**
 * Created by jheinnic on 4/26/17.
 */
import {interfaces} from "inversify";
import ContainerModuleCallBack = interfaces.ContainerModuleCallBack;

/**
 * Interface that must be implemented by root-level modules that get injected to the ModuleCatalog by virtue
 * of their BModule annotation.
 */
export interface IModuleProvider
{
   name: string;
   provide: ContainerModuleCallBack;
}
