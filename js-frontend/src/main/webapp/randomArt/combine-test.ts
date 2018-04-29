import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/repeatWhen';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/bindCallback';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import {Subject} from 'rxjs/Subject';
import {AsyncSubject} from 'rxjs/AsyncSubject';
import * as process from 'process';
import rl = require('readline');
import {Subscription} from 'rxjs/Subscription';

const i = rl.createInterface(process.stdin, process.stdout, null);
const q: (query: string, callback: (answer: string) => void) => void = i.question;
/*
i.question('What do you think of node.js?', function(answer) {
  // TODO: Log the answer in a database
  console.log('Thank you for your valuable feedback.');

  // These two lines together allow the program to terminate. Without
  // them, it would run forever.
  i.close();
  process.stdin.end();
});
*/


const sourceOfOne = Observable.of(1);
const sourceOfFive = Observable.from([1, 2, 3, 4, 5])
// .share();
  .do((value: number) => {
    console.log('Source: ', value);
  })
  .delayWhen(
    (value: number) => Observable.interval(value * 1000)
  )
  .shareReplay(1);
const sourceOfSome = new AsyncSubject().share();
const sourceOfRange = Observable.range(1, 20)
  .do((value: number) => {
    console.log('Source: ', value);
  })
  .publishLast();
const observeLineFn = Observable.bindCallback<string, string>(q.bind(i));
const sourceOfLines = Observable.defer( () => observeLineFn('next?') );
const terminus = new Subject();
const aborter = new Subject();

const runOne = false;
const runTwo = false;
const runTwoB = false;
const runLines = true;
const runSome = false;
const runRange = false;


if (runOne) {
  sourceOfOne.delay(1000)
    .repeatWhen((notifications: Observable<any>) => {
      return notifications.takeUntil(terminus)
        .do(
          (value: number) => {
            console.log('Contemplating retry one on ', value);
          }
        );
    })
    .map((val: number, index: number) => index)
    .subscribe(
      (index: number) => {
        console.log('Subscriber one receives ', index);
        if (index >= 10) {
          console.log('Subscriber one is emitting to its terminus');
          terminus.next(index);
        } else if (index >= 5) {
          console.log('Subscriber one is completing its terminus');
          terminus.next(index);
          terminus.complete();
        }
      },
      (error: any) => { console.error('Subscriber one error?', error); },
      () => { console.log('Subscriber one completes'); });
}

if (runTwo) {
  sourceOfFive
    .take(1)
    .delayWhen(
      (value: number) => Observable.interval(value * 1000)
    )
    .repeatWhen((notifications: Observable<any>) => {
      return notifications.mergeMap((notice: any) => sourceOfFive.take(1))
        // , (notice: any, value: number) => {
        // console.log('Contemplating retry two with ', value);
        // return notice
      // });
    })
    .subscribe(
      (index: number) => {
        console.log('Subscriber two receives ', index);
      },
      (error: any) => { console.error('Subscriber two error?', error); },
      () => { console.log('Subscriber two completes'); });

  // sourceOfFive.refCount().subscribe((ref: any) => {
  //   console.log('Activated two');
  // });
}

if (runTwoB) {
  sourceOfFive.share()
    .concatMap((value: number) => {
      return Observable.of(value)
        .delay(1000)
    })
    .repeatWhen((notifications: Observable<any>) => {
      return notifications;
      // return notifications.zip(
      //   Observable.defer(() => sourceOfFive.skip(1)),
      //   (notice: any, value: number) => {
      //     console.log('Contemplating retry two with ', value);
      //     return notice
      //   });
    })
    .subscribe(
      (index: number) => {
        console.log('Subscriber two receives ', index);
      },
      (error: any) => { console.error('Subscriber two error?', error); },
      () => { console.log('Subscriber two completes'); });
}

if (runRange) {
  sourceOfRange
    .refCount()
    .do(
      (index: number) => {
        console.log('Pre-take range receives ', index);
      }
    )
    .take(1)
    .do(
      (index: number) => {
        console.log('Pre-repeat range receives ', index);
      }
    )
    .repeatWhen((notifications: Observable<any>) => {
      return notifications.zip(sourceOfRange.refCount(), (notice: any, value: number) => {
        console.log('Contemplating retry two with ', value);
        return notice
      })
        .delay(50);
    })
    .do(
      (index: number) => {
        console.log('Post-repeat range receives ', index);
      }
    )
    .subscribe(
      (index: number) => {
        console.log('Subscriber range receives ', index);
      },
      (error: any) => { console.error('Subscriber range error?', error); },
      () => { console.log('Subscriber range completes'); });

  // sourceOfFive.refCount().subscribe((ref: any) => {
  //   console.log('Activated two');
  // });
}

if (runSome) {
  sourceOfSome.take(1)
    .do(
      (index: number) => {
        console.log('Pre-repeat some receives ', index);
      }
    )
    .repeatWhen((notifications: Observable<any>) => {
      return notifications.zip(sourceOfFive, (notice: any, value: number) => {
        console.log('Contemplating retry two with ', value);
        return notice
      });
    })
    .do(
      (index: number) => {
        console.log('Post-repeat some receives ', index);
      }
    )
    .subscribe(
      (index: number) => {
        console.log('Subscriber some receives ', index);
      },
      (error: any) => { console.error('Subscriber two error?', error); },
      () => { console.log('Subscriber two completes'); });
}

if (runLines) {
  let shutdown: Subscription;

    sourceOfLines.repeatWhen(
      (notifications: Observable<any>) => notifications.takeUntil(terminus)
    )
    .takeUntil(terminus)
    .concatMap((value: string) => {
      return Observable.of(value).delay(2000)
    })
    .takeUntil(aborter)
    .subscribe(
      (index: string) => {
        console.log('Subscriber two receives ', index);
      },
      (error: any) => { console.error('Subscriber two error?', error); },
      () => {
        i.close();
        shutdown.unsubscribe();
        console.log('Subscriber two completes');
      });

  Observable.interval(5000).take(1).subscribe((value: number) => {
    console.log('Graceful time is up!');
    terminus.next('Graceful time is up: ' + value);
  });

  shutdown = Observable.interval(12000).take(1).subscribe((value: number) => {
    console.log('Runaway time is up!');
    aborter.next('Runaway time is up: ' + value);
  });
}
