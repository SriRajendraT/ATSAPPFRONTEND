import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationCompComponent } from './implementation-comp.component';

describe('ImplementationCompComponent', () => {
  let component: ImplementationCompComponent;
  let fixture: ComponentFixture<ImplementationCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementationCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
