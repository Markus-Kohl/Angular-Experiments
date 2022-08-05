import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithRestrictionComponent } from './input-with-restriction.component';

describe('InputWithRestrictionComponent', () => {
  let component: InputWithRestrictionComponent;
  let fixture: ComponentFixture<InputWithRestrictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithRestrictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithRestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
