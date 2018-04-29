/**
 * Created by jheinnic on 3/23/17.
 */

export function Trace(target: any)
{
  // the new constructor behaviour
  const retVal = function (...args: any[]) {
    // Log that the class was first loaded
    console.log('Loaded: ' + target.name);

    // Create a new constructor to 'replace' the original one.
    const c: any = function (this: any) {
      // Log the constructor was called
      console.log('New: ' + target.name);

      // Delegate to original constructor
      return target.apply(this, args);
    };
    // Replace new constructor prototype with the original one.
    c.prototype = target.prototype;

    return c;
  };

  // copy prototype so instanceof operator still works
  retVal.prototype = target.prototype;

  // return new constructor (will override original)
  return retVal;
}
