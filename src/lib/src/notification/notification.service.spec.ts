import { TestBed, inject } from '@angular/core/testing';

import { NgnNotificationService } from './notification.service';

describe('NgnNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgnNotificationService]
    });
  });

  it('should create service', inject([NgnNotificationService], (service: NgnNotificationService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 42 from getMeaning', inject([NgnNotificationService], (service: NgnNotificationService) => {
    expect(() => service.log('message')).not.toThrow();
  }));
});