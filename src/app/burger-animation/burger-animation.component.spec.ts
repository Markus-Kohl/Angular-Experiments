import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerAnimationComponent } from './burger-animation.component';

describe('BurgerAnimationComponent', () => {
  let component: BurgerAnimationComponent;
  let fixture: ComponentFixture<BurgerAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BurgerAnimationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
