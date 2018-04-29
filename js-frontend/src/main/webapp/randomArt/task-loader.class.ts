import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/windowCount';

import {PointMap} from './point-map.class';
import {RandomArtModel} from './random-art-model.class';
import {Canvas} from './canvas-consumer.interface';
import {CanvasAndPlotModel} from './canvas-and-plot-model.interface';
import {ITaskContentAdapter} from './task-content-adapter.interface';

export class TaskLoader<Content>
{
  private readonly widthPoints: Observable<number>;

  private readonly heightPoints: Observable<number>;

  private readonly fitOrFill: 'square' | 'fit' | 'fill';

  private readonly actualBufferSize: number;

  private readonly iterationCount: number;

  private readonly pixelCount: number;

  private readonly pointMaps: Observable<PointMap>;

  private readonly pointMapBatches: Observable<Observable<PointMap>>;

  private readonly inputSource: IterableIterator<Content>;

  constructor(
    private readonly contentAdapter: ITaskContentAdapter<Content>, private readonly maxBufferSize: number )
  {
    let xScale = 1.0;
    let yScale = 1.0;

    if (this.contentAdapter.pixelWidth === this.contentAdapter.pixelHeight) {
      if (contentAdapter.fitOrFill && contentAdapter.fitOrFill !== 'square') {
        throw new Error('fitOrFill must be square if width === height');
      } else {
        this.fitOrFill = 'square';
      }
    } else if (contentAdapter.fitOrFill === 'square') {
      throw new Error('fitOrFill cannot be square unless width === height');
    } else if (this.contentAdapter.pixelWidth > this.contentAdapter.pixelHeight) {
      if (contentAdapter.fitOrFill === 'fill') {
        xScale = this.contentAdapter.pixelWidth / this.contentAdapter.pixelHeight;
        this.fitOrFill = 'fill';
      } else {
        yScale = this.contentAdapter.pixelHeight / this.contentAdapter.pixelWidth;
        this.fitOrFill = 'fit';
      }
    } else if (contentAdapter.fitOrFill === 'fill') {
      yScale = this.contentAdapter.pixelHeight / this.contentAdapter.pixelWidth;
      this.fitOrFill = 'fill';
    } else {
      xScale = this.contentAdapter.pixelWidth / this.contentAdapter.pixelHeight;
      this.fitOrFill = 'fit';
    }

    this.pixelCount = contentAdapter.pixelWidth * contentAdapter.pixelHeight;
    this.widthPoints =
      PointMap.computeAffinePixelPoints(this.contentAdapter.pixelWidth, -1 * xScale, xScale);
    this.heightPoints =
      PointMap.computeAffinePixelPoints(this.contentAdapter.pixelHeight, -1 * yScale, yScale);
    this.pointMaps =
      PointMap.derivePointMaps(this.widthPoints, this.heightPoints);
    this.actualBufferSize =
      PointMap.findOptimalDivisor(this.pixelCount, this.maxBufferSize);
    this.iterationCount = this.pixelCount / this.actualBufferSize;

    // this.pointMaps.subscribe(
    //   (pointMap) => {
        // console.log(`Calculation includes ${pointMap}`);
      // }
    // ).unsubscribe();

    // Compute all point maps into a ReplaySubject of ReplaySubjects.  The outer ReplaySubject caches
    // references to the inner ReplaySubjects, each of which caches a partial run of pre-computed point
    // mapping results.  Any random art image painted for a given resolution will utilize the exact same
    // coordinate mapping from model-space to paint-space, and the expected use case is to paint many
    // images at the same resolution, so it is worth the storage expense to conserve on computation here.
    console.log(`actualBufferSize = ${this.actualBufferSize}`);
    console.log(`iterationCount = ${this.iterationCount}`);
    this.pointMapBatches = this.pointMaps.windowCount<PointMap>(this.actualBufferSize)
      .take(this.iterationCount + 1)
      .map(window => {
        const retVal = window.shareReplay(this.actualBufferSize);
        retVal.count().subscribe((value) => {
          console.log(`Window-time count yields ${value} point maps`);
        }).unsubscribe();
        return retVal;
      })
      .shareReplay(this.iterationCount + 1);

    // this.pointMapBatches.count().subscribe(
    //   (input) => {
    //     console.log(`Expected ${this.iterationCount} batches and counted ${input}`);
    //   }
    // ).unsubscribe();

    // this.pointMapBatches.count().subscribe(
    //   (input) => {
    //     console.log(`Expected ${this.iterationCount} batches and counted ${input}`);
    //   }
    // ).unsubscribe();

    // this.pointMapBatches.subscribe(
    //   (input) => {
    //     console.log('Batch contents: ');
    //     input.count().subscribe(
    //       (pointMap) => {
    //         console.log(`Batch contains ${pointMap}`);
    //       }
    //     ).unsubscribe();
    //   }
    // ).unsubscribe();

    this.inputSource = contentAdapter.allocateIterator();
  }

  get pixelWidth(): number {
    return this.contentAdapter.pixelWidth;
  }

  get pixelHeight(): number {
    return this.contentAdapter.pixelHeight;
  }

  public assignNextTask(canvas: Canvas): CanvasAndPlotModel
  {
    console.log('Assigning a task for canvas received');
    const paintContext = canvas.getContext('2d');
    paintContext.clearRect(0, 0, canvas.width, canvas.height);
    paintContext.fillStyle = 'rgb(0,0,0)';
    paintContext.fillRect(0, 0, canvas.width, canvas.height);

    const sourceContent: Content = this.inputSource.next().value;
    const outputFilePath = this.contentAdapter.convertToImagePath(sourceContent);
    const seedPhrase = this.contentAdapter.convertToModelString(sourceContent);
    const genModel = new RandomArtModel(seedPhrase);

    return {
      canvas,
      genModel,
      paintContext,
      outputFilePath,
      pointMapBatches: this.pointMapBatches
    } as CanvasAndPlotModel;
  }
}

