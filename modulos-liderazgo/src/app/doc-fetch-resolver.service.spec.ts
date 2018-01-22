import { TestBed, inject } from '@angular/core/testing';

import { DocFetchResolverService } from './doc-fetch-resolver.service';

describe('DocFetchResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocFetchResolverService]
    });
  });

  it('should be created', inject([DocFetchResolverService], (service: DocFetchResolverService) => {
    expect(service).toBeTruthy();
  }));
});
