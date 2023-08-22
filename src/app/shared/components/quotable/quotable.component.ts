import {CommonModule} from "@angular/common";
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Observable} from "rxjs";

import {QuotableService} from "~services/http/quotable.service";
import {ButtonComponent} from "~shared/components/button/button.component";
import {TooltipComponent} from "~shared/components/tooltip/tooltip.component";
import {TooltipPosition} from "~shared/components/tooltip/tooltip.enums";
import {TooltipDirective} from "~shared/directives/tooltip.directive";

@Component({
  selector: 'app-quotable',
  templateUrl: './quotable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TooltipComponent, ButtonComponent, TooltipDirective],
  providers: [QuotableService],
  standalone: true
})
export class QuotableComponent implements OnInit {
  public quotable$!: Observable<Partial<{ content: string}>>

  constructor(private quotableService: QuotableService) {
  }

  public ngOnInit(): void {
    this.quotable$ = this.quotableService.getRandomQuote()
  }

  protected readonly TooltipPosition: typeof TooltipPosition = TooltipPosition;
}
