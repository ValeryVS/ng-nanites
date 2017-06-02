import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { NgnQuestionBase } from './question-base/question-base';

@Injectable()
export class NgnQuestionControlService {

  public toFormGroup(questions: Array<NgnQuestionBase<any>>) {
    const group: any = {};

    questions.forEach((question) => {
      const validatorFunctions: ValidatorFn[] = [];
      if (question.required) {
        validatorFunctions.push(Validators.required);
      }
      if (question.pattern) {
        validatorFunctions.push(Validators.pattern(question.pattern));
      }
      if (question.minLength) {
        validatorFunctions.push(Validators.minLength(question.minLength));
      }
      if (question.maxLength) {
        validatorFunctions.push(Validators.maxLength(question.maxLength));
      }
      group[question.key] = new FormControl(question.value, validatorFunctions);
    });
    return new FormGroup(group);
  }

}
