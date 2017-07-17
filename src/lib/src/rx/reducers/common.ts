import { Constructor } from '@ng-nanites/ng-nanites';
import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as commonActions from '../actions/common';

export interface CommonEntity {
  isIdEqualTo(id: any): boolean;
  getId(): any;
}

export interface State<T extends CommonEntity> {
  touched: boolean;
  entities: T[];
}

export const initialState: State<any> = {
  touched: false,
  entities: [],
};

export function reducerFactory<S, T extends CommonEntity>(
  storeName: keyof S,
  EntityConstructor: Constructor<T>,
  customReducers?: { [key: string]: (state: State<T>, action: Action) => State<T> },
) {
  return (state: State<T> = initialState, action: Action): State<T> => {
    switch (action.type) {

      case commonActions.getActionName({ storeName, actionName: commonActions.GET_ALL_COMPLETE }): {
        if (customReducers && customReducers[commonActions.GET_ALL_COMPLETE]) {
          return customReducers[commonActions.GET_ALL_COMPLETE](state, action);
        }
        const entities: T[] = [];
        for (const item of action.payload) {
          entities.push(new EntityConstructor(item));
        }

        return {
          touched: true,
          entities,
        };
      }

      default: {
        return state;
      }
    }
  };
}

export function getAllCompleteReducerFactory<T extends CommonEntity>(EntityConstructor: Constructor<T>) {
  return (state: State<T> = initialState, action: Action): State<T> => {
    const entities: T[] = [];
    for (const item of action.payload) {
      entities.push(new EntityConstructor(item));
    }

    return {
      touched: true,
      entities,
    };
  };
}

export function setItemCompleteReducerFactory<T extends CommonEntity>(EntityConstructor: Constructor<T>) {
  return (state: State<T> = initialState, action: Action): State<T> => {
    const newItem = new EntityConstructor(action.payload);
    const id = newItem.getId();
    const entities: T[] = Array.from(state.entities);
    for (const entity of entities) {
      if (entity.isIdEqualTo(id)) {
        const index = entities.indexOf(entity);
        entities.splice(index, 1, newItem);
        break;
      }
    }

    return {
      touched: true,
      entities,
    };
  };
}

export function getAll<T extends CommonEntity>(state: State<T>) {
  return state.entities;
}
