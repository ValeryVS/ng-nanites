import { FormGroup } from '@angular/forms';

import { NgnQuestionBase } from '../question-base/question-base';

export abstract class NgnQuestionBaseComponent {

  public static counter = 0;

  public abstract question: NgnQuestionBase<any>;

  public abstract form: FormGroup;

  public id: string;

  constructor() {
    this.id = `ngn_question_${NgnQuestionBaseComponent.counter++}`;
  }

}
