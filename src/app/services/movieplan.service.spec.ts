import { TestBed } from '@angular/core/testing';

import { MovieplanService } from './movieplan.service';

describe('MovieplanService', () => {
  let service: MovieplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
