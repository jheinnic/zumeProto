/**
 * Created by jheinnic on 1/7/17.
 */
import {Injectable, Inject} from '@angular/core';
import Chance = require('chance');

@Injectable()
export class PhraseGeneratorService {
  constructor( @Inject(Chance.Chance) private readonly chance: Chance.Chance) { }

  public createNextPhrase() {
    const lenOne = {
      length: this.chance.rpg('1d5')[0] + this.chance.rpg('1d3')[0] + 1
    };
    const lenTwo = {
      length: this.chance.rpg('1d5')[0] + this.chance.rpg('1d3')[0] + 1
    };

    return `${this.chance.word(lenOne)} ${this.chance.word(lenTwo)}`;
  }
}
