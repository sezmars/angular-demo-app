import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {TooltipComponent} from './tooltip.component';

describe('TooltipComponent', () => {
    let component: TooltipComponent;
    let fixture: ComponentFixture<TooltipComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule]
        });
        fixture = TestBed.createComponent(TooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
