import { TestBed, inject } from '@angular/core/testing';

import { ExamfetchService } from './examfetch.service';

describe('ExamfetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamfetchService]
    });
  });

  it('should be created', inject([ExamfetchService], (service: ExamfetchService) => {
    expect(service).toBeTruthy();
  }));
});
