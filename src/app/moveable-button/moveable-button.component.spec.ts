import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveableButtonComponent } from './moveable-button.component';

describe('MoveableButtonComponent', () => {
  let component: MoveableButtonComponent;
  let fixture: ComponentFixture<MoveableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveableButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
