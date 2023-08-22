import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('400ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('400ms', style({ opacity: 0 }))]),
]);

export const cardFlip = trigger('cardFlip', [
  state('default', style({ transform: 'none' })),
  state('flipped', style({ transform: 'rotateY(180deg)' })),
  transition('default <=> flipped', animate('0.4s ease-in-out')),
]);
