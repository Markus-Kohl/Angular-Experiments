import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { formatString } from '../util/format-string';
import { NGX_VALIDATION_MESSAGES_KEY } from '../util/validation-message-injection-key';
import { VALIDATION_MESSAGES } from '../util/validation-messages';

@Directive({
  selector: '[ngServeValidationDisplay]',
})
export class ValidationDisplayDirective {
  @Input('ngServeValidationDisplay') control!: FormControl;
  @Input() fieldName!: string;

  public errorMessage$!: Subscription;

  constructor(
    private element: ElementRef,
    @Inject(NGX_VALIDATION_MESSAGES_KEY) private messages = VALIDATION_MESSAGES
  ) {}

  public ngOnInit(): void {
    if (!this.control) {
      return;
    }

    this.errorMessage$ = this.control.valueChanges
      .pipe(
        debounceTime(100),
        map(() => {
          const { dirty, invalid, touched } = this.control;
          return (dirty || touched) && invalid ? this._getErrorMessage() : '';
        })
      )
      .subscribe((message) => {
        // const { style, innerText } = this.element.nativeElement;
        this.element.nativeElement.innerText = message || '';
      });
  }

  public ngOnDestroy(): void {
    if (this.errorMessage$) {
      this.errorMessage$.unsubscribe();
    }
  }

  private _getErrorMessage(): string {
    const {
      control: { errors, value },
      fieldName,
      messages,
    } = this;

    if (!errors) {
      return '';
    }

    for (const key in messages) {
      if (!errors.hasOwnProperty(key)) {
        continue;
      }
      const message = messages[key];

      if (!messages[key]) {
        return `No message found for ${key} validator.`;
      }

      const messageData = {
        ...errors[key],
        value,
        fieldName,
      };

      return formatString(message, messageData);
    }

    throw new Error(
      'No Error Message Found In the dictionary of error messages.'
    );
  }
}
function UntilDestroy() {
  throw new Error('Function not implemented.');
}
