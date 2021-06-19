import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVolunteerListComponent } from './home-volunteer-list.component';

describe('HomeVolunteerListComponent', () => {
  let component: HomeVolunteerListComponent;
  let fixture: ComponentFixture<HomeVolunteerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVolunteerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVolunteerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
