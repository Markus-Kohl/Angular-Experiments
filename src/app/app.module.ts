import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponentComponent } from './app-component/app-component.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CardComponent } from './cards/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { EinrichtungenComponent } from './cards/einrichtungen/einrichtungen.component';
import { CardContentComponent } from './cards/card-content/card-content.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ValidationDisplayComponent } from './validation-display/validation-display.component';
import { ValidationDisplayDirective } from './directives/validation-display.directive';
import { NGX_VALIDATION_MESSAGES_KEY } from './util/validation-message-injection-key';
import { VALIDATION_MESSAGES } from './util/validation-messages';
import { MatInputCommiefiedDirective } from './directives/mat-input-commiefied.directive';
import { MyInputComponent } from './my-input/my-input.component';
import { CurrencyFormatterDirective } from './directives/currency-formatter.directive';
import { MaterialAutocompleteComponent } from './material-autocomplete/material-autocomplete.component';
import { AppOptionComponent } from './material-autocomplete/app-option/app-option.component';
import { AutocompleteContentDirective } from './material-autocomplete/autocomplete-content.directive';
import { AutocompleteDirective } from './material-autocomplete/autocomplete.directive';
import { FilterPipe } from './material-autocomplete/filter.pipe';
import { AutocompleteComponent } from './material-autocomplete/autocomplete/autocomplete.component';
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { RxJsSchedulersComponent } from './rx-js-schedulers/rx-js-schedulers.component';
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/de-at';
import { SocialNumberPipe } from './shared/pipes/social-number.pipe';
import { TableComponent } from './table/table.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { BurgerAnimationComponent } from './burger-animation/burger-animation.component';
import { MatButtonModule } from '@angular/material/button';
import { BurgerComponent } from './burger/burger.component';

registerLocaleData(localeDeAt);
@NgModule({
  declarations: [
    AppComponent,
    AppComponentComponent,
    CardComponent,
    EinrichtungenComponent,
    CardContentComponent,
    ValidationDisplayComponent,
    ValidationDisplayDirective,
    MatInputCommiefiedDirective,
    MyInputComponent,
    CurrencyFormatterDirective,
    MaterialAutocompleteComponent,
    AppOptionComponent,
    AutocompleteContentDirective,
    AutocompleteDirective,
    FilterPipe,
    AutocompleteComponent,
    CurrencyInputComponent,
    RxJsSchedulersComponent,
    SocialNumberPipe,
    TableComponent,
    BurgerAnimationComponent,
    BurgerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: NGX_VALIDATION_MESSAGES_KEY,
      useValue: {
        ...VALIDATION_MESSAGES,
      },
    },
    { provide: LOCALE_ID, useValue: 'de-at' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
