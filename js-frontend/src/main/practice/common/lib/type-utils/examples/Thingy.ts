import {
  AutoFluentBuilderWrapper, buildMethodFactory, copyMethodFactory, deriveDataBuilder,
  reflectiveBuildMethodFactory,
  reflectiveCopyMethodFactory
} from '../../metautils/datamodel/Builders';
import {DataMixin} from '../../metautils/datamodel/DataMixin';
import {Fluent} from '../../metautils/datamodel/IndexedTypes';

/**
 * Created by jheinnic on 4/27/17.
 */
const ThingyBuilder = deriveDataBuilder<Thingy>(['one', 'two', 'three', 'four', 'five']);

export class Thingy
{
  static build = reflectiveBuildMethodFactory<Thingy>(ThingyBuilder, Thingy);

  five: number;

  one: boolean

  two: string;

  three: 'U';

  four: null;

  copy = reflectiveCopyMethodFactory<Thingy>(ThingyBuilder, Thingy);
}

const buildIt: AutoFluentBuilderWrapper<Thingy> = new ThingyBuilder(new Thingy());
const one: Fluent<Thingy> = buildIt.one(true);

buildIt.one(true)
  .two('string')
  .three('U')
  .four(null)
  .five(7);
console.log(
  JSON.stringify(
    buildIt.unwrap()));


// const Foo = DataMixin<Thingy>(Thingy, ['one', 'two', 'three', 'four', 'five']);

const thing = Thingy.build(buildIt2 => {
  buildIt2.three('U')
    .one(true)
    .two('string')
    .five(7);
});

console.log(
  JSON.stringify(thing));

const thing2 = thing.copy(buildIt3 => {
  buildIt3.one(true)
    .three('U')
    .four(null)
    .one(false);
});

console.log(
  JSON.stringify(thing2));

