import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnInit,
    ChangeDetectorRef, Input
} from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {SnackbarService} from "~services/ui/snackbar.service";


export enum SnackbarType {
    Error = 'error',
    Success = 'success',
    Warning = 'warning'
}

export type TSnackbarPosition = 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

@Component({
    selector: 'app-snackbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarComponent implements OnInit {
    @Input() public closeBtnTitle: string = '❌'
    @Input() public position: TSnackbarPosition = 'bottom';


    public message$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public type: SnackbarType = SnackbarType.Success;
    public closed: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private cd: ChangeDetectorRef,
        private snackbarService: SnackbarService) {

        this.message$.subscribe(() => {
            this.cd.markForCheck()
        })
    }

    public ngOnInit(): void {
        this.snackbarService.setSnackbarComponent(this);
    }

    public close(): void {
        this.snackbarService.closeSnackbar();
        this.closed.emit();
    }
}
