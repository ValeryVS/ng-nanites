import { Action } from '@ngrx/store';

export function createReducer<T>(
  initialState: T,
  handlers: { [key: string]: (state: T, action: Action) => T },
) {
  return function reducer(state = initialState, action: Action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
