import { TestBed } from '@angular/core/testing';

import { RegisterVolunteerService } from './register-volunteer.service';

describe('RegisterVolunteerService', () => {
  let service: RegisterVolunteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterVolunteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
