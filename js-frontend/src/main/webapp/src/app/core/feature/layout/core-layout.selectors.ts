import {createSelector} from '@ngrx/store/public_api';
import * as Models from './core-layout.models';

type State = Models.State;

export const getNavStyle = (state: State) => state.navStyle;

export const isSideNavShown = (state: State) => state.showNav && (state.navStyle === Models.NavStyle.side);

export const isNavMenuShown = (state: State) => state.showNav && (state.navStyle === Models.NavStyle.menu);

export const isUIAvailable = (state: State) => state.available;

export const getNavItems = (state: State) => state.navItems;

export const getBrandData = (state: State) => state.brand;
