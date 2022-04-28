import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinrichtungenComponent } from './einrichtungen.component';

describe('EinrichtungenComponent', () => {
  let component: EinrichtungenComponent;
  let fixture: ComponentFixture<EinrichtungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinrichtungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinrichtungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
