/**
 * Created by jheinnic on 3/24/17.
 */
import {Fluent, Keys} from './IndexedTypes';
import {deriveDataBuilder} from './Builders';
import {BuildMethod, Director, MixinConstructor, UpdateConstructor} from './CallSignatures';
import {getType, Type} from 'reflect-helper';

// interface DataConstructor<T> extends UpdateConstructor<Object>
// {
  // constructor: Function;
  // build: BuildMethod<T, Fluent<T>>;
// }

// TODO: Constrain this to a base model for domain models?
export function DataMixin<B>(Base: MixinConstructor)
{
  const clazz: Type = getType(Base);
  const properties = clazz.properties.map((prop) => prop.name as keyof B);
  console.log(properties);
  const DataBuilder = deriveDataBuilder<B>(properties);

  return class MixedInData extends Base
  {
    static build(director: Director<Fluent<B>>): MixedInData
    {
      const wrapper = new DataBuilder(clazz.createInstance());
      director(wrapper);
      return wrapper.value as any as MixedInData;
    };

    constructor(base?: B, delta?: Partial<B>)
    {
      super(base, delta);
    }

    copy(director: Director<Fluent<B>>)
    {
      const wrapper = new DataBuilder(this as any as B);
      director(wrapper);
      return new MixedInData(wrapper.unwrap());
    };
  }
}

