import {NgIf, TitleCasePipe} from "@angular/common";
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

import {IUser} from "~interfaces/user";

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [
    RouterLink,
    TitleCasePipe,
    NgIf
  ],
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() public user!: Partial<IUser>;
  @Input() public index!: number;
}
