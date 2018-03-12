import { TestBed, inject } from '@angular/core/testing';

import { TestFetchService } from './test-fetch.service';

describe('TestFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestFetchService]
    });
  });

  it('should be created', inject([TestFetchService], (service: TestFetchService) => {
    expect(service).toBeTruthy();
  }));
});
