import {Action} from '@ngrx/store';

export const SHOW_NAV_ITEMS = '[Layout] Show Nav Items';
export const HIDE_NAV_ITEMS = '[Layout] Hide Nav Items';
export const USE_SIDE_NAV_MODE = '[Layout] Use Side Nav Mode';
export const USE_NAV_MENU_MODE = '[Layout] Use Nav Menu Mode';
export const APPLY_UI_BLOCK = '[Layout] UI Unavailable';
export const REMOVE_UI_BLOCK = '[Layout] UI Available';

export class ShowNavItems implements Action
{
  readonly type = SHOW_NAV_ITEMS;
}

export class HideNavItems implements Action
{
  readonly type = HIDE_NAV_ITEMS;
}

export class UseSideNavMode implements Action
{
  readonly type = USE_SIDE_NAV_MODE;
}

export class UseNavMenuMode implements Action
{
  readonly type = USE_NAV_MENU_MODE;
}

export class ApplyUIBlock implements Action
{
  readonly type = APPLY_UI_BLOCK;
}

export class RemoveUIBlock implements Action
{
  readonly type = REMOVE_UI_BLOCK;
}

export type ActionType =
  ShowNavItems
  | HideNavItems
  | UseSideNavMode
  | UseNavMenuMode
  | ApplyUIBlock
  | RemoveUIBlock;
