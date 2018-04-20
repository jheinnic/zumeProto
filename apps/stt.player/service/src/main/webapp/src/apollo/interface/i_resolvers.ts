import {List} from 'lodash';
import {string} from 'joi';

export type IResolvers = {
   [Type: string]: {
      // [Attr: string]: <R extends Object>(...args: any[]) => R | R[] | List<R> | Set<R> | Array<R>
      [Attr: string]: (...args: any[]) => any
   }
};