import { TestBed, inject } from '@angular/core/testing';

import { BibliografiaFetchService } from './bibliografia-fetch.service';

describe('BibliografiaFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibliografiaFetchService]
    });
  });

  it('should be created', inject([BibliografiaFetchService], (service: BibliografiaFetchService) => {
    expect(service).toBeTruthy();
  }));
});
