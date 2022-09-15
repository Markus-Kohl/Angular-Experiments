import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomDecimalInput} from './custom-decimal-input.component';

describe('InputWithRestrictionComponent', () => {
  let component: CustomDecimalInput;
  let fixture: ComponentFixture<CustomDecimalInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomDecimalInput]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDecimalInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
