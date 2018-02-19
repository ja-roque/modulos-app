import { TestBed, inject } from '@angular/core/testing';

import { CheckLastModuleService } from './check-last-module.service';

describe('CheckLastModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckLastModuleService]
    });
  });

  it('should be created', inject([CheckLastModuleService], (service: CheckLastModuleService) => {
    expect(service).toBeTruthy();
  }));
});
