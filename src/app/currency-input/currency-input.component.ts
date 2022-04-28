import { Component, OnInit } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      number: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.formGroup.get('number')?.valueChanges.subscribe((value: number) => {
      console.log('number: ', value);
      console.log('number: ', typeof value);
    });
  }

  get number(): FormControl {
    return this.formGroup.get('number') as FormControl;
  }
}
