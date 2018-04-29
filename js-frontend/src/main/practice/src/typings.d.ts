/* SystemJS module definition */
import {InitialState} from "@ngrx/store/src/models";
import {Action, ActionReducer, Selector} from "@ngrx/store";

declare var module: NodeModule;

interface NodeModule {
  id: string;
}

