import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IUser} from "../../interfaces/user";

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() user!: Partial<IUser>;
  @Input() index!: Number;
}
