import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgnNotificationService } from './notification.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class NgnNotificationModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgnNotificationModule,
      providers: [
        NgnNotificationService,
      ],
    };
  }
}
