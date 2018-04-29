import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

// Project [0...(pointCount)] onto [minValue...maxValue] by affine matrix transformation in such a way that
// the set is symmetrically balanced (e.g. same distance between any consecutive points and the distance
// between either max or min and the center point are identical.  To do this, consider the symmetrical set
// of pointCount+1 items, and enumerate the values at the midpoint between any two points.
export function computeAffinePixelPoints(pointCount: number, minValue: number, maxValue: number)
{
  const initial = 0.5;
  const translate = minValue;
  const scale = (maxValue - minValue) / pointCount;

  const pointsArray = [];
  for (let ii = initial; ii < pointCount; ii += 1) {
    pointsArray.push((ii * scale) + translate);
  }
  return pointsArray;
}

/**
 * Find the largest possible divisor of multiplicand that no greater than maxDivisor.
 *
 * @param multiplicand
 * @param maxDivisor
 */
export function findOptimalDivisor(multiplicand: number, maxDivisor: number) {
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

export function derivePointMaps(widthPoints: number[], heightPoints: number[]): Observable<PointMap> {
  return Observable.from<number>(widthPoints)
    .flatMap<number, [Point, Point]>((xVal: number, xIdx: number) => {
      return Observable.from<number>(heightPoints)
        .map<number, [Point, Point]>((yVal: number, yIdx: number) => {
          return [
            new Point(undefined, {
              x: xIdx,
              y: yIdx
            }),
            new Point(undefined, {
              x: xVal,
              y: yVal
            })
          ];
        });
    })
    .map<[Point, Point], PointMap>(function (pair: [Point, Point], index: number) {
      return new PointMap(pair[0].withId(index), pair[1]);
    });
}

export class Point
{
  public readonly x: number = 0;

  public readonly y: number = 0;

  static asString(point: Point): string
  {
    let retVal: string;

    if (typeof point === 'object') {
      retVal = `<${point.x}, ${point.y}>`;
    } else if (typeof point === 'number') {
      retVal = `number(${point})`;
    } else {
      retVal = `**unknown point(${point})**`;
    }

    return retVal;
  }

  public constructor(point?: Point, override?: Partial<Point>)
  {
    Object.assign(this, point, override);
  }

  protected getLabel() { return 'Point'; }

  public withId(id: number)
  {
    return new IndexedPoint(this, {id: id});
  }

  public withFillStyle(fillStyle: string)
  {
    return new PaintablePoint(this, {fillStyle: fillStyle});
  }
}


export class IndexedPoint extends Point
{
  public readonly id: number = 0;

  public constructor(base?: Point, override?: Partial<IndexedPoint>)
  {
    super(base, override);
    Object.assign(this, base, override);
  }

  protected getLabel() { return 'IndexedPoint -> ' + super.getLabel(); }
}


export class PaintablePoint extends IndexedPoint
{
  public readonly fillStyle: FillStyle = 'rgb(0,0,0)';

  static asString(paintPoint: PaintablePoint)
  {
    let retVal: string;
    if (typeof paintPoint === 'object') {
      retVal = `(${paintPoint.fillStyle}) at <${paintPoint.x},${paintPoint.y}>`;
    } else {
      retVal = `**unknown paint point(${paintPoint})**`;
    }
    return retVal;
  }

  public constructor(base?: Point, override?: Partial<PaintablePoint>)
  {
    super(base, override);
    Object.assign(this, base, override);
  }

  protected getLabel() { return 'PaintablePoint ->' + super.getLabel(); }

  public withId(id: number): PaintablePoint
  {
    return new PaintablePoint(this, {id: id});
  }

  public paintTo(context: CanvasRenderingContext2D)
  {
    context.fillStyle = this.fillStyle;
    context.fillRect(this.x, this.y, 1, 1);
  }
}

export class PointMap
{
  static asString(pointMap: PointMap): string
  {
    let retVal: string;

    if (typeof pointMap === 'object') {
      retVal = `${Point.asString(pointMap.from)} -> ${Point.asString(pointMap.to)}`;
    } else if (typeof pointMap === 'number') {
      retVal = `number(${pointMap})`
    } else {
      retVal = `**unknown map(${pointMap})**`;
    }

    return retVal;
  }

  public constructor(readonly from: IndexedPoint, readonly to: Point) { }

  get id(): number
  {
    return this.from.id;
  }
}

export type FitOrFillType = 'fit' | 'fill' | 'square';

export type FillStyle = string | CanvasGradient | CanvasPattern;

