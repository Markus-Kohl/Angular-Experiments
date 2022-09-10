import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInput } from './custom-input.component';

describe('InputWithRestrictionComponent', () => {
  let component: CustomInput;
  let fixture: ComponentFixture<CustomInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInput ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
