import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {fadeInOut} from "~shared/animations";
import {TooltipPosition, TooltipTheme} from "~shared/components/tooltip/tooltip.enums";

@Component({
    selector: 'app-tooltip',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInOut]
})
export class TooltipComponent {
    public position: TooltipPosition = TooltipPosition.DEFAULT;
    public theme: TooltipTheme = TooltipTheme.DEFAULT;
    public tooltip: string = '';
    public left: number = 0;
    public top: number = 0;
    public visible: boolean = false;
}
