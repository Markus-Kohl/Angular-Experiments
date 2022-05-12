import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsSchedulersComponent } from './rx-js-schedulers.component';

describe('RxJsSchedulersComponent', () => {
  let component: RxJsSchedulersComponent;
  let fixture: ComponentFixture<RxJsSchedulersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsSchedulersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJsSchedulersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
