import {
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { merge } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { AppOptionComponent } from './app-option/app-option.component';
import { AutocompleteContentDirective } from './autocomplete-content.directive';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './material-autocomplete.component.html',
  styleUrls: ['./material-autocomplete.component.scss'],
  exportAs: 'appAutocomplete',
})
export class MaterialAutocompleteComponent implements OnInit {
  @ViewChild('root') rootTemplate: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective)
  content: AutocompleteContentDirective;

  @ContentChildren(AppOptionComponent) options: QueryList<AppOptionComponent>;
  constructor() {}

  ngOnInit(): void {}

  optionsClick() {
    return this.options.changes.pipe(
      switchMap((options) => {
        const clicks$ = options.map((option: any) => option.click$);
        return merge(...clicks$);
      })
    );
  }
}
