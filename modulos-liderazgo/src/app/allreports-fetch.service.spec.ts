import { TestBed, inject } from '@angular/core/testing';

import { AllreportsFetchService } from './allreports-fetch.service';

describe('AllreportsFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllreportsFetchService]
    });
  });

  it('should be created', inject([AllreportsFetchService], (service: AllreportsFetchService) => {
    expect(service).toBeTruthy();
  }));
});
