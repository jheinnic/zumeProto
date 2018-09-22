/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {PlatformReflectionCapabilities} from './platform_reflection_capabilities';
import {ReflectorReader} from './reflector_reader';
import {Type, GetterFn, MethodFn, SetterFn} from './types';

export {PlatformReflectionCapabilities} from './platform_reflection_capabilities';
export {ReflectorReader} from './reflector_reader';
export {GetterFn, MethodFn, SetterFn} from './types';

/**
 * Provides access to reflection data about symbols. Used internally by Angular
 * to power dependency injection and compilation.
 */
export class Reflector extends ReflectorReader {
  constructor(public reflectionCapabilities: PlatformReflectionCapabilities) { super(); }

  updateCapabilities(caps: PlatformReflectionCapabilities) { this.reflectionCapabilities = caps; }

  factory(type: Type<any>): Function { return this.reflectionCapabilities.factory(type); }

  parameters(typeOrFunc: Type<any>): any[][] {
    return this.reflectionCapabilities.parameters(typeOrFunc);
  }

  annotations(typeOrFunc: Type<any>): any[] {
    return this.reflectionCapabilities.annotations(typeOrFunc);
  }

  propMetadata(typeOrFunc: Type<any>): {[key: string]: any[]} {
    return this.reflectionCapabilities.propMetadata(typeOrFunc);
  }

  methodMetadata(typeOrFunc: Type<any>): {[key: string]: any[]} {
    return this.reflectionCapabilities.methodMetadata(typeOrFunc);
  }

  hasMethod(type: any, methodName: string): boolean {
    return this.reflectionCapabilities.hasMethod(type, methodName);
  }

  getter(name: string): GetterFn { return this.reflectionCapabilities.getter(name); }

  setter(name: string): SetterFn { return this.reflectionCapabilities.setter(name); }

  method(name: string): MethodFn { return this.reflectionCapabilities.method(name); }

  importUri(type: any): string { return this.reflectionCapabilities.importUri(type); }

  // resolveIdentifier(name: string, moduleUrl: string, members: string[], runtime: any): any {
  //   return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, members, runtime);
  // }

  // resolveEnum(identifier: any, name: string): any {
  //   return this.reflectionCapabilities.resolveEnum(identifier, name);
  // }
}
