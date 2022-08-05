import { Component, OnInit } from '@angular/core';
import {AbstractControl, Form, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-on-blur',
  templateUrl: './update-on-blur.component.html',
  styleUrls: ['./update-on-blur.component.scss']
})
export class UpdateOnBlurComponent implements OnInit {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      emailFormControl: new FormControl('', {validators: [Validators.required, Validators.email, this.validate()], updateOn: 'blur'}),
    })
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {
    })
  }

  validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log('validator value: ', control.value);
      return null;
    }
  }

  changeValue(event: Event) {
    this.outputValue(event);
    //this.emailFormControl.setValue((event.target as HTMLInputElement).value);
  }

  updateValue(event: FocusEvent) {
    this.outputValue(event);
    //this.emailFormControl.setValue((event.target as HTMLInputElement).value);
  }

  outputValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
  }

  onSubmit() {
    console.log('submit');
  }

  get emailFormControl(): FormControl {
    return this.formGroup.get('emailFormControl') as FormControl;
  }
}
