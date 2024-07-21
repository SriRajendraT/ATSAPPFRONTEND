import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateRequirementComponent } from './add-or-update-requirement.component';

describe('AddOrUpdateRequirementComponent', () => {
  let component: AddOrUpdateRequirementComponent;
  let fixture: ComponentFixture<AddOrUpdateRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdateRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
