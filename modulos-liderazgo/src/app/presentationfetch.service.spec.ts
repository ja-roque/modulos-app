import { TestBed, inject } from '@angular/core/testing';

import { PresentationfetchService } from './presentationfetch.service';

describe('PresentationfetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresentationfetchService]
    });
  });

  it('should be created', inject([PresentationfetchService], (service: PresentationfetchService) => {
    expect(service).toBeTruthy();
  }));
});
