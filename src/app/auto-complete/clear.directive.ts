import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

export interface User {
  name: string;
}
@Directive({
  selector: '[appClear]',
})
export class ClearDirective implements OnInit {
  @Input() options: User[];
  @Input() filteredOptions: Observable<User[]>;
  @Input() control: FormControl;
  oldValue = '';
  selectedValue = '';
  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => {
        console.log('valuechange');
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  @HostListener('opened')
  opened() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => {
        console.log('valuechange');
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  @HostListener('focus')
  onFocus() {
    console.log('focus');
    //this.oldValue = this.control?.value;
  }

  @HostListener('blur')
  onBlur() {}

  @HostListener('optionSelected', ['$event'])
  optionSelected(event: MatAutocompleteSelectedEvent) {}
}
