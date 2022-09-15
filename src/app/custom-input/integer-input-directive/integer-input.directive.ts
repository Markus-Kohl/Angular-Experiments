import {Directive, ElementRef, Input, Optional} from '@angular/core';
import {fromEvent, merge, Observable, Subject} from "rxjs";
import {NgControl} from "@angular/forms";
import {map, takeUntil, tap} from "rxjs/operators";
import {DEFAULT_NUMERIC_VALUE, isAllowedKey, overrideInputType} from "../numeric-input-directive/numeric-input.utils";


@Directive({
  selector: '[integerInput]'
})
export class IntegerInputDirective {

  private readonly decimalSeparators = [];
  private readonly negativeCharacter = '-';
  private readonly destroy$ = new Subject<boolean>();
  @Input() negativeIntegerForbidden = false;
  @Input() defaultNumericValue = DEFAULT_NUMERIC_VALUE;

  constructor(
    private hostElement: ElementRef,
    @Optional() private control?: NgControl
  ) {
  }

  ngAfterViewInit(): void {
    overrideInputType(this.el);
    this.onKeyDown();
    this.onValueChange();
  }


  private setValue(value: string): void {
    if (!value) {
      this.control!.control?.patchValue(this.defaultNumericValue);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  private get el(): HTMLInputElement {
    return this.hostElement.nativeElement;
  }

  // private onKeyDown(): void {
  //   fromEvent(this.el, 'keydown')
  //     .pipe(takeUntil(this.destroy$)).subscribe((e: KeyboardEvent) =>
  //     this.checkKeyboardEvent(e)
  //   );
  // }

  private onKeyDown(): void {
    fromEvent(this.el, 'keydown')
      .pipe(takeUntil(this.destroy$)).subscribe((e: any) =>
      this.checkKeyboardEvent(e)
    );
  }


  private checkKeyboardEvent(e: KeyboardEvent) {
    this.el.setCustomValidity('');
    if (this.negativeIntegerForbidden && e.key === this.negativeCharacter) {
      e.preventDefault();
    }
    if (isAllowedKey(e, this.decimalSeparators)) {
      return;
    }
    e.preventDefault();
  }

  private onValueChange(): void {
    merge(this.onChange(), this.onDrop(), this.onPaste())
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => this.setValue(value));
  }

  private onChange(): Observable<string> {
    return fromEvent(this.el, 'change').pipe(map(() => this.el.value));
  }

  // private onPaste(): Observable<string> {
  //   return fromEvent(this.el, 'paste').pipe(
  //     tap((e: ClipboardEvent) => e.preventDefault()),
  //     map((e: ClipboardEvent) => e.clipboardData?.getData('text/plain') || '')
  //   );
  // }

  private onPaste(): Observable<string> {
    return fromEvent(this.el, 'paste').pipe(
      tap((e: any) => e.preventDefault()),
      map((e: ClipboardEvent) => e.clipboardData?.getData('text/plain') || '')
    );
  }

  // private onDrop(): Observable<string> {
  //   return fromEvent(this.el, 'drop').pipe(
  //     tap((e: DragEvent) => e.preventDefault()),
  //     map((e: DragEvent) => e.dataTransfer?.getData('text') || '')
  //   );
  // }

  private onDrop(): Observable<string> {
    return fromEvent(this.el, 'drop').pipe(
      tap((e: any) => e.preventDefault()),
      map((e: DragEvent) => e.dataTransfer?.getData('text') || '')
    );
  }


}
