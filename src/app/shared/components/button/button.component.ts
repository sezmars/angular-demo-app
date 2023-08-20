import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

type Type = 'primary' | 'back' | 'clear'

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() type: Type = 'primary'
  @Input() hint: string = ''
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
}
