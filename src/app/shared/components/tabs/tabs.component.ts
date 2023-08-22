import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import { Router } from '@angular/router';

import TabComponent from '~shared/components/tabs/tab.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentInit {
  @Output() public activeTab: EventEmitter<string> = new EventEmitter<string>();
  @ContentChildren(TabComponent) public tabs!: QueryList<TabComponent>;

  constructor(private router: Router) {}

  public async ngAfterContentInit(): Promise<void> {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      await this.selectTab(this.tabs.first);
    }
  }

  public async selectTab(tab: TabComponent): Promise<void> {
    if (tab) {
      this.tabs.toArray().forEach(tab => (tab.active = false));
      tab.active = true;
      if (tab.tabNavigate) {
        await this.router.navigate([tab.tabNavigate]);
      }
    }
  }
}
