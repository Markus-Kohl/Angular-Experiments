import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-final-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  control: FormControl;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.control = this.formBuilder.control('One');
  }
}
