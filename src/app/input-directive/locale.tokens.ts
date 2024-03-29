import { InjectionToken } from '@angular/core';

export const NUMERIC_INPUT_LOCALE: InjectionToken<string | string[]> = new InjectionToken<string | string[]>(
  'NUMERIC_INPUT_LOCALE'
);

export const NUMERIC_DISPLAY_INPUT_LOCALE: InjectionToken<string | string[]> = new InjectionToken<string | string[]>(
  'NUMERIC_DISPLAY_INPUT_LOCALE'
);
