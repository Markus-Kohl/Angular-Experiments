import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-validation-display',
  templateUrl: './validation-display.component.html',
  styleUrls: ['./validation-display.component.scss'],
})
export class ValidationDisplayComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['First Name', [Validators.required, Validators.min(3)]],
      lastName: ['Last Name', [Validators.required]],
    });
  }

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }
}
