import { Action } from '@ngrx/store';

export const GET_ALL = '@ngn/GetAll';
export const GET_ALL_COMPLETE = '@ngn/GetAllComplete';
export const POST_ITEM = '@ngn/PostItem';
export const POST_ITEM_COMPLETE = '@ngn/PostItemComplete';
export const PUT_ITEM = '@ngn/PutItem';
export const PUT_ITEM_COMPLETE = '@ngn/PutItemComplete';

class CommonAction<T> implements Action {
  constructor(
    public readonly type: string,
    public payload?: T,
  ) { }
}

export function getActionName(options: {
  storeName: string | symbol | number,
  actionName: string,
}) {
  return `[${options.storeName}] ${options.actionName}`;
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

// Get All

export interface GetAllPayload {
  storeName: string | symbol | number;
}

export type GetAllOptions = GetAllPayload;

export interface GetAllAction extends Action {
  payload: GetAllPayload;
}

export function createGetAllAction(options: GetAllOptions): GetAllAction {
  return createAction<GetAllPayload>({
    type: getActionName({ storeName: options.storeName, actionName: GET_ALL }),
    payload: options,
  }) as GetAllAction;
}

// Get All Complete

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

// Post Item

export interface PostItemPayload {
  storeName: string | symbol | number;
}

export type PostItemOptions = PostItemPayload;

export interface PostItemAction extends Action {
  payload: PostItemPayload;
}

export function createPostItemAction(options: PostItemOptions): PostItemAction {
  return createAction<PostItemPayload>({
    type: getActionName({ storeName: options.storeName, actionName: POST_ITEM }),
    payload: options,
  }) as PostItemAction;
}

// Post Item Complete

export interface PostItemCompleteOptions<T> {
  postItemPayload: PostItemPayload;
  payload: T;
}

export function createPostItemCompleteAction<T>(options: PostItemCompleteOptions<T>) {
  return createAction<T>({
    type: getActionName({ storeName: options.postItemPayload.storeName, actionName: POST_ITEM_COMPLETE }),
    payload: options.payload,
  });
}

// Put Item

export interface PutItemPayload {
  storeName: string | symbol | number;
}

export type PutItemOptions = PutItemPayload;

export interface PutItemAction extends Action {
  payload: PutItemPayload;
}

export function createPutItemAction(options: PutItemOptions): PutItemAction {
  return createAction<PutItemPayload>({
    type: getActionName({ storeName: options.storeName, actionName: PUT_ITEM }),
    payload: options,
  }) as PutItemAction;
}

// Put Item Complete

export interface PutItemCompleteOptions<T> {
  putItemPayload: PutItemPayload;
  payload: T;
}

export function createPutItemCompleteAction<T>(options: PutItemCompleteOptions<T>) {
  return createAction<T>({
    type: getActionName({ storeName: options.putItemPayload.storeName, actionName: PUT_ITEM_COMPLETE }),
    payload: options.payload,
  });
}
