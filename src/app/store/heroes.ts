import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';
import uuidv4 from 'uuid/v4';
import { AppState } from '$store/index';
import { Hero } from '$models/hero';

// ------------------------------------------------------------
// Action Constants
// ------------------------------------------------------------

// Batch hero actions

export const GET_HEROES_REQUEST = '[Heroes] Get Heroes (Request)';
export const GET_HEROES_SUCCESS = '[Heroes] Get Heroes (Success)';
export const GET_HEROES_FAILURE = '[Heroes] Get Heroes (Failure)';

// Single hero actions

export const CREATE_HERO_REQUEST = '[Heroes] Create Hero (Request)';
export const CREATE_HERO_SUCCESS = '[Heroes] Create Hero (Success)';
export const CREATE_HERO_FAILURE = '[Heroes] Create Hero (Failure)';

export const UPDATE_HERO_REQUEST = '[Heroes] Update Hero (Request)';
export const UPDATE_HERO_SUCCESS = '[Heroes] Update Hero (Success)';
export const UPDATE_HERO_FAILURE = '[Heroes] Update Hero (Failure)';

export const DELETE_HERO_REQUEST = '[Heroes] Delete Hero (Request)';
export const DELETE_HERO_SUCCESS = '[Heroes] Delete Hero (Success)';
export const DELETE_HERO_FAILURE = '[Heroes] Delete Hero (Failure)';

export const SELECT_HERO_REQUEST = '[Heroes] Select Hero (Request)';
export const SELECT_HERO_SUCCESS = '[Heroes] Select Hero (Success)';
export const SELECT_HERO_FAILURE = '[Heroes] Select Hero (Failure)';

// ------------------------------------------------------------
// Actions
// ------------------------------------------------------------

/**
 * Get all the heroes
 */
export class GetHeroesRequest implements Action {
  readonly type = GET_HEROES_REQUEST;
  readonly requestId = uuidv4();

  constructor() { }
}

export class GetHeroesSuccess implements Action {
  readonly type = GET_HEROES_SUCCESS;

  constructor(
    public requestAction: GetHeroesRequest,
    public payload: { heroes: Hero[] },
  ) { }
}

export class GetHeroesFailure implements Action {
  readonly type = GET_HEROES_FAILURE;

  constructor(
    public requestAction: GetHeroesRequest,
    public error: any,
  ) { }
}

/**
 * Create a single hero
 */
export class CreateHeroRequest implements Action {
  readonly type = CREATE_HERO_REQUEST;
  readonly requestId = uuidv4();

  constructor(
    public payload: { name: string },
  ) { }
}

export class CreateHeroSuccess implements Action {
  readonly type = CREATE_HERO_SUCCESS;

  constructor(
    public requestAction: CreateHeroRequest,
    public payload: { hero: Hero },
  ) { }
}

export class CreateHeroFailure implements Action {
  readonly type = CREATE_HERO_FAILURE;

  constructor(
    public requestAction: CreateHeroRequest,
    public error: any,
  ) { }
}

/**
 * Update a single hero
 */
export class UpdateHeroRequest implements Action {
  readonly type = UPDATE_HERO_REQUEST;
  readonly requestId = uuidv4();

  constructor(
    public payload: { hero: Hero },
  ) { }
}

export class UpdateHeroSuccess implements Action {
  readonly type = UPDATE_HERO_SUCCESS;

  constructor(
    public requestAction: UpdateHeroRequest,
    public payload: { hero: Hero },
  ) { }
}

export class UpdateHeroFailure implements Action {
  readonly type = UPDATE_HERO_FAILURE;

  constructor(
    public requestAction: UpdateHeroRequest,
    public error: any,
  ) { }
}

/**
 * Delete a single hero
 */
export class DeleteHeroRequest implements Action {
  readonly type = DELETE_HERO_REQUEST;
  readonly requestId = uuidv4();

  constructor(
    public payload: { id: string },
  ) { }
}

export class DeleteHeroSuccess implements Action {
  readonly type = DELETE_HERO_SUCCESS;

  constructor(
    public requestAction: DeleteHeroRequest,
    public payload: { id: string },
  ) { }
}

export class DeleteHeroFailure implements Action {
  readonly type = DELETE_HERO_FAILURE;

  constructor(
    public requestAction: DeleteHeroRequest,
    public error: any,
  ) { }
}

/**
 * Select a single hero
 */
export class SelectHeroRequest implements Action {
  readonly type = SELECT_HERO_REQUEST;
  readonly requestId = uuidv4();

  constructor(
    public payload: { id: string },
  ) { }
}

export class SelectHeroSuccess implements Action {
  readonly type = SELECT_HERO_SUCCESS;

  constructor(
    public requestAction: SelectHeroRequest,
    public payload: { id: string },
  ) { }
}

export class SelectHeroFailure implements Action {
  readonly type = SELECT_HERO_FAILURE;

  constructor(
    public requestAction: SelectHeroRequest,
    public error: any,
  ) { }
}

export type Actions
  = GetHeroesRequest
  | GetHeroesSuccess
  | GetHeroesFailure
  | CreateHeroRequest
  | CreateHeroSuccess
  | CreateHeroFailure
  | UpdateHeroRequest
  | UpdateHeroSuccess
  | UpdateHeroFailure
  | DeleteHeroRequest
  | DeleteHeroSuccess
  | DeleteHeroFailure
  | SelectHeroRequest
  | SelectHeroSuccess
  | SelectHeroFailure
;

// ------------------------------------------------------------
// State
// ------------------------------------------------------------

export interface State {
  heroes: Hero[];
  selectedHeroId: string;
}

export const initialState: State = {
  heroes: [],
  selectedHeroId: undefined,
};

// ------------------------------------------------------------
// Selectors
// ------------------------------------------------------------

const getLocalState = (state: AppState) => state.heroes;

export class Selectors {
  static getHeroes = createSelector(
    getLocalState,
    (state: State) => state.heroes,
  );
  static getSelectedHeroId = createSelector(
    getLocalState,
    (state: State) => state.selectedHeroId,
  );
  static getSelectedHero = createSelector(
    Selectors.getHeroes,
    Selectors.getSelectedHeroId,
    (heroes: Hero[], id: string) => heroes.find(hero => hero.id === id),
  );
}

// ------------------------------------------------------------
// Reducer
// ------------------------------------------------------------

export function reducer(state = initialState, action: Actions): State {
  console.log('(reducing', action.type, ')');
  switch (action.type) {

    case GET_HEROES_SUCCESS: {
      const heroes = action.payload.heroes;
      return {
        ...state,
        heroes,
      };
    }

    case CREATE_HERO_SUCCESS: {
      const hero = action.payload.hero;
      return {
        ...state,
        heroes: [
          ...state.heroes,
          hero,
        ],
      };
    }

    case UPDATE_HERO_SUCCESS: {
      const hero = action.payload.hero;
      const heroes = [
        ...state.heroes.filter(h => h.id !== hero.id),
        hero,
      ];
      return {
        ...state,
        heroes,
      };
    }

    case DELETE_HERO_SUCCESS: {
      const { id } = action.payload;
      const heroes = state.heroes.filter(h => h.id !== id);
      return {
        ...state,
        heroes,
      };
    }

    case SELECT_HERO_SUCCESS: {
      const { id } = action.payload;

      return {
        ...state,
        selectedHeroId: id,
      };
    }

    default:
      return state;
  }
}
