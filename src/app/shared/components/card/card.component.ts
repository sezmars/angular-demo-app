import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

import { IUser } from '~interfaces/user';
import { cardFlip } from '~shared/animations';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [CommonModule, NgOptimizedImage],
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [cardFlip],
})
export class CardComponent {
  @Input() public user!: Partial<IUser>;
  @Input() public index!: number;
  public cardAnimationState: string = 'default';

  constructor(private cd: ChangeDetectorRef) {}

  public toggleCardAnimation(): void {
    this.cardAnimationState =
      this.cardAnimationState === 'default' ? 'flipped' : 'default';
    setTimeout(() => this.resetCardAnimation(), 500);
  }

  public resetCardAnimation(): void {
    this.cardAnimationState = 'default';
    this.cd.markForCheck();
  }
}
