import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDivComponent } from './start-div.component';

describe('StartDivComponent', () => {
  let component: StartDivComponent;
  let fixture: ComponentFixture<StartDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
