import * as Stream from 'stream';
import {queue} from 'rxjs/scheduler/queue';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/windowCount';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/fromPromise';
import {PointMap} from './point-map.class';
import * as RandomArtFactory from './genjs';
import * as path from 'path';
import * as fs from 'fs';
import {Injectable} from '@angular/core';
import {findOptimalDivisor} from './point.datamodel';
import {RandomArtModel} from './random-art-model.class';

require('reflect-metadata');

import CanvasImpl = require('canvas');
import Chance = require('chance');
import {Canvas} from './canvas-consumer.interface';

@Injectable()
export class RandomArtSource<Content>
{
  constructor(
    public readonly id: string,
    public readonly iterator: IterableIterator<Content>,
    public readonly adapter: TaskContentAdapter<Content>)
  {

  }
}

export class PainterFactory<Content>
{
  private readonly subscription: Subscription;

  constructor(
    private readonly taskLoader: TaskLoader<Content>,
    private readonly painter: Painter,
    private readonly canvasWriter: CanvasWriter<Content>,
    private readonly availableCanvasSubject: Subject<Canvas>)
  {
    this.subscription =
      this.availableCanvasSubject.map(
        freeCanvas => this.taskLoader.assignNextTask(freeCanvas)
      )
        .delayWhen(
          taskWithModel => this.painter.paintThenEmit(taskWithModel)
        )
        .concatMap(
          taskWithModel => Observable.fromPromise(
            this.canvasWriter.writeOutputFile(taskWithModel))
        )
        .multicast(this.availableCanvasSubject)
        .refCount()
        .subscribe(
          (recycledCanvas: Canvas) => {
            console.log('Observed recycling of canvas on completion of a painting task');
          },
          (error: any) => {
            console.error('Observed error from canvas pipeline!', error);
          }
        );
  }

  public launchCanvas()
  {
    const newCanvas: Canvas = this.taskLoader.allocateNewCanvas();
    this.availableCanvasSubject.next(newCanvas);
    console.log('Assigned a canvas for launch');
  }
}


class TaskLoader<Content>
{
  private readonly widthPoints: Observable<number>;

  private readonly heightPoints: Observable<number>;

  private readonly actualBufferSize: number;

  private readonly iterationCount: number;

  private readonly pixelCount: number;

  private readonly pointMaps: Observable<PointMap>;

  private readonly pointMapBatches: Observable<Observable<PointMap>>;

  constructor(
    private readonly inputSource: IterableIterator<Content>,
    private readonly contentAdapter: TaskContentAdapter<Content>,
    private readonly pixelWidth: number,
    private readonly pixelHeight: number,
    private readonly maxBufferSize: number,
    private readonly fitOrFill?: 'square' | 'fit' | 'fill')
  {
    let xScale = 1.0;
    let yScale = 1.0;

    if (this.pixelWidth === this.pixelHeight) {
      if (this.fitOrFill && this.fitOrFill !== 'square') {
        throw new Error('fitOrFill must be square if width === height');
      } else {
        this.fitOrFill = 'square';
      }
    } else if (this.fitOrFill === 'square') {
      throw new Error('fitOrFill cannot be square unless width === height');
    } else if (this.pixelWidth > this.pixelHeight) {
      if (this.fitOrFill === 'fill') {
        xScale = this.pixelWidth / this.pixelHeight;
      } else {
        yScale = this.pixelHeight / this.pixelWidth;
        this.fitOrFill = 'fit';
      }
    } else if (this.fitOrFill === 'fill') {
      yScale = this.pixelHeight / this.pixelWidth;
    } else {
      xScale = this.pixelWidth / this.pixelHeight;
      this.fitOrFill = 'fit';
    }

    this.pixelCount = pixelWidth * pixelHeight;
    this.widthPoints = PointMap.computeAffinePixelPoints(this.pixelWidth, -1 * xScale, xScale);
    this.heightPoints = PointMap.computeAffinePixelPoints(this.pixelHeight, -1 * yScale, yScale);
    this.pointMaps = PointMap.derivePointMaps(this.widthPoints, this.heightPoints);
    this.actualBufferSize = findOptimalDivisor(this.pixelCount, this.maxBufferSize);
    this.pointMapBatches = this.pointMaps.windowCount<PointMap>(this.actualBufferSize)
      .map(window => window.shareReplay(this.actualBufferSize))
      .shareReplay(this.iterationCount);
    this.iterationCount = this.pixelCount / this.actualBufferSize;
  }

  public allocateNewCanvas(): Canvas
  {
    const canvas = new CanvasImpl(this.pixelWidth, this.pixelHeight) as Canvas;
    const paintContext = canvas.getContext('2d');
    paintContext.patternQuality = 'best';
    paintContext.filter = 'best';
    paintContext.antialias = 'subpixel';

    return canvas;
  }

