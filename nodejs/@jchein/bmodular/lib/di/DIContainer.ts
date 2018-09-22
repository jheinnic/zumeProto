import {Container, interfaces} from 'inversify';
import {makeProvideDecorator} from 'inversify-binding-decorators';

export const DIContainer = new Container();
export const provideDI = makeProvideDecorator(DIContainer);