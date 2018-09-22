import {interfaces} from 'inversify';

export class ContainerModuleProvider implements interfaces.ContainerModule {
   private _finalized = false;

   constructor( private readonly _guid: string, private _registry: interfaces.ContainerModuleCallBack ) {
   }

   get guid(): string {
      return this._guid
   }

   get registry(): interfaces.ContainerModuleCallBack {
      if (! this._finalized) {
         throw Error('Module provider has not yet been finalized')
      }

      return this._registry;
   }

   set registry(value: interfaces.ContainerModuleCallBack) {
      if (this._finalized) {
         throw Error('Module provider has been finalized')
      }

      this._registry = value;
   }

   finalize() {
      this._finalized = true;
   }

   peek(): interfaces.ContainerModuleCallBack {
      return this._registry;
   }
}

