import {Server} from 'hapi';

export type HapiAugmenter = (server: Server) => void | any | any[];

export interface IHapiExtension {
   register( next: HapiAugmenter ): HapiAugmenter;
}