// tslint:disable:max-classes-per-file

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { createGetAllCompleteAction, GET_ALL, GET_ALL_COMPLETE, GetAllAction, GetAllPayload } from '../actions/common';

@Injectable()
export class NgnRxGetAllService {
  public getAll(action: Action): Observable<any> {
    return of(undefined);
  }
}


@Injectable()
export class NgnRxEffects {

  @Effect()
  public getAll$: Observable<Action | void> = this.actions$
    .filter((action: Action) => action.type.endsWith(GET_ALL))
    .groupBy((action: Action) => action.type)
    .map((obs) => obs.debounceTime(300))
    .mergeAll()
    .mergeMap((action: GetAllAction) => {
      const nextSearch$ = this.actions$
        .filter((nextAction: Action) => nextAction.type === action.type)
        .skip(1);

      return this.getAllService.getAll(action)
        .takeUntil(nextSearch$)
        .map((getAllCompletePayload) => {
          return createGetAllCompleteAction({ getAllPayload: action.payload, payload: getAllCompletePayload });
        })
        .catch((error) => {
          // tslint:disable-next-line:no-console
          console.error(error);
          return of(createGetAllCompleteAction({ getAllPayload: action.payload, payload: [] }));
        });
    });

  constructor(
    private actions$: Actions,
    private getAllService: NgnRxGetAllService,
  ) { }

}
