import {
  AnimationPlayer,
  AnimationBuilder,
  AnimationMetadata,
  animate,
  style,
} from '@angular/animations';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMove]',
})
export class MoveDirective {
  private element: ElementRef;
  private player!: AnimationPlayer;
  private isClicked: boolean = false;

  @Input() set move(isClicked: boolean) {
    this.isClicked = isClicked;
  }
  @Input() set direction(dir: string) {
    console.log('direction: ', dir);
    console.log('isClicked: ', this.isClicked);
    let playerAnimation!: AnimationPlayer;
    if (playerAnimation) {
      playerAnimation.destroy();
    }
    if (dir === 'reset' && this.isClicked) {
      playerAnimation = this.playAnimation([
        animate('0ms', style({ transform: 'translate(0,0)', opacity: 1 })),
      ]);
    }
    if (dir === 'left' && this.isClicked) {
      playerAnimation = this.playAnimation(this.moveAnimation(-200, 0));
    }
    if (dir === 'right' && this.isClicked) {
      playerAnimation = this.playAnimation(this.moveAnimation(200, 0));
    }
  }
  constructor(private el: ElementRef, private builder: AnimationBuilder) {
    this.element = el;
  }

  ngOnInit() {}

  private playAnimation(
    animationMetaData: AnimationMetadata[]
  ): AnimationPlayer {
    const animation = this.builder.build(animationMetaData);
    const player = animation.create(this.el.nativeElement);
    player.play();
    return player;
  }

  private resetAnimation() {
    this.builder.build;
  }

  private moveAnimation(x: number, y: number): AnimationMetadata[] {
    let translate = `translate(${x}px,${y}px)`;
    console.log('translateX: ', translate);
    return [animate('1000ms', style({ transform: translate, opacity: 1 }))];
  }
}
