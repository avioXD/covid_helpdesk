import { TestBed } from '@angular/core/testing';

import { EditCovidCasesService } from './edit-covid-cases.service';

describe('EditCovidCasesService', () => {
  let service: EditCovidCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCovidCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
