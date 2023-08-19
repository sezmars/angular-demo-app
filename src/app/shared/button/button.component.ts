import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

type Type = 'primary' | 'back'

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() type: Type = 'primary'
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
}
