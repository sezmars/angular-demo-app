import {Component, Input} from "@angular/core";

@Component({
  selector: "app-tab",
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .pane {
        padding: 0 1px;
      }
    `
  ],
  standalone: true,
})
export default class TabComponent {
  @Input() tabTitle!: string;
  @Input() tabNavigate!: string;
  @Input() active: boolean = false;
}
