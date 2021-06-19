import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsfeedComponent } from './edit-newsfeed.component';

describe('EditNewsfeedComponent', () => {
  let component: EditNewsfeedComponent;
  let fixture: ComponentFixture<EditNewsfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewsfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
