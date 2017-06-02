import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngnDynamicComponentHost]',
})
export class NgnDynamicComponentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
