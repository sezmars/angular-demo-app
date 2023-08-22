import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  ChangeDetectorRef,
  Input,
  OnDestroy,
} from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

import { SnackbarService } from '~services/ui/snackbar.service';
import { fadeInOut } from '~shared/animations';

export enum SnackbarType {
  Error = 'error',
  Success = 'success',
  Warning = 'warning',
}

export type TSnackbarPosition =
  | 'top-center'
  | 'bottom-center'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  @Input() public closeBtnTitle: string = '';
  @Input() public position: TSnackbarPosition = 'bottom-right';

  public message$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public type: SnackbarType = SnackbarType.Success;
  public closed: EventEmitter<void> = new EventEmitter<void>();

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private cd: ChangeDetectorRef,
    private snackbarService: SnackbarService
  ) {
    this.message$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cd.markForCheck();
    });
  }

  public ngOnInit(): void {
    this.snackbarService.setSnackbarComponent(this);
  }

  public close(): void {
    this.snackbarService.closeSnackbar();
    this.closed.emit();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
