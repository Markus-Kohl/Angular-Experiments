import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export interface MainForm {
  basicInfo: {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
  };
  address: {
    street: string;
    number: number;
    postal: number;
    company: string;
  };
}
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnInit {
  userForm!: FormGroup;
  @Output() formDataEvent: EventEmitter<MainForm> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [],
        lastName: [],
        email: [],
        age: [],
      }),
      address: this.fb.group({
        street: [],
        number: [],
        postal: [],
        company: [],
      }),
    });
    //this.userForm.disable();
  }

  onButtonClick(): void {
    this.formDataEvent.emit(this.userForm.value);
  }
}
