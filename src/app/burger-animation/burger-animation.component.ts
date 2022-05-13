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
import {
  shakeItAnimation,
  dimAnimation,
  collapseAnimation,
} from './animations';

@Component({
  selector: 'app-burger-animation',
  templateUrl: './burger-animation.component.html',
  styleUrls: ['./burger-animation.component.scss'],
  animations: [collapseAnimation, shakeItAnimation, dimAnimation],
})
export class BurgerAnimationComponent implements OnInit {
  arc: string = 'false';
  shake: string = 'shakestart';
  display: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  collapse() {
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }

  shakeIt() {
    this.shake = this.shake === 'shakestart' ? 'shakeend' : 'shakestart';
  }

  displayBurger() {
    this.display = this.display === true ? false : true;
  }
}
