import { Constructor } from '@ng-nanites/ng-nanites';
import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as commonActions from '../actions/common';

export interface State<T> {
  entities: T[];
}

export const initialState: State<any> = {
  entities: [],
};

export function reducerFactory<T>(storeName: string, EntityConstructor: Constructor<T>) {
  return (state = initialState, action: Action): State<T> => {
    switch (action.type) {

      case commonActions.getActionName({ storeName, actionName: commonActions.GET_ALL_COMPLETE }): {
        const entities: T[] = [];
        for (const item of action.payload) {
          entities.push(new EntityConstructor(item));
        }

        return {
          entities,
        };
      }

      default: {
        return state;
      }
    }
  };
}

export function addReducer<T>(reducers: any, storeName: string, EntityConstructor: Constructor<T>) {
  reducers[storeName] = reducerFactory<T>(storeName, EntityConstructor);
}

export function getAll<T>(state: State<T>) {
  return state.entities;
}
