import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygensComponent } from './oxygens.component';

describe('OxygensComponent', () => {
  let component: OxygensComponent;
  let fixture: ComponentFixture<OxygensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxygensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
