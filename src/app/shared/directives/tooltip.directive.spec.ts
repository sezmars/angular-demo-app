import {ApplicationRef, Component, DebugElement, Injector, ViewContainerRef} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {TooltipDirective} from './tooltip.directive';

@Component({
    template: `
        <div appTooltip [tooltip]="tooltipText">Hover me</div>`
})
class TestComponent {
    public tooltipText: string = 'This is a tooltip';
}

describe('TooltipDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let tooltipElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ViewContainerRef]
        });
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        tooltipElement = fixture.debugElement.query(By.directive(TooltipDirective));
    });

    it('should create the tooltip directive', () => {
        const directive = new TooltipDirective(
            TestBed.inject(Injector),
            tooltipElement?.nativeElement,
            TestBed.inject(ApplicationRef),
            TestBed.inject(ViewContainerRef)
        );

        expect(directive).toBeTruthy();
    });
});
