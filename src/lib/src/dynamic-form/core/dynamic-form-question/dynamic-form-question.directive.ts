import { Directive, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subject } from 'rxjs/Subject';

// tslint:disable-next-line:max-line-length
import { NgnDynamicComponentWrapperComponent } from '../../../dynamic-component/dynamic-component-wrapper/dynamic-component-wrapper.component';

import { NgnQuestionBase } from '../question-base/question-base';

@Directive({
  selector: '[ngnDynamicFormQuestion]',
})
export class NgnDynamicQuestionDirective implements OnChanges {

  @Input()
  public question: NgnQuestionBase<any>;

  @Input()
  public form: FormGroup;

  constructor(
    private wrapper: NgnDynamicComponentWrapperComponent,
  ) { }

  public ngOnChanges(changes: SimpleChanges) {
    this.wrapper.saveLastChanges(changes);
  }

}
