import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateCandidateComponent } from './add-or-update-candidate.component';

describe('AddOrUpdateCandidateComponent', () => {
  let component: AddOrUpdateCandidateComponent;
  let fixture: ComponentFixture<AddOrUpdateCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdateCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
