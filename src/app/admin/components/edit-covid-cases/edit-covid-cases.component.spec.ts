import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCovidCasesComponent } from './edit-covid-cases.component';

describe('EditCovidCasesComponent', () => {
  let component: EditCovidCasesComponent;
  let fixture: ComponentFixture<EditCovidCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCovidCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCovidCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
