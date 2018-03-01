import { TestBed, inject } from '@angular/core/testing';

import { UserreportfetchService } from './userreportfetch.service';

describe('UserreportfetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserreportfetchService]
    });
  });

  it('should be created', inject([UserreportfetchService], (service: UserreportfetchService) => {
    expect(service).toBeTruthy();
  }));
});
