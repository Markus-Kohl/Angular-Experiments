import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valdemort',
  templateUrl: './valdemort.component.html',
  styleUrls: ['./valdemort.component.scss'],
})
export class ValdemortComponent implements OnInit {
  form: FormGroup;
  constructor(private fomrBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fomrBuilder.group({
      email: ['markus.kohl@gmail.com', [Validators.required, Validators.email]],
      age: [55, [Validators.required]],
    });
  }

  submit(): void {}

  reset(): void {
    this.form.reset();
  }
}
