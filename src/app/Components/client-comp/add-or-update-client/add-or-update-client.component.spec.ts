import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateClientComponent } from './add-or-update-client.component';

describe('AddOrUpdateClientComponent', () => {
  let component: AddOrUpdateClientComponent;
  let fixture: ComponentFixture<AddOrUpdateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdateClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
