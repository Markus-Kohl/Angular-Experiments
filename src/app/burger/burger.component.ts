import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  animations: [
    trigger('fadeInGrow', [
      transition('false => true', [
        query(':animating', [
          style({ opacity: 0 }),
          stagger('50ms', [animate('500ms', style({ opacity: 1 }))]),
        ]),
      ]),
    ]),
  ],
})
export class BurgerComponent implements OnInit {
  arc: string = 'false';

  constructor() {}

  ngOnInit(): void {}

  toggleBounce() {
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }
}
