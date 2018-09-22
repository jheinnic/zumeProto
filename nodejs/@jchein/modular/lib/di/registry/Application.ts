/**
 * Created by jheinnic on 4/21/17.
 */
import Immutable = require("immutable");
import {makeLoggerMiddleware} from "inversify-logger-middleware";
import {Container} from "inversify";

import {ModuleId} from "../module/ModuleId";
import {Environment} from "../../app/Environment";
import {IRegistryAccess} from "./IRegistryAccess";
import {moduleCatalog} from "../../../foo/module/ModuleCatalog";


export interface IApplication {
    importModule(moduleId: ModuleId<any>): void;
    start(): void;
    stop(): void;
}

enum InitStates {
    INITIAL,
    BOOTSTRAPPING,
    READY,
    STARTING,
    RUNNING,
    STOPPING,
    FAILED
};

export class Application implements IApplication {
    private initState: InitStates;
    private environment: Environment;
    private loadedModules: Immutable.Map<ModuleId<any>, ModuleStatus> = Immutable.Map.of();
    private appContainer: Container;

    // ModuleCatalog provides the app Container and loads modules into it when asked to.
    constructor(private moduleCatalog: IRegistryAccess) {
        this.initState = InitStates.INITIAL;
    }

    loadEnvironment(): void {
        if (this.initState !== InitStates.INITIAL) {
            throw Error("Cannot load environment from " + this.initState);
        }
        this.initState = InitStates.BOOTSTRAPPING;
        this.environment = new Environment();
        this.initState = InitStates.READY;
    }

    start(): void {
        if (this.initState !== InitStates.READY) {
            throw Error("Cannot load environment from " + this.initState);
        }
        this.initState = InitStates.STARTING;
        if (process.env.NODE_ENV === 'development') {
            let logger = makeLoggerMiddleware();
            this.appContainer.applyMiddleware(logger);
        }
        this.initState = InitStates.RUNNING;
    }

    stop(): void {
        // throw new Error('Method not implemented.');
        // TODO: Stop application
    }

    importModule(moduleId: ModuleId<any>): boolean {
        let retVal: boolean = false;
        if (this.initState !== InitStates.READY) {
            throw Error(`Cannot load import modules from ${this.initState}`);
        } else if(! moduleId) {
            throw Error(`Cannot load a null or undefined moduleId`);
        } else {
           retVal = this.load(moduleId);
        }

        return retVal;
    }

    load(moduleId: ModuleId<any>): boolean {
        let retVal: boolean;
        switch (this.loadedModules.get(moduleId)) {
            case ModuleStatus.LOADED: {
                // TODO: Increment ref counter
                retVal = false;
                break;
            }
            case ModuleStatus.REGISTERED: {
                this.doLoad(moduleId);
                retVal = true;
                break;
            }
            default: {
                this.loadedModules = this.loadedModules.set(moduleId, ModuleStatus.UNIDENTIFIED);
                throw Error("No module found for module ID of ${moduleId}");
            }
        }

        return retVal;
    }

    // TODO: Implement ref counting and pack StateEnum value into an object with ref count metadata.
    //       Do this in order to support unload when a module is a dependent of multiple parents and
    //       unload becomes conditional on both parents unloading first.  Remove module registration
    //       iff last unload happens on something UNIDENTIFIED, otherwise downgrade to REGISTERED.
    // TODO: Once refcounting exists, unloading a REGISTERED but not LOADED module should become an error.
    //       Right now, the first unload jumps the gun and prematurely unloads, which is a different
    //       and more perverse form of error.
    unload(moduleId: ModuleId<any>): boolean {
        let retVal: boolean;
        switch (this.loadedModules.get(moduleId)) {
            case ModuleStatus.LOADED: {
                retVal = true;
                break;
            }
            case ModuleStatus.REGISTERED: {
                retVal = false;
                break;
            }
            default: {
                this.loadedModules = this.loadedModules.remove(moduleId);
                throw Error("No module found for module ID of ${moduleId}");
            }
        }

        return retVal;
    }

    private doLoad(moduleId: ModuleId<any>) {
        this.appContainer.load(
            moduleCatalog.getModuleById(moduleId)!
        );
        this.loadedModules = this.loadedModules.set(moduleId, ModuleStatus.LOADED);
    }

    private doUnload(moduleId: ModuleId<any>) {
        this.appContainer.unload(
            moduleCatalog.getModuleById(moduleId)!
        );
        this.loadedModules = this.loadedModules.set(moduleId, ModuleStatus.REGISTERED);
    }
    //     let retVal: ContainerModule|undefined = undefined;
    //     switch(this.loadedModules.get(moduleId)) {
    //         case ModuleStatus.LOADED, ModuleStatus.REGISTERED: {
    //             let moduleProvider =
    //                 this.moduleContainer.yygetTagged(DITypes.ContainerModule, "moduleId", moduleId);
    //             retVal = moduleProvider.provide();
    //             break;
    //         }
    //         case ModuleStatus.UNIDENTIFIED: {
    //             break;
    //         }
    //         default: {
    //             this.loadedModules = this.loadedModules.set(moduleId, ModuleStatus.UNIDENTIFIED);
    //             break;
    //         }
    //     }
    //
    //     // May validly be undefined if a bad moduleId is provided
    //     return retVal;
    // }
}

export enum ModuleStatus {
    UNIDENTIFIED,
    REGISTERED,
    LOADED
}
