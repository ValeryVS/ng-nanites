import { OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { NgnUnsubscribe } from './unsubscribe';

// interface override used to implement extension from two interfaces

/**
 * Example:
 * ```
 * export class MyComponent extends NgnUnsubscribe, OnDestroy {
 *
 *   public ngUnsubscribe = Subject<void>();
 *
 *   public ngOnDestroy() {
 *     this.emitUnsubscribeEvent();
 *   }
 *
 *   public ngnEmitUnsubscribeEvent() {
 *     this.ngUnsubscribe.next();
 *     this.ngUnsubscribe.complete();
 *   }
 *
 * }
 * ```
 */

// tslint:disable-next-line:no-empty-interface
export interface NgnUnsubscribeOnDestroy extends NgnUnsubscribe { }

export interface NgnUnsubscribeOnDestroy extends OnDestroy {
  ngOnDestroy(): void;
}
