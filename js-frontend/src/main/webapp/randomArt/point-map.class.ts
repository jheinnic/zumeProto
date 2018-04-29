import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import * as RandomArtwork from './genjs';
import {RandomArtModel} from './random-art-model.class';

// export type FitOrFillType = 'fit' | 'fill' | 'square';

// export type FillStyle = string | CanvasGradient | CanvasPattern;

export class PointMap
{
  /**
   * Find the largest possible divisor of multiplicand that no greater than maxDivisor.
   *
   * @param multiplicand
   * @param maxDivisor
   */
  public static findOptimalDivisor(multiplicand: number, maxDivisor: number)
  {
    if ((multiplicand % maxDivisor) === 0) {
      return maxDivisor;
    }

    let ii;
    const sqrt = Math.floor(Math.sqrt(multiplicand));
    if (sqrt > maxDivisor) {
      for (ii = maxDivisor; ii > 1; ii--) {
        if ((multiplicand % ii) === 0) {
          return ii;
        }
      }

      return 1;
    } else {
      let highLowHigh = 0;
      for (ii = sqrt; highLowHigh === 0; ii--) {
        if ((multiplicand % ii) === 0) {
          highLowHigh = ii;
        }
      }

      let firstFound = true;
      let lowLowHigh = 0;
      for (ii = 2; (ii < highLowHigh) && (lowLowHigh === 0); ii++) {
        if ((multiplicand % ii) === 0) {
          lowLowHigh = multiplicand / ii;
          if (lowLowHigh > maxDivisor) {
            lowLowHigh = 0;
            firstFound = false;
          }
        }
      }
      if ((lowLowHigh > 0) && firstFound) {
        return lowLowHigh;
      }

      const altHighLowHigh = multiplicand / highLowHigh;
      if (altHighLowHigh <= maxDivisor) {
        highLowHigh = altHighLowHigh;
      }

      if (lowLowHigh > highLowHigh) {
        highLowHigh = lowLowHigh;
      }

      return highLowHigh
    }
  }

// Project [0...(pointCount)] onto [minValue...maxValue] by affine matrix transformation in such a way that
// the set is symmetrically balanced (e.g. same distance between any consecutive points and the distance
// between either max or min and the center point are identical.  To do this, consider the symmetrical set
// of pointCount+1 items, and enumerate the values at the midpoint between any two points.
  public static computeAffinePixelPoints(
    pointCount: number,
    minValue: number,
    maxValue: number): Observable<number>
  {
    const initial = 0.5;
    const translate = minValue;
    const scale = (maxValue - minValue) / pointCount;

    const pointsArray = [];
    for (let ii = initial; ii < pointCount; ii += 1) {
      pointsArray.push((ii * scale) + translate);
    }

    Observable.range(0, pointCount)
      .map((value) => ((value + 0.5) * scale) + translate)
      .subscribe(console.log);
    return Observable.range(0, pointCount)
      .map((value) => ((value + 0.5) * scale) + translate);
  }

  public static derivePointMaps(
    widthPoints: Observable<number>,
    heightPoints: Observable<number>): Observable<PointMap>
  {
    return widthPoints.flatMap<number, PointMap>((xVal: number, xIdx: number) => {
      return heightPoints.map<number, PointMap>((yVal: number, yIdx: number) => {
        // console.log(xIdx, yIdx, ' => ', xVal, yVal);
        return new PointMap(xIdx, yIdx, xVal, yVal);
      });
    });
  }

  public constructor(
    private readonly xPlot = 0,
    private readonly yPlot = 0,
    private readonly xCalc = 0,
    private readonly yCalc = 0)
  { }

  public render(genModel: RandomArtModel, context: CanvasRenderingContext2D): boolean
  {
    context.fillStyle = genModel.compute_pixel(this.xCalc, this.yCalc);
    context.fillRect(this.xPlot, this.yPlot, 1, 1);
    return true;
  }

  public toString(): string
  {
    return `${this.xPlot},${this.yPlot} from ${this.xCalc},${this.yCalc}`;
  }
}

