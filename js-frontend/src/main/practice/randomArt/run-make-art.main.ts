import {NameModel, NameModelAdapter, NameModelGenConfig, taskGenerator} from './name-model-adapter.class';
import {TaskLoader} from './task-loader.class';
import {CanvasPlotter} from './canvas-plotter.service';
import {CanvasWriter} from './canvas-writer.class';
import {CanvasProvider} from './canvas-provider.service';
import {RandomArtGenerator} from './random-art-generator.service';

import Chance = require('chance');
import {ITaskContentAdapter} from './task-content-adapter.interface';
import {ImageDimensions} from './image-dimensions.interface';

const imageDimensions: ImageDimensions = {
  pixelWidth: 256,
  pixelHeight: 256,
  fitOrFill: 'square'
};
const nameModelGenConfig: NameModelGenConfig = {
  givenNameCount: 4,
  givenNameWords: 1,
  familyNameCount: 3,
  familyNameWords: 1,
  middleNameCount: 3,
  firstGeneration: 100
};
const myChance = new Chance();
const maxBatchSize = 9000;
const outputRootDir = '/Users/jheinnic/Documents/randomArt3';

const myContentAdapter: ITaskContentAdapter<NameModel> =
  new NameModelAdapter(imageDimensions, nameModelGenConfig, myChance);

const myTaskLoader = new TaskLoader<NameModel>(myContentAdapter, maxBatchSize);
// 896, 896, 65500, 'square'
// 120, 120, 50000, 'square'

const myCanvasProvider = new CanvasProvider();
const myCanvasPlotter = new CanvasPlotter();
const myCanvasWriter = new CanvasWriter(outputRootDir);
const facade =
  new RandomArtGenerator(myCanvasProvider, myTaskLoader, myCanvasPlotter, myCanvasWriter);

facade.launchCanvas();
