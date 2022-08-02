import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-on-submit',
  templateUrl: './update-on-submit.component.html',
  styleUrls: ['./update-on-submit.component.scss']
})
export class UpdateOnSubmitComponent implements OnInit {

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      emailFormControl: new FormControl('', {validators: [Validators.required, Validators.email, this.validate()], updateOn: 'submit'}),
    })
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {
    })
  }

  validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log('control value: ', control.value);
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
