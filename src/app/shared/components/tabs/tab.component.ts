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
  @Input() public tabTitle!: string;
  @Input() public tabNavigate!: string;
  @Input() public active: boolean = false;
}
