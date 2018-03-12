import { TestBed, inject } from '@angular/core/testing';

import { DinamicaFetchService } from './dinamica-fetch.service';

describe('DinamicaFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinamicaFetchService]
    });
  });

  it('should be created', inject([DinamicaFetchService], (service: DinamicaFetchService) => {
    expect(service).toBeTruthy();
  }));
});
