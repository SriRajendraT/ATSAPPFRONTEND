import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCompComponent } from './candidate-comp.component';

describe('CandidateCompComponent', () => {
  let component: CandidateCompComponent;
  let fixture: ComponentFixture<CandidateCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
