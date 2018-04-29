/**
 * Created by jheinnic on 3/24/17.
 */
import {Ctor, Instance} from 'fluent-interface-builder';
import {Director, MixinConstructor} from '../datamodel/CallSignatures';

// TODO: Constrain this to a base model for domain models?
export function Data<T, TI extends Instance<T>>(
  TBase: MixinConstructor,
  Builder: Ctor<T, TI>)
{
  // const Builder: Ctor<T, TI> = bldr.value;

  return class MixedInNamed extends TBase
  {
    static build(director: Director<TI>): MixedInNamed
    {
      const builder: TI = new Builder(new TBase() as T) as TI;
      director.apply(builder);
      return builder.value as any as MixedInNamed
    }

    copy(director: Director<TI>): MixedInNamed
    {
      const builder: TI = new Builder(new TBase(this) as T) as TI;
      director.apply(builder);
      return builder.value as any as MixedInNamed
    }
  }
}
