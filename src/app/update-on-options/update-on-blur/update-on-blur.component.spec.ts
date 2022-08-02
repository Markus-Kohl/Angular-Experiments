import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnBlurComponent } from './update-on-blur.component';

describe('UpdateOnBlurComponent', () => {
  let component: UpdateOnBlurComponent;
  let fixture: ComponentFixture<UpdateOnBlurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnBlurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnBlurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
