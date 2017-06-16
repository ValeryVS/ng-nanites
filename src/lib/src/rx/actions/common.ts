import { Action } from '@ngrx/store';

export const GET_ALL = 'Get all';
export const GET_ALL_COMPLETE = 'Get all complete';

class CommonAction<T> implements Action {
  constructor(
    public readonly type: string,
    public payload?: T,
  ) { }
}

export function getActionName(options: {
  storeName: string,
  actionName: string,
}) {
  return `@ngn [${options.storeName}] ${options.actionName}`;
}

function createAction<T>(options: {
  type: string,
  payload?: T,
}): Action {
  return new CommonAction(
    options.type,
    options.payload,
  );
}

export interface GetAllPayload {
  storeName: string;
  forceReload: boolean;
}

export type GetAllOptions = GetAllPayload;

export function createGetAllAction(options: GetAllOptions) {
  return createAction<GetAllPayload>({
    type: getActionName({ storeName: options.storeName, actionName: GET_ALL }),
    payload: options,
  });
}

export interface GetAllCompleteOptions<T> {
  getAllPayload: GetAllPayload;
  payload: T;
}

export function createGetAllCompleteAction<T>(options: GetAllCompleteOptions<T>) {
  return createAction<T>({
    type: getActionName({ storeName: options.getAllPayload.storeName, actionName: GET_ALL_COMPLETE }),
    payload: options.payload,
  });
}
