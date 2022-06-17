import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssExperimentsComponent } from './scss-experiments.component';

describe('ScssExperimentsComponent', () => {
  let component: ScssExperimentsComponent;
  let fixture: ComponentFixture<ScssExperimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssExperimentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
