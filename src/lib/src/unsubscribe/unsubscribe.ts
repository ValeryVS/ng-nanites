import { Subject } from 'rxjs/Subject';

/**
 * Example:
 * ```
 * export class MyComponent extends NgnUnsubscribe {
 *
 *   public ngUnsubscribe = Subject<void>();
 *
 *   public ngnEmitUnsubscribeEvent() {
 *     this.ngUnsubscribe.next();
 *     this.ngUnsubscribe.complete();
 *   }
 *
 * }
 * ```
 */
export interface NgnUnsubscribe {

  readonly ngUnsubscribe: Subject<void>;

  ngnEmitUnsubscribeEvent(): void;

}
