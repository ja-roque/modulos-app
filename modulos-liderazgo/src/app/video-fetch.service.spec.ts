import { TestBed, inject } from '@angular/core/testing';

import { VideoFetchService } from './video-fetch.service';

describe('VideoFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoFetchService]
    });
  });

  it('should be created', inject([VideoFetchService], (service: VideoFetchService) => {
    expect(service).toBeTruthy();
  }));
});
