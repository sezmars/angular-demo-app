import {
  ApplicationRef,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';

import { TooltipComponent } from '~shared/components/tooltip/tooltip.component';
import {
  TooltipPosition,
  TooltipTheme,
} from '~shared/components/tooltip/tooltip.enums';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective implements OnDestroy {
  @Input() public tooltip: string = '';
  @Input() public position: TooltipPosition = TooltipPosition.DEFAULT;
  @Input() public theme: TooltipTheme = TooltipTheme.DEFAULT;
  @Input() public showDelay: number = 0;
  @Input() public hideDelay: number = 0;

  private componentRef: ComponentRef<TooltipComponent> | null = null;
  private showTimeout?: number;
  private hideTimeout?: number;
  private touchTimeout?: number;

  constructor(
    private injector: Injector,
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.initializeTooltip();
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.setHideTooltipTimeout();
  }

  @HostListener('mousemove', ['$event'])
  public onMouseMove($event: MouseEvent): void {
    if (
      this.componentRef !== null &&
      this.position === TooltipPosition.DYNAMIC
    ) {
      this.componentRef.instance.left = $event.clientX;
      this.componentRef.instance.top = $event.clientY;
      this.componentRef.instance.tooltip = this.tooltip;
    }
  }

  @HostListener('touchstart', ['$event'])
  public onTouchStart($event: TouchEvent): void {
    $event.preventDefault();
    window.clearTimeout(this.touchTimeout);
    this.touchTimeout = window.setTimeout(
      this.initializeTooltip.bind(this),
      500
    );
  }

  @HostListener('touchend')
  public onTouchEnd(): void {
    this.setHideTooltipTimeout();
  }

  private initializeTooltip(): void {
    if (this.componentRef === null) {
      window.clearInterval(this.hideDelay);

      this.componentRef = this.viewContainerRef.createComponent(
        TooltipComponent,
        { injector: this.injector }
      );

      const [tooltipDOMElement] = (
        this.componentRef.hostView as EmbeddedViewRef<TooltipComponent>
      ).rootNodes;

      this.setTooltipComponentProperties();

      document.body.appendChild(tooltipDOMElement);
      this.showTimeout = window.setTimeout(
        this.showTooltip.bind(this),
        this.showDelay
      );
    }
  }

  private setTooltipComponentProperties(): void {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.position = this.position;
      this.componentRef.instance.theme = this.theme;

      const { left, right, top, bottom } =
        this.elementRef.nativeElement.getBoundingClientRect();

      switch (this.position) {
        case TooltipPosition.BELOW: {
          this.componentRef.instance.left = Math.round(
            (right - left) / 2 + left
          );
          this.componentRef.instance.top = Math.round(bottom);
          break;
        }
        case TooltipPosition.ABOVE: {
          this.componentRef.instance.left = Math.round(
            (right - left) / 2 + left
          );
          this.componentRef.instance.top = Math.round(top);
          break;
        }
        case TooltipPosition.RIGHT: {
          this.componentRef.instance.left = Math.round(right);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        case TooltipPosition.LEFT: {
          this.componentRef.instance.left = Math.round(left);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  private showTooltip(): void {
    if (this.componentRef !== null) {
      this.componentRef.instance.visible = true;
    }
  }

  private setHideTooltipTimeout(): void {
    this.hideTimeout = window.setTimeout(
      this.destroy.bind(this),
      this.hideDelay
    );
  }

  public ngOnDestroy(): void {
    this.destroy();
  }

  public destroy(): void {
    if (this.componentRef !== null) {
      window.clearInterval(this.showTimeout);
      window.clearInterval(this.hideDelay);
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
