import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

type Type = 'primary' | 'back' | 'clear';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public type: Type = 'primary';
  @Input() public hint: string = '';
  @Output() public btnClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();
}
