import { formatNumber } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      number: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.formGroup.get('number')?.valueChanges.subscribe((value: number) => {});
  }

  get number(): FormControl {
    return this.formGroup.get('number') as FormControl;
  }

  formatInput(event: FocusEvent) {
    let value = (event.target as HTMLInputElement).value;
    value = value.replace(/[^\d,-]/g, '');
    if (!Number.isNaN(Number(value))) {
      console.log(this.locale);
      console.log(value);
      value = formatNumber(Number(value), this.locale, '.2-2');
      value = value.replace(/\s/g, '.');
      this.formGroup.patchValue({ number: value });
    }
  }
}
