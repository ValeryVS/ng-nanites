import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NgnQuestionBase } from '../question-base/question-base';
import { NgnQuestionControlService } from '../question-control.service';

@Component({
  selector: 'ngn-dynamic-form',
  exportAs: 'NgnDynamicFormComponent',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['dynamic-form.component.sass'],
  providers: [NgnQuestionControlService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgnDynamicFormComponent implements OnChanges, OnInit {

  @Input()
  public questions: Array<NgnQuestionBase<any>> = [];

  public form: FormGroup;

  constructor(
    private cd: ChangeDetectorRef,
    private qcs: NgnQuestionControlService,
  ) { }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.questions) {
      this.updateFormData();
    }
  }

  public ngOnInit() {
    this.updateFormData();
  }

  public onSubmit() {
    // TODO
    // delete this
    // tslint:disable-next-line:no-console
    console.log(JSON.stringify(this.form.value));
  }

  private updateFormData() {
    this.form = this.qcs.toFormGroup(this.questions);
    this.cd.markForCheck();
  }
}
