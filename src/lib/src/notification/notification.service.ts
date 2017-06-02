import { Injectable } from '@angular/core';

@Injectable()
export class NgnNotificationService {

  public error(msg: string) {
    // tslint:disable-next-line:no-console
    console.error(msg);
  }

  public warn(msg: string) {
    // tslint:disable-next-line:no-console
    console.warn(msg);
  }

  public info(msg: string) {
    // tslint:disable-next-line:no-console
    console.info(msg);
  }

  public log(msg: string) {
    // tslint:disable-next-line:no-console
    console.log(msg);
  }

}
