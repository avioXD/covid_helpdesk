import { TestBed } from '@angular/core/testing';

import { EditHospitalsService } from './edit-hospitals.service';

describe('EditHospitalsService', () => {
  let service: EditHospitalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditHospitalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
