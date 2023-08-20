import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-viewed-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-viewed-list.component.html',
  styleUrls: ['./user-viewed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserViewedListComponent {
}
