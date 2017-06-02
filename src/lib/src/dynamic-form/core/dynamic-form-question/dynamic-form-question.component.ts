import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NgnQuestionBase } from '../question-base/question-base';

@Component({
  selector: 'ngn-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * @deprecated
 * Use ngn dynamic component with NgnDynamicQuestionDirective
 */
export class NgnDynamicFormQuestionComponent {

  @Input()
  public question: NgnQuestionBase<any>;

  @Input()
  public form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}
