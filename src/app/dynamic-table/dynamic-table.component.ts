import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {Sort} from '@angular/material/sort';
import {MatColumnDef, MatFooterRowDef, MatTable, MatTableDataSource,} from '@angular/material/table';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent<T>
  implements AfterViewInit, OnInit, AfterContentInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable, {static: true}) table: MatTable<T>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
  @ViewChild(MatFooterRowDef, {static: true}) footerDef: MatFooterRowDef;
  @Input() data: T[];
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();
  @Input() headers: string[];
  @Input() showFooter: boolean = false;
  @Input() showFilter: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  // after the <ng-content> has been initialized, the column definitions are available.
  // All that's left is to add them to the table ourselves:
  ngAfterContentInit() {
    this.columnDefs.forEach((columnDef) => this.table.addColumnDef(columnDef));
  }

  sortData(sort: Sort) {
    this.dataSource.sort;
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
    } else {
      this.dataSource.data = data.sort((a, b) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event?.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  }

  clear(input: HTMLInputElement): void {
    input.value = '';
  }
}
