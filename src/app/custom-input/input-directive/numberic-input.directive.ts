import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Optional, Output,} from '@angular/core';
import {NgControl} from '@angular/forms';
import {fromEvent, merge, Observable, Subject} from 'rxjs';
import {map, takeUntil, tap} from 'rxjs/operators';
import {LocaleService} from './locale.service';
import {
  DEFAULT_NUMERIC_VALUE,
  getFormattedValueAsNumber,
  getFormattedValueForDisplay,
  isAllowedKey,
  overrideInputType,
  validate,
} from './numberic-input.utils';

@Directive({
  selector: '[dlNumericInput]',
})
export class NumericInputDirective implements AfterViewInit, OnDestroy {
  @Input() minOnSubmit: number;
  @Input() maxOnSubmit: number;
  @Input() minOnSetValue: number;
  @Input() maxOnSetValue: number;
  @Input() defaultNumericValue = DEFAULT_NUMERIC_VALUE;
  @Output() localized = new EventEmitter<string>();

  private readonly decimalSeparators = this.localeService.getDecimalSeparators();
  private readonly displayDecimalSeparators = this.localeService.getDisplayDecimalSeparators();
  private readonly thousandSeparators = this.localeService.getThousandSeparators();
  private readonly destroy$ = new Subject<boolean>();

  constructor(
    private hostElement: ElementRef,
    private localeService: LocaleService,
    @Optional() private control?: NgControl
  ) {
  }

  ngAfterViewInit(): void {
    overrideInputType(this.el);
    this.onKeyDown();
    this.onFormSubmit();
    this.onValueChange();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  private setValue(value: string): void {
    const formattedValue = getFormattedValueAsNumber(value, this.decimalSeparator, this.thousandsSeparator, this.defaultNumericValue!);
    this.localized.emit(this.localeService.localizeNumber(formattedValue));
    const isValid = validate(this.el, formattedValue, this.minOnSetValue, this.maxOnSetValue);
    if (!isValid) {
      this.control?.control?.patchValue(this.defaultNumericValue);
    }
    if (this.control && isValid) {
      this.control.control?.patchValue(formattedValue);
    }
    this.el.value = getFormattedValueForDisplay(value, this.displayDecimalSeparator, this.thousandsSeparator, this.defaultNumericValue!);

  }

  private onChange(): Observable<string> {
    return fromEvent(this.el, 'change').pipe(map(() => this.el.value));
  }

  private onPaste(): Observable<string> {
    return fromEvent(this.el, 'paste').pipe(
      tap((e: any) => e.preventDefault()),
      map((e: ClipboardEvent) => e.clipboardData?.getData('text/plain') || '')
    );
  }

  private onDrop(): Observable<string> {
    return fromEvent(this.el, 'drop').pipe(
      tap((e: any) => e.preventDefault()),
      map((e: DragEvent) => e.dataTransfer?.getData('text') || '')
    );
  }

  private onKeyDown(): void {
    fromEvent(this.el, 'keydown')
      .pipe(
        takeUntil(this.destroy$),
        tap((e) => {
          this.el.setCustomValidity('');
          if (isAllowedKey(e as KeyboardEvent, this.decimalSeparators)) {
            return;
          }
          e.preventDefault();
        })
      )
      .subscribe();
  }

  private onFormSubmit(): void {
    if (this.el.form) {
      fromEvent(this.el.form, 'submit')
        .pipe(
          takeUntil(this.destroy$),
          tap((e) => {
            const formattedValue = getFormattedValueAsNumber(
              this.el.value,
              this.decimalSeparator,
              this.thousandsSeparator,
              this.defaultNumericValue!
            );
            const isValid = validate(this.el, formattedValue, this.minOnSubmit, this.maxOnSubmit);
            if (!isValid) {
              e.preventDefault();
              this.el.reportValidity();
            }
          })
        )
        .subscribe();
    }
  }

  private onValueChange(): void {
    merge(this.onChange(), this.onDrop(), this.onPaste())
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => this.setValue(value));
  }

  private get el(): HTMLInputElement {
    return this.hostElement.nativeElement;
  }

  private get decimalSeparator(): string {
    return this.decimalSeparators[0];
  }

  private get displayDecimalSeparator(): string {
    return this.displayDecimalSeparators[0];
  }

  private get thousandsSeparator(): string {
    return this.thousandSeparators[0];
  }
}
