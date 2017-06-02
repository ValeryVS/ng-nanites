import { NgnQuestionBase } from '../question-base/question-base';

import { NgnQuestionDropDownComponent } from './question-dropdown.component';

export class NgnDropdownQuestion<T> extends NgnQuestionBase<T> {
  public controlType: 'dropdown';
  public options: Array<{ key: string, value: string }>;

  constructor(options: Partial<NgnDropdownQuestion<T>> = {}) {
    super(options);
    this.component = NgnQuestionDropDownComponent;
    this.controlType = 'dropdown';
    this.options = options.options || [];
  }
}
