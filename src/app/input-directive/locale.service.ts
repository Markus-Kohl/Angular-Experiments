import {Inject, Injectable, Optional} from '@angular/core';
import {NUMERIC_INPUT_LOCALE} from './locale.tokens';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  constructor(@Inject(NUMERIC_INPUT_LOCALE) @Optional() private locales?: string | string[],
              @Inject(NUMERIC_INPUT_LOCALE) @Optional() private displayedLocales?: string | string[]) {
  }

  public getDecimalSeparators(): string[] {
    const locales = this.getLocales(this.locales!);
    const options: Intl.NumberFormatOptions = {useGrouping: false};
    return locales.map(locale => this.localizedToDecimalSeparator(this.localizeDecimal(1.1, locale, options)));
  }

  public getDisplayDecimalSeparators(): string[] {
    const locales = this.getLocales(this.displayedLocales!);
    const options: Intl.NumberFormatOptions = {useGrouping: false};
    return locales.map(locale => this.localizedToDecimalSeparator(this.localizeDecimal(1.1, locale, options)));
  }

  public getThousandSeparators(): string[] {
    const locales = this.getLocales(this.locales!);
    const options: Intl.NumberFormatOptions = {useGrouping: true};
    return locales.map(locale => this.localizedToThousandSeparator(this.localizeDecimal(1234.5, locale, options)));
  }

  public localizeNumber(value: number): string {
    return value?.toLocaleString(this.getLocales(this.locales!));
  }

  private localizedToDecimalSeparator(localizedParts: Intl.NumberFormatPart[]): string {
    return localizedParts?.find(part => part.type === 'decimal')!.value;
  }

  private localizedToThousandSeparator(localizedParts: Intl.NumberFormatPart[]): string {
    return localizedParts?.find(part => part.type === 'group')!.value;
  }

  private localizeDecimal(value: number, locale: string, options?: Intl.NumberFormatOptions): Intl.NumberFormatPart[] {
    return Intl.NumberFormat(locale, options)?.formatToParts(value);
  }

  private get localeFromBrowser(): string {
    return navigator.languages ? navigator.languages[0] : navigator.language;
  }

  private getLocales(locales: string | string[]): string[] {
    try {
      const supportedLocales: string[] = Intl.NumberFormat.supportedLocalesOf(locales);
      return supportedLocales;
    } catch {
      return [this.localeFromBrowser];
    }
  }

}
