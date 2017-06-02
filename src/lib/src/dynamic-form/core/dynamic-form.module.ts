import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgnDynamicComponentModule } from '../../dynamic-component/dynamic-component.module';

import { NgnDynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { NgnDynamicQuestionDirective } from './dynamic-form-question/dynamic-form-question.directive';
import { NgnDynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NgnQuestionControlService } from './question-control.service';
import { NgnQuestionDropDownComponent } from './question-dropdown/question-dropdown.component';
import { NgnQuestionInputComponent } from './question-input/question-input.component';
import { NgnQuestionLayoutComponent } from './question-layout/question-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgnDynamicComponentModule,
  ],
  exports: [
    NgnDynamicFormComponent,
  ],
  declarations: [
    NgnDynamicFormQuestionComponent,
    NgnDynamicQuestionDirective,
    NgnDynamicFormComponent,
    NgnQuestionDropDownComponent,
    NgnQuestionInputComponent,
    NgnQuestionLayoutComponent,
  ],
  entryComponents: [
    NgnQuestionDropDownComponent,
    NgnQuestionInputComponent,
  ],
})
export class NgnDynamicFormModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgnDynamicFormModule,
      providers: [
        NgnQuestionControlService,
      ],
    };
  }
}
