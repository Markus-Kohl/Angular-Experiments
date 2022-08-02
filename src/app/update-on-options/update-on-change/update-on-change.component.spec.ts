import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnChangeComponent } from './update-on-change.component';

describe('UpdateOnChangeComponent', () => {
  let component: UpdateOnChangeComponent;
  let fixture: ComponentFixture<UpdateOnChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
