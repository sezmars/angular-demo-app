import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {TabsComponent} from "~shared/components/tabs/tabs.component";
import TabComponent from "~shared/components/tabs/tab.component";

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TabsComponent, TabComponent, RouterLink],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLayoutComponent {
  constructor(public router: Router) {
  }
}
