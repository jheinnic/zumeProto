/**
 * Created by jheinnic on 4/28/17.
 */

export interface IConfigProvider<T> {
    provideConfig(): T;
}
