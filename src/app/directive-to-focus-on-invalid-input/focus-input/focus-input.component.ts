import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, NgControl, Validators} from "@angular/forms";
import {FocusInvalidInputDirective} from "../focus-invalid-input.directive";

@Component({
  selector: 'app-focus-input',
  templateUrl: './focus-input.component.html',
  styleUrls: ['./focus-input.component.scss']
})
export class FocusInputComponent {
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    hobbies: new FormGroup({
      frontend: new FormControl('', Validators.required),
      blockchain: new FormControl('', Validators.required),
    }),
  });

  @ViewChildren(NgControl) formControls: QueryList<NgControl>;

  @ViewChild(FocusInvalidInputDirective) invalidInputDirective: FocusInvalidInputDirective;

  get hobbies() {
    return this.myForm.get('hobbies');
  }

  submit(form: FormGroup) {
   this.invalidInputDirective.check(this.formControls);
  }

}
