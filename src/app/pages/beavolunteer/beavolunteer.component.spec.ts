import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeavolunteerComponent } from './beavolunteer.component';

describe('BeavolunteerComponent', () => {
  let component: BeavolunteerComponent;
  let fixture: ComponentFixture<BeavolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeavolunteerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeavolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
