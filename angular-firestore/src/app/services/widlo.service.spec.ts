import { TestBed } from '@angular/core/testing';

import { WidloService } from './widlo.service';

describe('WidloService', () => {
  let service: WidloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
