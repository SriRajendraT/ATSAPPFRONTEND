import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateEmployerComponent } from './add-or-update-employer.component';

describe('AddOrUpdateEmployerComponent', () => {
  let component: AddOrUpdateEmployerComponent;
  let fixture: ComponentFixture<AddOrUpdateEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdateEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
