import { RouterStateSerializer } from '@ngrx/router-store';
import {RouterStateSnapshot, Params, ParamMap, Data} from '@angular/router';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  queryParamMap: ParamMap;
  paramMap: ParamMap;
  data: Data;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    const params = routerState.root.params;
    const queryParamMap = routerState.root.queryParamMap;
    const paramMap = routerState.root.paramMap;
    const data = routerState.root.data;


    console.log(routerState);

    return { url, queryParams, params, queryParamMap, paramMap, data };
  }
}
