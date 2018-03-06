import { TestBed, inject } from '@angular/core/testing';

import { PostExamAnswersService } from './post-exam-answers.service';

describe('PostExamAnswersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostExamAnswersService]
    });
  });

  it('should be created', inject([PostExamAnswersService], (service: PostExamAnswersService) => {
    expect(service).toBeTruthy();
  }));
});
