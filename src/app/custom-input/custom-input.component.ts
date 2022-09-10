import {Component, ElementRef, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-input-with-restriction',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => CustomInput)
  }],
  host: {
    '(blur)': '_onTouched()'
  }
})
export class CustomInput implements OnInit, ControlValueAccessor, OnDestroy {
  @Input() required: boolean = false;
  @Input() minLength: number;
  @Input() maxLength: number;
  formControl = new FormControl('', {updateOn: 'blur'});
  _onTouched = () => {
  };
  onChange = (_: any) => {
  };
  disabled: boolean = false;
  onChangeSubs: Subscription[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    for (let sub of this.onChangeSubs) {
      sub.unsubscribe();
    }
  }

  registerOnChange(onChange: any): void {
    const sub = this.formControl.valueChanges.subscribe(onChange);
    this.onChangeSubs.push(sub);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  writeValue(value: any): void {
    if (value) {
      this.formControl.setValue(value, {emitEvent: false});
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }
}
