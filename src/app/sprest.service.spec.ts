import { TestBed, inject } from '@angular/core/testing';

import { SprestService } from './sprest.service';

describe('SprestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SprestService]
    });
  });

  it('should be created', inject([SprestService], (service: SprestService) => {
    expect(service).toBeTruthy();
  }));
});
