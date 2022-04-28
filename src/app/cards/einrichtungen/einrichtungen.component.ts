import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CardContentComponent } from '../card-content/card-content.component';

@Component({
  selector: 'app-einrichtungen',
  templateUrl: './einrichtungen.component.html',
  styleUrls: ['./einrichtungen.component.scss'],
})
export class EinrichtungenComponent implements OnInit, AfterViewInit {
  creating = false;
  @ViewChild(CardContentComponent, { static: false }) cardContentComponent: CardContentComponent;
  @ViewChildren('cards') cardsContentComponent: QueryList<CardContentComponent>;
  @Input() foods: string[] = [];


  cards: Observable<string[]>;

  formGroup: FormGroup;
  formArray: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this.cards = of(cloneDeep(this.foods));

  }

  create(): void {
    this.creating = true;
    this.formGroup = this.formBuilder.group({
      createEinrichtung: [],
    });
    this.changeDetectorRef.detectChanges();
    this.formGroup.setControl(
      'createEinrichtung',
      this.cardContentComponent.createFormGroup()
    );
  }

  add(): void {
    const value = this.formGroup.get(['createEinrichtung', 'food'])?.value;
    this.creating = false;
    this.changeDetectorRef.detectChanges();
    this.cards.pipe(tap(list => list.push(value)));
  }


  ngAfterViewInit(): void {
    this.cardsContentComponent.toArray().forEach(card => console.log('card: ', card.createFormGroup()));
  }

  get food(): string {
    return 'Pizza';
  }
}


