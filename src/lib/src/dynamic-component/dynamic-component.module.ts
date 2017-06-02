import { NgModule } from '@angular/core';

import { NgnDynamicComponentHostDirective } from './dynamic-component-host.directive';
import { NgnDynamicComponentWrapperComponent } from './dynamic-component-wrapper/dynamic-component-wrapper.component';

@NgModule({
  imports: [],
  exports: [
    NgnDynamicComponentWrapperComponent,
  ],
  declarations: [
    NgnDynamicComponentHostDirective,
    NgnDynamicComponentWrapperComponent,
  ],
  providers: [],
})
export class NgnDynamicComponentModule { }
