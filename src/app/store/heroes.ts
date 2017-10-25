import { Action } from '@ngrx/store';
import { createSelector, Selector } from 'reselect';
import uuidv4 from 'uuid/v4';
import { AppState } from '$store/index';
import { Hero } from '$models/hero';

// ------------------------------------------------------------
// Action Constants
// ------------------------------------------------------------

export const CREATE_HERO_REQUEST = '[Heroes] Create Hero (Request)';
export const CREATE_HERO_SUCCESS = '[Heroes] Create Hero (Success)';
export const CREATE_HERO_FAILURE = '[Heroes] Create Hero (Failure)';

// ------------------------------------------------------------
// Actions
// ------------------------------------------------------------
export class CreateHeroRequest implements Action {
  readonly type = CREATE_HERO_REQUEST;
  readonly requestId = uuidv4();

  constructor(
    public payload: {
      name: string,
    },
  ) { }
}

export class CreateHeroSuccess implements Action {
  readonly type = CREATE_HERO_SUCCESS;

  constructor(
    public requestAction: CreateHeroRequest,
    public payload: Hero,
  ) { }
}

export class CreateHeroFailure implements Action {
  readonly type = CREATE_HERO_FAILURE;

  constructor(
    public requestAction: CreateHeroRequest,
    public error: any,
  ) { }
}

export type Actions
  = CreateHeroRequest
  | CreateHeroSuccess
  | CreateHeroFailure;

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
  console.log('reducing', action.type);
  switch (action.type) {

    case CREATE_HERO_SUCCESS: {
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
      return state;
  }
}
