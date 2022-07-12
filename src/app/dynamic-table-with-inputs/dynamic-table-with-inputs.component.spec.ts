import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableWithInputsComponent } from './dynamic-table-with-inputs.component';

describe('DynamicTableWithInputsComponent', () => {
  let component: DynamicTableWithInputsComponent;
  let fixture: ComponentFixture<DynamicTableWithInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableWithInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableWithInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
