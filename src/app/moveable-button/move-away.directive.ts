import {AfterViewInit, Directive, ElementRef, HostListener, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Directive({
  selector: '[appMoveAway]'
})
export class MoveAwayDirective{
  currentXPosition: number;
  currentYPosition: number;
  constructor(private buttonElement: ElementRef) {
  }

  @HostListener('mouseenter')
  mouseenter() {
    const {x,y} = this.buttonElement.nativeElement.getBoundingClientRect();
    this.currentYPosition = y;
    this.currentXPosition = x;
    const randX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randY = Math.floor(Math.random() * (window.innerHeight - 100));
    const css = `position: absolute;
     left: ${randX}px;
     top: ${randY}px;`;
    this.buttonElement.nativeElement.setAttribute("style", css);
  }

}
