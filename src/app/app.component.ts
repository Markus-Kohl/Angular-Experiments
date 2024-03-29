import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DisplayMode, ValdemortConfig } from 'ngx-valdemort';
import { EinrichtungenComponent } from './cards/einrichtungen/einrichtungen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'angular-experiments';
  @ViewChild(EinrichtungenComponent, { static: false })
  einrichtungenComponent!: EinrichtungenComponent;

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private config: ValdemortConfig
  ) {
    config.displayMode = DisplayMode.ONE;
    config.shouldDisplayErrors = () => true;
    this.formGroup = this.formBuilder.group(
      {
        email: [],
        cost: []
      }, {updateOn: 'submit'}
    )
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.formGroup = this.formBuilder.group({
    //   einrichtung: this.einrichtungenComponent.formGroup,
    // });
  }

  ngAfterContentInit(): void {}

  ausgabe(): void {
    console.log('form: ', this.formGroup.value);
  }

  get foods(): string[] {
    return ['pizza', 'burger'];
  }
}
