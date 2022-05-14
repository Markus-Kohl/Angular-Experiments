import {
  animate,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const shakeItAnimation = trigger('shakeit', [
  state(
    'shakestart',
    style({
      transform: 'scale(1)',
    })
  ),
  state(
    'shakeend',
    style({
      transform: 'scale(1)',
    })
  ),
  transition(
    'shakestart => shakeend',
    animate(
      '1000ms ease-in',
      keyframes([
        style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.1 }),
        style({ transform: 'translate3d(2px, 0, 0)', offset: 0.2 }),
        style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.3 }),
        style({ transform: 'translate3d(4px, 0, 0)', offset: 0.4 }),
        style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.5 }),
        style({ transform: 'translate3d(4px, 0, 0)', offset: 0.6 }),
        style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.7 }),
        style({ transform: 'translate3d(2px, 0, 0)', offset: 0.8 }),
        style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.9 }),
      ])
    )
  ),
]);

export const dimAnimation = trigger('inOut', [
  transition('void => *', [
    query(':self', style({ opacity: 0 })),
    query(':self', animate('3000ms', style({ opacity: 1 }))),
  ]),
  transition('* => void', [animate('1000ms', style({ opacity: 0 }))]),
]);

export const collapseAnimation = trigger('collapse', [
  state('true', style({ height: '15rem' })),
  state('false', style({ height: '32rem' })),
  transition('false => true', animate(1000)),
  transition('true => false', animate(2000)),
]);

export const rotateAnimation = trigger('rotatedState', [
  state('default', style({ transform: 'rotate(0)' })),
  state('rotated', style({ transform: 'rotate(-180deg)' })),
  transition('rotated => default', animate('400ms ease-out')),
  transition('default => rotated', animate('400ms ease-in')),
]);
