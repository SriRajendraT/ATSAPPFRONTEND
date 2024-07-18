import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerCompComponent } from './employer-comp.component';

describe('EmployerCompComponent', () => {
  let component: EmployerCompComponent;
  let fixture: ComponentFixture<EmployerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
