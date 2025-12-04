import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const ingredientsUpdateAnimation = trigger('updateIngredients', [
  state(
    'fadeIn',
    style({
      opacity: 1,
      transform: 'translateX(0)',
    })
  ),
  transition('void => *', [
    animate(
      '1000ms ease-out',
      keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
          offset: 0,
          color: 'green',
        }),
        style({
          opacity: 0.5,
          transform: 'translateX(-50px)',
          offset: 0.5,
          color: 'green',
        }),
        style({
          opacity: 1,
          transform: 'translateX(-20px)',
          offset: 0.8,
          color: 'green',
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)',
          offset: 1,
        }),
      ])
    ),
  ]),
  transition('* => void', [
    animate(
      '200ms ease-in',
      style({
        color: 'red',
      })
    ),
    animate(
      '800ms ease-in',
      style({
        opacity: 0,
        transform: 'translateX(100px)',
      })
    ),
  ]),
]);

export const gifAnimation = trigger('gifAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'scale(0.9) translateY(30px)' }),
        stagger(150, [
          animate(
            '900ms ease-out',
            style({ opacity: 1, transform: 'scale(1) translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
