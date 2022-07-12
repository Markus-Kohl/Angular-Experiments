import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-table-with-inputs',
  templateUrl: './table-with-inputs.component.html',
  styleUrls: ['./table-with-inputs.component.scss'],
})
export class TableWithInputsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement>;
  formArray: FormArray;
  formGroup: FormGroup;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private formBuilder: FormBuilder) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.formGroup = this.formBuilder.group({
      elements: this.formBuilder.array(
        ELEMENT_DATA.map((element) => {
          return this.createFormGroup(element);
        })
      ),
    });
    console.log('formArray: ', this.formArray);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.data = ELEMENT_DATA;
    this.dataSource.paginator = this.paginator;
  }

  private createFormGroup(element: PeriodicElement) {
    return this.formBuilder.group({
      name: [element.name],
      position: [element.position, [Validators.required]],
    });
  }

  getValue(index: string, formControlName: string) {
    return this.formArray?.get(index)?.get(formControlName)?.value;
  }

  getFormControl(index: number, formControlName: string): FormControl {
    return this.getFormGroupAt(index)?.get(formControlName) as FormControl;
  }

  getFormGroupAt(index: number): FormGroup {
    return this.formGroup.get(`elements.${index}`) as FormGroup;
  }
  onChange(event: any, index: number, formControlName: string) {
    const formGroup = this.formGroup.get(`elements.${index}`);
    formGroup?.get(formControlName)?.patchValue(event.target.value);
  }
}
