import { Action } from '@ngrx/store';
import { createSelector, Selector } from 'reselect';
import { AppState } from '$store/index';
import { Hero } from '$models/hero';

// ------------------------------------------------------------
// Action Constants
// ------------------------------------------------------------
export const CREATE_HERO = '[Heroes] Create Hero';

// ------------------------------------------------------------
// Actions
// ------------------------------------------------------------
export class CreateHeroAction implements Action {
  readonly type = CREATE_HERO;

  constructor(public payload: {
    name: string,
  }) { }
}

export type Actions
  = CreateHeroAction;

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

    default:
      console.log('reducing default');
      return state;
  }
}
