var co = require('co');
var wait = require('co-wait');
var limiter = require('co-limiter');
var Queue = require('co-priority-queue');

var limiter = function(concurrency) {
  var queue = new Queue();

  // Create consumers
  for (var i = 0; i < concurrency; i++) {
    co(function *() {
      var yieldable;
      while (true) {
        yieldable = yield queue.next();
        yield co(yieldable);
      }
    }).catch(function(err) {
      console.error(err.stack);
    });
  }

  var limit = function(generator, priority) {
    return function(cb) {
      const wrapped = co.wrap(generator);
      console.log('pushing', wrapped);
      queue.push(function () {
        console.log('pushed runs');
        wrapped().then(function(value) {
          cb(undefined, value);
        }).catch(cb);
      }, priority);
    };
  };

  var limit2 = function(generator, priority) {
    const wrapped = co.wrap(generator);
    return function(...args) {
      return new Promise(
        (resolve, reject) => {
          queue.push(function* () {
            try {
              resolve(yield wrapped(...args));
            } catch(err) {
              reject(err);
            }
          }, priority);
        }
      );
    };
  };

  return limit2;
};

function* job(p1, p2) {
  console.log('Doing something...');
  yield wait(1000);
  return p1 + p2 * 5;
}

var limit = limiter(3);
var job_limit = limit(job);
var lo_priority_job_limit = limit(job, 1);
var mid_priority_job_limit = limit(job, 5);
var hi_priority_job_limit = limit(job, 10);

co(function* () {
  const retVal = [];
  for (var i = 0; i < 10; i++) {
    retVal.push(mid_priority_job_limit(i, i+1));

    const lo = lo_priority_job_limit(1, 1).then(
      function(value) { console.log( 'Lo: ' + value ); return value; }
    );
    retVal.push(lo);
  
    const high = hi_priority_job_limit(100, 100).then(
      function(value) { console.log( 'High: ' + value ); return value; }
    );
    retVal.push(high);
  }

  return yield retVal;
}).then(console.log);
