import {
  ContentChild,
  Directive,
  HostListener,
  ViewChild,
} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { DynamicTableComponent } from './dynamic-table.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';

@Directive({
  selector: '[sorting]',
})
export class SortingTableDirective {
  constructor(private dynamicTable: DynamicTableComponent<unknown>) {}

  @HostListener('matSortChange', ['$event']) onSortChange(sort: Sort) {
    console.log('sort: ', this.dynamicTable);
    this.dynamicTable.sortData(sort);
    console.log('matSortChange');
  }
}
