### Modular

---
An opinionated modular component system for TypeScript and JavaScript 

[![npm version](https://badge.fury.io/js/@bstock/modular.svg)](http://badge.fury.io/js/@bstock/modular)
[![Dependencies](https://david-dm.org/inversify/@bstock/modular.svg)](https://david-dm.org/inversify/@bstock/modular#info=dependencies)
[![img](https://david-dm.org/inversify/@bstock/modular/dev-status.svg)](https://david-dm.org/inversify/@bstock/modular/#info=devDependencies)
[![img](https://david-dm.org/inversify/@bstock/modular/peer-status.svg)](https://david-dm.org/inversify/@bstock/modular/#info=peerDependenciess)


## Installation
```
$ npm adduser --scope @bstock <private repo> <user>
$ npm install @bstock/modular
```

## Usage
```js
import { BModule, IModuleProvider, IModuleIdFactory, ModuleIdFactory } from "@bstock/modular";
import() { ClusterModule, MongoDBModule, OtherDependencyModule } from "various/other/locations";
```
```js
const idFactory = new ModuleIdFactory();
const myId = idFactory.create("./app/modules/moduleId");
@BModule(
   myId  // Your identifer that other modules may
         // use to idenfify a dependency on its co
         // content.
   [   // Identified modules to install in
       // your the current container before your.
       ClusterModule.myId, 
       MongoDbModule.myId, 
       OtherDependencyModule.myId
  ],
  "/path/to/a/subcontainer" // Optional, and only
                     // for opting in to 
                     // isolation provided by a
                     // child container.,
 [ //Child-container specific dependencies]
   
)
```

## Module content

Modules can create injectable component bindings in the body of their module provider.

```js
Sample TODO
```

The more interesting cases involve using services from other modules to create components.  This happens through three facilities:

* Extensions
* Plugins
* Configuration 

These facilities are layered.  Extensions expose an interface that add new semantics to the framework, and may create a layer for plugins to provide the variations in that functionality.
  
The resource connectivity extension is an example that uses plugins to provide specific kinds of remote connectivity.  Not all extensions require a plugin layer.   Neither the Event Sourcing nor the RPC extensions expose a plugin layer.



## Opaque Tokens

The core framework encourages a convention of using opaque tokens rather than strings or impementation classes as the Inversify "ServiceAttribute" keys when binding injectable/injected components.

Components created through configfuration-driven plugins or extensions typically accept a name-based qualifier for disambuguating bindings.  For example, if an application submits two different sets of MongoDB connection config objects, those objects will each have a name property that will be necessary to disambiguate which connection to use when a dependency for the resulting MongoDB connectivity adapter is requested.

Extensions to the Modular core often need some abstraction more than the "type" placeholder implemented by its built in use case for Opaque Tokens, the "TypeToken".  Extensions may create additional subtypes, such as the ModelType and CQRoleToken types defined by Event Sourcing, or the TaskType token used by the Sharding extension.  Some new token types may have user created instances, but not all.

Extension token types have been implemented to look and feel similarly across all tha variants, without giving up strong typing to prevent accidental mis-use.  There are enough nuances of diffence to merit reading the documentation before attempting to apply them.

## Child Containers

## Reactive Containers

