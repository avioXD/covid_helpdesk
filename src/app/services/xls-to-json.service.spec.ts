import { TestBed } from '@angular/core/testing';

import { XlsToJsonService } from './xls-to-json.service';

describe('XlsToJsonService', () => {
  let service: XlsToJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XlsToJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
