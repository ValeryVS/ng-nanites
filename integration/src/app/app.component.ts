import { Component } from '@angular/core';
import { NgnNotificationService } from '@vvv/ng-nanites';

@Component({
  selector: 'ngn-app-integration',
  template: `
    <button (click)="sendNotification()">send notification</button>
  `,
})
export class AppComponent {

  constructor(
    private noty: NgnNotificationService,
  ) { }

  public sendNotification() {
    this.noty.log('log message');
  }

}
