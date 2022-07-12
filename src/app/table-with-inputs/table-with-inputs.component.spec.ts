import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithInputsComponent } from './table-with-inputs.component';

describe('TableWithInputsComponent', () => {
  let component: TableWithInputsComponent;
  let fixture: ComponentFixture<TableWithInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
