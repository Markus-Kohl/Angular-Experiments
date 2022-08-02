import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnSubmitComponent } from './update-on-submit.component';

describe('UpdateOnSubmitComponent', () => {
  let component: UpdateOnSubmitComponent;
  let fixture: ComponentFixture<UpdateOnSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
