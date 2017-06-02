import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NgnDynamicComponent } from '../../../dynamic-component/decorators/dynamic-component';
import { NgnDynamicInput } from '../../../dynamic-component/decorators/dynamic-component-input';

import { NgnQuestionBaseComponent } from '../question-base/question-base.component';
import { NgnDropdownQuestion } from './question-dropdown';

@Component({
  selector: 'ngn-question-dropdown',
  templateUrl: 'question-dropdown.component.html',
})
@NgnDynamicComponent()
export class NgnQuestionDropDownComponent extends NgnQuestionBaseComponent {

  @Input()
  @NgnDynamicInput()
  public question: NgnDropdownQuestion<any>;

  @Input()
  @NgnDynamicInput()
  public form: FormGroup;

  // REFACTOR
  // not necessary to redeclare id, because it exists in NgnQuestionBaseComponent
  // but tslint can't find variable in parent class
  // no-access-missing-member
  // https://github.com/mgechev/codelyzer/issues/191
  public id: string;

}
