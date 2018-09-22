import 'reflect-metadata';
import {Data} from '../mixins/Data';
import {DataMixin} from '../datamodel/DataMixin';
import {Fluent} from '../datamodel/IndexedTypes';
import {AutoFluentBuilderWrapper, deriveDataBuilder} from '../datamodel/Builders';
import {getType, Type} from 'reflect-helper';

class Testy
{
   public readonly one: number = 4;

   public readonly two: string = 'happy';

   public readonly three: boolean = true;

   constructor(base: Partial<Testy> = {}, delta: Partial<Testy> = {})
   {
      Object.assign(this, base, delta);
   }
}

const DataTesty = DataMixin<Testy>(Testy);
const one = DataTesty.build((builder: Fluent<Testy>) => { builder.one(3); });
console.log(one);


const clazz: Type = getType(Testy);
const properties = clazz.properties.map((prop) => prop.name as keyof Testy);
const DataTestyTwoBuilder = deriveDataBuilder<Testy>(properties);

const DataTestyTwo = Data<Testy, AutoFluentBuilderWrapper<Testy>>(Testy, DataTestyTwoBuilder);
const two = DataTestyTwo.build((builder: Fluent<Testy>) => { builder.one(3); });
console.log(two);
