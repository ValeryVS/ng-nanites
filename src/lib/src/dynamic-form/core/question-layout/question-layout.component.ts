import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NgnQuestionBase } from '../question-base/question-base';

@Component({
  selector: 'ngn-question-layout',
  templateUrl: 'question-layout.component.html',
})
export class NgnQuestionLayoutComponent {

  @Input()
  public form: FormGroup;

  @Input()
  public question: NgnQuestionBase<any>;

  @Input()
  public id: string;

  public get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}
