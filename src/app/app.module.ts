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
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BurgerComponent } from './burger-animation/burger/burger.component';
import { MainFormComponent } from './reactive-forms/main-form/main-form.component';
import { AddressComponent } from './reactive-forms/address/address.component';
import { BasicInfoComponent } from './reactive-forms/basic-info/basic-info.component';
import { AddressTableComponent } from './reactive-forms/address-table/address-table.component';
import { AddressCardsComponent } from './reactive-forms/address-cards/address-cards.component';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MoveDirective } from './burger-animation/animation-directives/move.directive';
import { TouchScaleDirective } from './burger-animation/animation-directives/touch-scale.directive';
import { ScssExperimentsComponent } from './scss-experiments/scss-experiments.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { PeriodicTableComponent } from './dynamic-table/periodic-table/periodic-table.component';
import { SortingTableDirective } from './dynamic-table/sorting-table.directive';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ClearDirective } from './auto-complete/clear.directive';
import { TableWithInputsComponent } from './table-with-inputs/table-with-inputs.component';
import { ValdemortComponent } from './valdemort/valdemort.component';
import { ValdemortModule } from 'ngx-valdemort';
import { DefaultValidationErrors } from 'ngx-valdemort/lib/default-validation-errors.service';
import { UpdateOnOptionsComponent } from './update-on-options/update-on-options.component';
import { UpdateOnBlurComponent } from './update-on-options/update-on-blur/update-on-blur.component';
import { UpdateOnSubmitComponent } from './update-on-options/update-on-submit/update-on-submit.component';
import { UpdateOnChangeComponent } from './update-on-options/update-on-change/update-on-change.component';
import { CustomInput } from './custom-input/custom-input.component';
import { FocusInputComponent } from './directive-to-focus-on-invalid-input/focus-input/focus-input.component';
import { FocusInvalidInputDirective } from './directive-to-focus-on-invalid-input/focus-invalid-input.directive';
import { GenericInputComponent } from './reusable input/generic-input/generic-input.component';
import { MoveableButtonComponent } from './moveable-button/moveable-button.component';
import { MoveAwayDirective } from './moveable-button/move-away.directive';
import {NumericInputModule} from "./custom-input/input-directive/numeric-input.module";
import {NUMERIC_DISPLAY_INPUT_LOCALE, NUMERIC_INPUT_LOCALE } from './custom-input/input-directive/locale.tokens';

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
    TouchScaleDirective,
    BurgerComponent,
    MoveDirective,
    MainFormComponent,
    AddressComponent,
    BasicInfoComponent,
    AddressTableComponent,
    AddressCardsComponent,
    UploadComponent,
    ScssExperimentsComponent,
    DynamicTableComponent,
    PeriodicTableComponent,
    SortingTableDirective,
    AutoCompleteComponent,
    ClearDirective,
    TableWithInputsComponent,
    ValdemortComponent,
    UpdateOnOptionsComponent,
    UpdateOnBlurComponent,
    UpdateOnSubmitComponent,
    UpdateOnChangeComponent,
    CustomInput,
    FocusInputComponent,
    FocusInvalidInputDirective,
    GenericInputComponent,
    MoveableButtonComponent,
    MoveAwayDirective,
  ],
  imports: [
    NumericInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    MatIconModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    ValdemortModule,
  ],
  providers: [
    {
      provide: NGX_VALIDATION_MESSAGES_KEY,
      useValue: {
        ...VALIDATION_MESSAGES,
      },
    },
    { provide: LOCALE_ID, useValue: 'en' },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
    {
      provide: NUMERIC_INPUT_LOCALE,
      useValue: 'en-CA'
    },
    {
      provide: NUMERIC_DISPLAY_INPUT_LOCALE,
      useValue: 'de-AT'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
