
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { storeFreeze } from 'ngrx-store-freeze';
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';

import { environment } from '../environments/environment';

import { AppState, reducers } from '$store/index';

// Create reducer factories for development and production environments.
// These factories are supplied to the StoreModule to combine the supplied
// ActionReducerMap (a map of state key -> reducer fn) into one single
// ActionReducer ((state, action) -> state) the app can use.

function developmentReducerFactory(reducerMap: ActionReducerMap<AppState>) {
  return storeFreeze(combineReducers(reducerMap));
}

function productionReducerFactory(reducerMap: ActionReducerMap<AppState>) {
  return combineReducers(reducerMap);
}

export function reducerFactory(reducerMap: ActionReducerMap<AppState>): ActionReducer<AppState> {
  if (environment.production) {
    return developmentReducerFactory(reducerMap);
  } else {
    return productionReducerFactory(reducerMap);
  }
}

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      reducerFactory,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
})
export class AppStoreModule {}
