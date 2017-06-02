import { NgnQuestionBase } from '../question-base/question-base';

import { NgnQuestionInputComponent } from './question-input.component';

export class NgnInputQuestion<T> extends NgnQuestionBase<T> {
  public controlType: 'input';
  public type: string;

  constructor(options: Partial<NgnInputQuestion<T>> = {}) {
    super(options);
    this.component = NgnQuestionInputComponent;
    this.controlType = 'input';
    this.type = options.type || '';
  }
}
