import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployercompanyCompComponent } from './employercompany-comp.component';

describe('EmployercompanyCompComponent', () => {
  let component: EmployercompanyCompComponent;
  let fixture: ComponentFixture<EmployercompanyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployercompanyCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployercompanyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
