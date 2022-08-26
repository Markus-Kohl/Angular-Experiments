import {Component, ElementRef, Input, OnInit, Self, ViewChild} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, NgControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {Validator} from "./validator";

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
  providers: []
})
export class GenericInputComponent implements ControlValueAccessor, Validator {
  @ViewChild('input') input: ElementRef;

  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  disabled: unknown;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control?.validator ? [control.validator] : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control?.setValidators(validators);
    control?.updateValueAndValidity();
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }

  onChange(event: unknown) {}

  onTouched() {}

  validate(c: AbstractControl): ValidationErrors | null {
    const validators:ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    return validators;
  }

}
