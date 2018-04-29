import {RandomArtModel} from './random-art-model.class';
import {Canvas} from './canvas-consumer.interface';
import {Observable} from 'rxjs/Observable';
import {PointMap} from './point-map.class';

export interface CanvasAndPlotModel
{
  readonly genModel: RandomArtModel;
  readonly canvas: Canvas;
  readonly paintContext: CanvasRenderingContext2D;
  readonly pointMapBatches: Observable<Observable<PointMap>>;
  readonly outputFilePath: string;
}
