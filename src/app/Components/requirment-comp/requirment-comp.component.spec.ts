import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirmentCompComponent } from './requirment-comp.component';

describe('RequirmentCompComponent', () => {
  let component: RequirmentCompComponent;
  let fixture: ComponentFixture<RequirmentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirmentCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirmentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
