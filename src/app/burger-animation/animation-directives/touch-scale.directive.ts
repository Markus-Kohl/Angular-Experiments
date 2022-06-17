import {
  animate,
  AnimationBuilder,
  AnimationMetadata,
  AnimationPlayer,
  style,
} from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appTouchScale]',
})
export class TouchScaleDirective implements OnInit {
  private element: ElementRef;
  private currentAnimation: any;
  private player!: AnimationPlayer;

  @Input() scale: number = 1;
  constructor(private el: ElementRef, private builder: AnimationBuilder) {
    this.element = el;
  }

  ngOnInit() {}

  @HostListener('mouseover')
  mouseover() {
    this.playAnimation(this.getScaleOutAnimation());
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.playAnimation(this.getScaleInAnimation());
  }

  private playAnimation(animationMetaData: AnimationMetadata[]): void {
    const animation = this.builder.build(animationMetaData);
    const player = animation.create(this.el.nativeElement);
    player.play();
  }

  private getScaleInAnimation(): AnimationMetadata[] {
    return [
      animate('400ms ease-in', style({ transform: 'scale(1)', opacity: 1 })),
    ];
  }

  private getScaleOutAnimation(): AnimationMetadata[] {
    let scale = `scale(${this.scale})`;
    return [animate('400ms ease-in', style({ transform: scale, opacity: 1 }))];
  }
}
