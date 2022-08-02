import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValdemortComponent } from './valdemort.component';

describe('ValdemortComponent', () => {
  let component: ValdemortComponent;
  let fixture: ComponentFixture<ValdemortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValdemortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValdemortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
