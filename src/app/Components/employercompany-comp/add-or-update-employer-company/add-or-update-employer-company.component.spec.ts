import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateEmployerCompanyComponent } from './add-or-update-employer-company.component';

describe('AddOrUpdateEmployerCompanyComponent', () => {
  let component: AddOrUpdateEmployerCompanyComponent;
  let fixture: ComponentFixture<AddOrUpdateEmployerCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdateEmployerCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateEmployerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
