import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import {PointMap} from './point-map.class';
import * as RandomArtwork from './genjs';

export class RandomArtModel
{
  private genModel: any;

  public constructor(public readonly seedPhrase: string) {
    this.genModel = RandomArtwork.new_picture(seedPhrase);
  }

  public render(pointMap: PointMap, context: CanvasRenderingContext2D): void
  {
    pointMap.render(this.genModel, context);
  }

  public compute_pixel(xCalc: number, yCalc: number)
  {
    return RandomArtwork.compute_pixel(this.genModel, xCalc, yCalc);
  }
}

