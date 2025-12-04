import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  state,
} from '@angular/animations';

export const contentFadeInOut = trigger('contentFadeInOut', [
  transition(':enter', [
    animate(
      '1500ms ease-out',
      keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0.25, offset: 0.25 }),
        style({ opacity: 0.5, offset: 0.5 }),
        style({ opacity: 0.75, offset: 0.75 }),
        style({ opacity: 1, offset: 1 }),
      ])
    ),
  ]),

  transition(':leave', [
    animate(
      '1000ms ease-in',
      keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0.5, offset: 0.5 }),
        style({ opacity: 0, offset: 1 }),
      ])
    ),
  ]),
]);

export const imageAnimation = trigger('imageAnimation', [
  state(
    'hidden',
    style({
      opacity: 0,
      transform: 'scale(0.9) translateY(60px)',
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
      transform: 'scale(1) translateY(0)',
    })
  ),
  transition('hidden => visible', [animate('1000ms ease-out')]),
]);

export const cardAnimation = trigger('cardAnimation', [
  state(
    'hidden',
    style({
      opacity: 0,
      transform: 'translateX(-120px)',
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
      transform: 'translateX(0)',
    })
  ),
  transition('hidden => visible', [animate('1100ms ease-in')]),
]);
