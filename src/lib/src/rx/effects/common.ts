import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { createGetAllCompleteAction, GET_ALL, GET_ALL_COMPLETE, GetAllPayload } from '../actions/common';

export interface GetAllService {
  getAll(): Observable<any>;
}


@Injectable()
export class BookEffects {

  @Effect()
  public getAll$: Observable<Action> = this.actions$
    .filter((action: Action) => action.type.endsWith(GET_ALL))
    .debounceTime(300)
    .map(toPayload)
    .switchMap((getAllPayload: GetAllPayload) => {
      const nextSearch$ = this.actions$
        .filter((action: Action) => action.type.endsWith(GET_ALL_COMPLETE))
        .skip(1);

      return this.googleBooks.getAll()
        .takeUntil(nextSearch$)
        .map((payload) => createGetAllCompleteAction({ getAllPayload, payload }))
        .catch(() => of(createGetAllCompleteAction({ getAllPayload, payload: [] })));
    });

  constructor(private actions$: Actions, private googleBooks: GetAllService) { }
}
