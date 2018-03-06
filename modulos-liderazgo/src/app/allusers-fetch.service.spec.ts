import { TestBed, inject } from '@angular/core/testing';

import { AllusersFetchService } from './allusers-fetch.service';

describe('AllusersFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllusersFetchService]
    });
  });

  it('should be created', inject([AllusersFetchService], (service: AllusersFetchService) => {
    expect(service).toBeTruthy();
  }));
});
