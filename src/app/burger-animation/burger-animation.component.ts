import { Component, OnInit } from '@angular/core';
import {
  shakeItAnimation,
  dimAnimation,
  collapseAnimation,
  rotateAnimation,
} from './animations';

@Component({
  selector: 'app-burger-animation',
  templateUrl: './burger-animation.component.html',
  styleUrls: ['./burger-animation.component.scss'],
  animations: [
    collapseAnimation,
    shakeItAnimation,
    dimAnimation,
    rotateAnimation,
  ],
})
export class BurgerAnimationComponent implements OnInit {
  arc: string = 'false';
  shake: string = 'shakestart';
  display: boolean = false;
  state = 'default';
  isMoving = false;
  direction = '';
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

  rotateBurger() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  moveBurger(direction: string) {
    this.isMoving = true;
    this.direction = direction;
  }
}
