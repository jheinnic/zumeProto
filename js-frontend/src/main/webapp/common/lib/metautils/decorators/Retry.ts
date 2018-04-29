import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/scan';

// defining the decorator is the same as the defining a
// function with the same name
export type RetryableFunction<T> = (...args: any[]) => Observable<T>;

export type RetryableDescriptor<T> = TypedPropertyDescriptor<RetryableFunction<T>>;

export type FallbackFactory<T> = (err: any) => T;

export function Retry<T>(
  fallback: FallbackFactory<T>, maxTimes: number = 3, delayMs: number = 1000)
{
  return (
    target: Object,
    key: string | symbol,
    descriptor: RetryableDescriptor<T>
  ): RetryableDescriptor<T> => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]): Observable<T> {
      // call original method and augment resulting observable with retry and fallback
      return originalMethod.apply(
        this,
        args)
        .retryWhen((errors: Observable<any>) => {
          return errors.scan(
            (errorCount: number, err: any) => {
              console.log(`Try ${errorCount + 1}`);
              if (errorCount >= maxTimes - 1) {
                throw err;
              }
              return errorCount + 1;
            },
            0)
            .delay(delayMs);
        })
        .catch((err: any) => Observable.of(fallback(err)));
    };

    // return edited descriptor as opposed to overwriting input descriptor
    return descriptor;
  };
}


export function RetryWithTimeout<T>(
  fallback: FallbackFactory<T>, timeoutMs: number, maxTimes: number = 3, delayMs: number = 1000)
{
  return (
    target: Object,
    key: string | symbol,
    descriptor: RetryableDescriptor<T>
  ): RetryableDescriptor<T> => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]): Observable<T> {
      // call original method and augment resulting observable with retry and fallback
      return originalMethod.apply(
        this,
        args)
        .timeout(timeoutMs)
        .retryWhen((errors: Observable<any>) => {
          return errors.scan(
            (errorCount: number, err: any) => {
              console.log(`Try ${errorCount + 1}`);
              if (errorCount >= maxTimes - 1) {
                throw err;
              }
              return errorCount + 1;
            },
            0)
            .delay(delayMs);
        })
        .catch((err: any) => Observable.of(fallback(err)));
    };

    // return edited descriptor as opposed to overwriting input descriptor
    return descriptor;
  };
}

