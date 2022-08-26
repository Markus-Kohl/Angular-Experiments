import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-input-with-restriction',
  templateUrl: './input-with-restriction.component.html',
  styleUrls: ['./input-with-restriction.component.scss']
})
export class InputWithRestrictionComponent implements OnInit {

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      numberFormControl: new FormControl('', {validators: [Validators.required], updateOn: 'blur'}),
    })
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {
    })
  }

  validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
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

  get numberFormControl(): FormControl {
    return this.formGroup.get('numberFormControl') as FormControl;
  }

  onKeyPress($event: any) {
    const regex = /^[1-9][0-9]\d*$/g;
    const value = ($event.currentTarget as HTMLInputElement).value
    console.log(value);
    if (!regex.test(value)) {
      $event.target.value = $event.target.value.replace(/[^0-9]/g, "");
    }
    if($event.target.value == 0){  //avoid 0
      $event.target.value = $event.target.value.replace($event.target.value,"");
    }
    if($event.target.value > 100000){//to block user enter more than 1000000
      $event.target.value = $event.target.value.replace($event.target.value,$event.target.value.slice(0,6));
    }
  }

}
