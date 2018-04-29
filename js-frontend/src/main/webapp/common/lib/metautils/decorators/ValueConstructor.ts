/**
 * Created by jheinnic on 3/12/17.
 */
export interface ValueConstructor<V>
{
  readonly prototype: Readonly<V>;
  new(base?: V, delta?: Partial<V>): Readonly<V>;
}