  public assignNextTask(canvas: Canvas): CanvasAndPlotModel<Content>
  {
    console.log('Assigning a task for canvas received');
    const paintContext = canvas.getContext('2d');
    paintContext.clearRect(0, 0, canvas.width, canvas.height);
    paintContext.fillStyle = 'rgb(0,0,0)';
    paintContext.fillRect(0, 0, canvas.width, canvas.height);

    const sourceContent: Content = this.inputSource.next().value;
    const modelPhrase = this.contentAdapter.convertToModelString(sourceContent);
    // const genModel = RandomArtFactory.new_picture(modelPhrase);
    const genModel = new RandomArtModel(modelPhrase);

    return {
      canvas,
      genModel,
      paintContext,
      sourceContent,
      pointMapBatches: this.pointMapBatches
    };
  }
}


export class Painter
{
  paintThenEmit(nextTask: CanvasAndPlotModel<any>): Observable<boolean>
  {
    // Concatenate the reduction of each point map batch to yield an incrementally painted canvas.  The
    // concatenate operator ensures that only one batch is consumed this way at a time.  Then, skip over
    // each concatenated result except the last by reducing the sequence of reduced batches.  The resulting
    // stream will emit a single arbitrary value when the entire painting task is complete.  The value is
    // arbitrary insofar as caller is only interested in knowing when its emitted, not what that value was.
    // A boolean value of true is used to facilitate a simple single() operator at the terminus as a
    // correctness safeguard and expression of intent.
    return nextTask.pointMapBatches.concatMap(
      nextBatch => {
        return nextBatch.observeOn(queue)
          .reduce(
            (acc: PaintingContext, nextPointMap: PointMap) => {
              nextPointMap.render(acc.genModel, acc.paintContext);
              return {
                ...acc,
                plots: (acc.plots + 1)
              };
            }, {
              paintContext: nextTask.paintContext,
              genModel: nextTask.genModel,
              plots: 0
            } as PaintingContext
          )
          .do(ctx => { console.log('Pre-concat post-reduce returning ', ctx); });
      }
    )
      .do(ctx => { console.log('Observed a paint context pass for ', ctx); })
      .reduce((acc: boolean, value: PaintingContext) => acc, true)
      .single((value: boolean) => value)
      .do(ctx => { console.log('Observed a final reduction pass for ', nextTask.sourceContent); });
  }
}

export class CanvasWriter<Content>
{
  private static ensureDirectory(dirPath: string)
  {
    if (fs.existsSync(dirPath)) {
      let isDirectory = false;
      try {
        const stats = fs.statSync(dirPath);
        isDirectory = stats.isDirectory();
      } catch (err) {
        throw Error(dirPath + ' is not an accessible directory: ' + err);
      }

      if (! isDirectory) {
        throw Error(dirPath + ' exists, but is not a directory');
      }
    } else {
      try {
        CanvasWriter.ensureDirectory(path.dirname(dirPath));
        fs.mkdirSync(dirPath);
      } catch (err) {
        throw Error(dirPath + ' did not exist and could not be created: ' + err);
      }
    }
  }

  constructor(
    private readonly outputDir: string,
    private readonly contentAdapter: TaskContentAdapter<Content>)
  {
    if (!this.outputDir.endsWith('/')) {
      this.outputDir = this.outputDir + '/';
    }
    CanvasWriter.ensureDirectory(this.outputDir);
  }

  private ensurePath(filePath: string): string
  {
    if (filePath.startsWith('/', 0)) {
      throw Error('Derived file path, ' + filePath + ', may not be absolute');
    }
    if (filePath.length <= 0) {
      throw Error('Derived file path may not be blank');
    }
    if (filePath.endsWith('/')) {
      throw Error('Derived file path, ' + filePath + ', may not specify a directory');
    }
    if (!filePath.endsWith('.png')) {
      filePath = filePath + '.png';
    }
    if (fs.existsSync(filePath)) {
      throw Error('Derived file path, ' + filePath + ', already exists');
    }
    filePath = path.join(this.outputDir, filePath);

    const dirPath = path.dirname(filePath);
    if (!dirPath.startsWith(this.outputDir)) {
      throw Error('Derived file path, ' + filePath + ', may not traverse above root with ..');
    }
    CanvasWriter.ensureDirectory(dirPath);

    return filePath;
  }

