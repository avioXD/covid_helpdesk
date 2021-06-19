import { TestBed } from '@angular/core/testing';

import { GETDATAService } from './get-data.service';

describe('GETDATAService', () => {
  let service: GETDATAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GETDATAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
