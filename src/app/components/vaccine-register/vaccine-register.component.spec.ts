import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineRegisterComponent } from './vaccine-register.component';

describe('VaccineRegisterComponent', () => {
  let component: VaccineRegisterComponent;
  let fixture: ComponentFixture<VaccineRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
