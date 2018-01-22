import { TestBed, inject } from '@angular/core/testing';

import { ModulefetchService } from './modulefetch.service';

describe('ModulefetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulefetchService]
    });
  });

  it('should be created', inject([ModulefetchService], (service: ModulefetchService) => {
    expect(service).toBeTruthy();
  }));
});
