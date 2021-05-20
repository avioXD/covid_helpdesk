import { TestBed } from '@angular/core/testing';

import { EditVoulenteerService } from './edit-voulenteer.service';

describe('EditVoulenteerService', () => {
  let service: EditVoulenteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditVoulenteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
