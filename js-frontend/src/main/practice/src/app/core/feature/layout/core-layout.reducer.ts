///<reference path="../../../../../node_modules/immutable/dist/immutable.d.ts"/>

import * as Models from './core-layout.models';
import * as Actions from './core-layout.actions';
import Immutable = require('immutable');

export * from './core-layout.selectors';
export type State = Models.State;

export const initialState: State = {
  available: false,
  brand: {
    name: 'Portfolio',
    icon: 'icon.png'
  },
  showNav: false,
  navStyle: Models.NavStyle.undecided,
  navItems: Immutable.List.of<Models.NavItem>(
    {
      type: 'nav',
      idKey: 'listBooks',
      hint: 'My Books',
      routerLink: '/books',
      icon: 'book',
      tooltip: {
        content: 'List my collected books',
      }
    }
  ),
  account: {
    icon: 'bell',
    toolTip: 'Account',
    ariaLabel: 'Account',
    menuItems: Immutable.List.of<Models.MenuItem>(
      {
        idKey: 'menu1',
        type: 'nav',
        hint: 'View book list',
        routerLink: '/books',
        icon: 'book',
        tooltip: {
          content: 'Select to open the book list view'
        }
      }
    )
  },
  notices: {
    icon: 'bell',
    toolTip: 'Notifications',
    ariaLabel: 'Notifications',
    menuItems: Immutable.List.of<Models.MenuItem>(
      {
        idKey: 'menu2',
        type: 'nav',
        hint: 'View book list',
        routerLink: '/books',
        icon: 'book',
        tooltip: {
          content: 'Select to open the book list view'
        }
      }
    )
  }
};

function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}

export function reducer(state = initialState, action: Actions.ActionType): State {
  switch (action.type) {
    case Actions.APPLY_UI_BLOCK:
      return {
        ...state,
        available: false
      };

    case Actions.REMOVE_UI_BLOCK:
      return {
        ...state,
        available: true
      };

    case Actions.HIDE_NAV_ITEMS:
      return {
        ...state,
        showNav: false
      };

    case Actions.SHOW_NAV_ITEMS:
      return {
        ...state,
        showNav: true
      };

    case Actions.USE_SIDE_NAV_MODE:
      return {
        ...state,
        navStyle: Models.NavStyle.side
      };

    case Actions.USE_NAV_MENU_MODE:
      return {
        ...state,
        navStyle: Models.NavStyle.menu
      };

    default:
      // return assertNever(action);
      return state;
  }
}
