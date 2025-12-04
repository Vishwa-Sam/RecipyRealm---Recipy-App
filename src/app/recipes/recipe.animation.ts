import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  group,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateX(-40px)' }),
        stagger(120, [
          animate(
            '900ms ease-out',
            style({ opacity: 1, transform: 'translateX(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

export const recipeDetailAnimation = trigger('recipeDetailAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-25px) scale(0.95)' }),
    animate(
      '800ms ease-out',
      style({ opacity: 1, transform: 'translateY(0) scale(1)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '700ms ease-in',
      style({ opacity: 0, transform: 'translateY(-10px) scale(0.97)' })
    ),
  ]),
]);

export const recipeFormAnimation = trigger('recipeFormAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-25px) scale(0.95)' }),
    animate(
      '800ms ease-out',
      style({ opacity: 1, transform: 'translateY(0) scale(1)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '700ms ease-in',
      style({ opacity: 0, transform: 'translateY(-10px) scale(0.97)' })
    ),
  ]),
]);

export const imageAnimation = trigger('imageAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(40px)' }),
    animate(
      '1000ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '1200ms ease-in',
      style({ opacity: 0, transform: 'translateX(-10px)' })
    ),
  ]),
]);

// for fallback text-slide down too
export const textAnimation = trigger('textAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-40px)' }),
    animate(
      '1200ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '1200ms ease-in',
      style({ opacity: 0, transform: 'translateY(-40px)' })
    ),
  ]),
]);

//for fallback fade-in right
export const imageRightAnimation = trigger('imageRightAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate(
      '1200ms ease-in-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '1200ms ease-in-out',
      style({ opacity: 0, transform: 'translateX(50px)' })
    ),
  ]),
]);

//for fallback fade-up
export const fadeUpAnimation = trigger('fadeUpAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(15px)' }),
    animate('1200ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition(':leave', [
    animate('1200ms ease', style({ opacity: 0, transform: 'translateY(15px)' })),
  ]),
]);

export const fallBackImageAnimation = trigger('fallBackImageAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-50px)' }),
    animate(
      '1200ms ease-in-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '1200ms ease-in-out',
      style({ opacity: 0, transform: 'translateX(-50px)' })
    ),
  ]),
]);
