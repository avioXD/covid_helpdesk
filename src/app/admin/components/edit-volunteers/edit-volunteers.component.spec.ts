import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVolunteersComponent } from './edit-volunteers.component';

describe('EditVolunteersComponent', () => {
  let component: EditVolunteersComponent;
  let fixture: ComponentFixture<EditVolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVolunteersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
