import {TaskContentAdapter} from './task-content-adapter.interface';
import {ImageDimensions} from './image-dimensions.interface';
import * as path from 'path';

export interface NameModel
{
  readonly firstName: Array<string>;
  readonly lastName: Array<string>;
  readonly generation: number;
}

export interface NameModelGenConfig
{
  givenNameCount: number,
  givenNameWords: number,
  familyNameCount: number,
  familyNameWords: number,
  middleNameCount: number,
  firstGeneration?: number
}

export class NameModelAdapter extends TaskContentAdapter<NameModel>
{
  private readonly dimensionDir: string;

  constructor(
    imageDimensions: ImageDimensions,
    private readonly genConfig: NameModelGenConfig,
    private readonly chance: Chance.Chance)
  {
    super(imageDimensions);
    this.dimensionDir =
      `${imageDimensions.pixelWidth.toString()}x${imageDimensions.pixelHeight.toString()}`;
  }

  public allocateIterator(): IterableIterator<NameModel>
  {
    return taskGenerator(this.genConfig, this.chance);
  }

  public convertToModelString(sourceContent: NameModel): string
  {
    return sourceContent.firstName.concat(sourceContent.lastName)
      .join(' ');
  }

  public convertToImagePath(sourceContent: NameModel): string
  {
    return path.join(
      this.dimensionDir,
      // sourceContent.lastName.join('-'),
      sourceContent.generation.toString(),
      `${sourceContent.firstName.join('-')}__${sourceContent.lastName.join('-')}.png`
    );
  }
}


export function* taskGenerator(
  genConfig: NameModelGenConfig, chance: Chance.Chance): IterableIterator<NameModel>
{
  function createNameParts(nameCount: number, wordCount: number): Array<Array<string>>
  {
    const retVal = new Array(nameCount);
    let ii = 0;
    while (ii < nameCount) {
      let jj = 0;
      const nameVal = new Array(wordCount);
      while (jj < wordCount) {
        const wordLen = {
          length: chance.rpg('1d5')[0] + chance.rpg('1d4')[0] + 1
        };
        const nextWord = chance.word(wordLen);
        nameVal[jj] = nextWord.charAt(0)
          .toUpperCase() + nextWord.substring(1);
        jj = jj + 1;
      }
      retVal[ii] = nameVal;
      ii = ii + 1;
    }

    return retVal;
  }

  let generation = !!genConfig.firstGeneration ? genConfig.firstGeneration : 1;
  while (true) {
    let givenNames = createNameParts(genConfig.givenNameCount, genConfig.givenNameWords);
    const familyNames = createNameParts(genConfig.familyNameCount, genConfig.familyNameWords);

    console.log('Next batch of names have given=', givenNames, '; family=', familyNames);
    if (genConfig.middleNameCount > 0) {
      const middleNames = createNameParts(genConfig.middleNameCount, 1);
      const newGivenNames = new Array<Array<string>>(genConfig.givenNameCount * genConfig.middleNameCount);
      let ii = 0;
      for (const firstName of givenNames) {
        for (const middleName of middleNames) {
          newGivenNames[ii] = firstName.concat(middleName[0]);
          ii = ii + 1;
        }
      }
      givenNames = newGivenNames;
    }

    for (const firstName of givenNames) {
      for (const lastName of familyNames) {
        yield {
          firstName,
          lastName,
          generation
        } as NameModel;
      }
    }

    generation = generation + 1;
  }
}