  public writeOutputFile(taskContext: WriteToFileContext<Content>): Promise<Canvas>
  {
    const filePath =
      this.ensurePath(
        this.contentAdapter.convertToImagePath(taskContext.sourceContent)
      );
    console.log('Entered stream writer for ' + filePath);

    try {
      const out = fs.createWriteStream(filePath);
      const stream = taskContext.canvas.createPNGStream();

      return new Promise((resolve, reject) => {
        stream.on('data', function (chunk: any) {
          out.write(chunk);
          // console.log('Writing chunk of data: ', chunk, out.bytesWritten);
        });

        stream.on('end', () => {
          console.log('Saved png to ', filePath, out.bytesWritten);
          out.end(() => {
            resolve(taskContext.canvas);
          });
        });

        stream.on('error', function (err: any) {
          console.error('Brap!', err);
          reject(err);
          out.close();
        });
      });
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(Error('I/O error while attempting to output to ' + filePath + ': ' + err));
      });
    }
  }
}

interface CanvasAndPlotModel<Content>
{
  readonly sourceContent: Content;
  readonly genModel: any;
  readonly canvas: Canvas;
  readonly paintContext: CanvasRenderingContext2D;
  readonly pointMapBatches: Observable<Observable<PointMap>>;
}


interface PaintingContext
{
  readonly genModel: any;
  readonly paintContext: CanvasRenderingContext2D;
  plots: number;
}


interface WriteToFileContext<Content>
{
  readonly sourceContent: Content;
  readonly canvas: Canvas;
}


interface TaskContentAdapter<Content>
{
  convertToModelString(sourceContent: Content): string;

  convertToImagePath(sourceContent: Content): string;
}


interface NameModel
{
  readonly firstName: Array<string>;
  readonly lastName: Array<string>;
  readonly width: number;
  readonly height: number;
  readonly generation: number;
}


class NameModelAdapter implements TaskContentAdapter<NameModel>
{
  public convertToModelString(sourceContent: NameModel): string
  {
    return sourceContent.firstName.concat(sourceContent.lastName)
      .join(' ');
  }

  public convertToImagePath(sourceContent: NameModel): string
  {
    return path.join(
      sourceContent.width.toString() + 'x' + sourceContent.height.toString(),
      sourceContent.generation.toString(),
      sourceContent.lastName.join('-'),
      sourceContent.firstName.join('-') + '__' + sourceContent.lastName.join('-') + '.png'
    );
  }
}


function* taskGenerator(
  givenNameCount: number,
  givenNameWords: number,
  familyNameCount: number,
  familyNameWords: number,
  middleNameCount: number,
  chance: any,
  width: number,
  height: number,
  firstGeneration = 1): IterableIterator<NameModel>
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

  let generation = firstGeneration;
  while (true) {
    let givenNames = createNameParts(givenNameCount, givenNameWords);
    const familyNames = createNameParts(familyNameCount, familyNameWords);

    console.log('Next batch of names have given=', givenNames, '; family=', familyNames);
    if (middleNameCount > 0) {
      const middleNames = createNameParts(middleNameCount, 1);
      const newGivenNames = new Array<Array<string>>(givenNameCount * middleNameCount);
      let ii = 0;
      for (const firstName of givenNames) {
        for (const middleName of middleNames) {
          newGivenNames[ii] = firstName.concat(middleName[0]);
          ii = ii + 1;
        }
      }
      givenNames = newGivenNames;
    }

    console.log('Iterating with ', givenNames, familyNames);
    for (const firstName of givenNames) {
      for (const lastName of familyNames) {
        console.log('Returning: ', firstName, lastName);
        yield {
          firstName,
          lastName,
          width,
          height,
          generation
        };
      }
    }

    generation = generation + 1;
  }
}


const myContentAdapter: TaskContentAdapter<NameModel> = new NameModelAdapter();
const myChance = new Chance();
const myInputTriggerSubject = new Subject<Canvas>();
const myWidth = 640;
const myHeight = 360;
const shapeType = 'fit';
const maxBatchSize = 65500;
const givenNamesPerCycle = 8;
const wordsPerGivenName = 1;
const familyNamesPerCycle = 8;
const wordsPerFamilyName = 2;

const myTaskLoader = new TaskLoader<NameModel>(
  taskGenerator(
    givenNamesPerCycle, wordsPerGivenName,
    familyNamesPerCycle, wordsPerFamilyName, 0,
    myChance, myWidth, myHeight, 140
  ),
  myContentAdapter,
  myWidth, myHeight, maxBatchSize, shapeType
  // 256, 256, 65500, 'square'
  // 896, 896, 65500, 'square'
  // 120, 120, 50000, 'square'
);
const myPainter = new Painter();
const myCanvasWriter = new CanvasWriter<NameModel>(
  '/Users/jheinnic/Documents/randomArt3',
  myContentAdapter);
const facade = new PainterFactory<NameModel>(
  myTaskLoader,
  myPainter,
  myCanvasWriter,
  myInputTriggerSubject);

facade.launchCanvas();
