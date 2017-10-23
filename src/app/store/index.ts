import * as Heroes from './heroes';

export const reducers = {
  heroes: Heroes.reducer,
};

export interface AppState {
  heroes: Heroes.State;
}

export {
  Heroes,
};
