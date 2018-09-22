/**
 * Created by jheinnic on 5/2/17.
 */

import {TokenBundleMixin} from "./TokenBundleMixin";
import {ITokenBundle} from "./ITokenBundle";
import {Observable} from "rxjs";

export interface ITokenRegistry<B extends ITokenBundle<any>> {
    addBundleMixin(nextMixin: TokenBundleMixin<B>);

    getObservable(): Observable<B>;

    getLatest(): B;
}
