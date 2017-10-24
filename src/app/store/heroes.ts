import { Action } from '@ngrx/store';
import { createSelector, Selector } from 'reselect';
import { AppState } from '$store/index';
import { Hero } from '$models/hero';

// ------------------------------------------------------------
// Action Constants
// ------------------------------------------------------------

export const CREATE_HERO = '[Heroes] Create Hero';
export const CREATE_HERO_SUCCESS = '[Heroes] Create Hero Success';
export const CREATE_HERO_FAIL = '[Heroes] Create Hero Failure';

// ------------------------------------------------------------
// Actions
// ------------------------------------------------------------
export class CreateHeroAction implements Action {
  readonly type = CREATE_HERO;

  constructor(public payload: {
    name: string,
  }) { }
}

export class CreateHeroSuccessAction implements Action {
  readonly type = CREATE_HERO_SUCCESS;

  constructor(public payload: Hero) { }
}

export class CreateHeroFailAction implements Action {
  readonly type = CREATE_HERO_FAIL;

  constructor(public payload: any) { }
}

export type Actions
  = CreateHeroAction
  | CreateHeroSuccessAction
  | CreateHeroFailAction;

// ------------------------------------------------------------
// State
// ------------------------------------------------------------

export interface State {
  heroes: Hero[];
}

export const initialState: State = {
  heroes: <Hero[]>[],
};

// ------------------------------------------------------------
// Selectors
// ------------------------------------------------------------

const getLocalState = (state: AppState) => state.heroes;
const createLocalSelector: <V>(selector: Selector<State, V>) => Selector<AppState, V>
  = (selector) => createSelector(getLocalState, selector);

export class Selectors {
  static getHeroes = createLocalSelector(state => state.heroes);
}

// ------------------------------------------------------------
// Reducer
// ------------------------------------------------------------

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    case CREATE_HERO: {
      console.log('reducing CREATE_HERO');
      const { name } = action.payload;
      return {
        ...state,
        heroes: [
          ...state.heroes,
          <Hero>{ name },
        ],
      };
    }

    case CREATE_HERO_SUCCESS: {
      console.log('reducing CREATE_HERO_SUCCESS');
      const hero = action.payload;
      return {
        ...state,
        heroes: [
          ...state.heroes,
          hero,
        ],
      };
    }

    default:
      console.log('reducing default');
      return state;
  }
}
