import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-moveable-button',
  templateUrl: './moveable-button.component.html',
  styleUrls: ['./moveable-button.component.scss']
})
export class MoveableButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const test = () => 'test';
  }

  won() {
    alert("You won");
  }

}
