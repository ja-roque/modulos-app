import { TestBed, inject } from '@angular/core/testing';

import { DocfetchService } from './docfetch.service';

describe('DocfetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocfetchService]
    });
  });

  it('should be created', inject([DocfetchService], (service: DocfetchService) => {
    expect(service).toBeTruthy();
  }));
});
