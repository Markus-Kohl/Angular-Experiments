import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnOptionsComponent } from './update-on-options.component';

describe('UpdateOnOptionsComponent', () => {
  let component: UpdateOnOptionsComponent;
  let fixture: ComponentFixture<UpdateOnOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
