import {global} from './pseudo_global';
/**
 * The {@link Reflector} used to access metadata about symbols.
 */
global['Reflect'] = Reflect;

import {ReflectionCapabilities} from "./reflection_capabilities";
import {Reflector} from "./reflector";
export const reflector = new Reflector(new ReflectionCapabilities());

export * from './platform_reflection_capabilities';
export * from './reflector_reader';
export * from './decorator_metadata';
export * from './decorators';
export * from './annotator';
export * from './class';
export * from './types';
