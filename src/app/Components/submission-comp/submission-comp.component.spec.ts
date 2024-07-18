import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionCompComponent } from './submission-comp.component';

describe('SubmissionCompComponent', () => {
  let component: SubmissionCompComponent;
  let fixture: ComponentFixture<SubmissionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
