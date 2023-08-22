import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import TabComponent from '~shared/components/tabs/tab.component';
import { TabsComponent } from '~shared/components/tabs/tabs.component';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TabsComponent,
    TabComponent,
    RouterLink,
  ],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLayoutComponent {}
