import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MainForm } from '../main-form/main-form.component';
export interface Address {
  street: string;
  number: number;
  postal: number;
  company: string;
}

const ELEMENT_DATA: Address[] = [
  { street: 'Main St. STE', number: 10, postal: 22071, company: 'PMB' },
  { street: 'Herndon va', number: 10, postal: 22001, company: 'PMB' },
  { street: 'Main St. STE', number: 11, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 12, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 22, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 33, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 44, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 55, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 66, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 77, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 88, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 99, postal: 22000, company: 'PMB' },
  { street: 'Main St. STE', number: 3, postal: 22000, company: 'PMB' },
];
@Component({
  selector: 'app-address-cards',
  templateUrl: './address-cards.component.html',
  styleUrls: ['./address-cards.component.scss'],
})
export class AddressCardsComponent implements OnInit {
  created: boolean = false;
  data: Address[] = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}

  onCreateClick(): void {
    this.created = true;
  }

  onFormDataEvent(mainForm: MainForm): void {
    this.data = [...this.data, mainForm.address];
    console.log(this.data);
  }
}
