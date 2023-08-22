import {TestBed} from '@angular/core/testing';
import {RouterLink, RouterOutlet} from "@angular/router";
import {RouterTestingModule} from '@angular/router/testing';

import {SnackbarComponent} from "~shared/components/snackbar/snackbar.component";
import {SpinnerComponent} from "~shared/components/spinner/spinner.component";

import {AppComponent} from './app.component';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            RouterLink,
            RouterOutlet,
            SpinnerComponent,
            SnackbarComponent],
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'user-weather-app'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('User Weather App');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.title')?.textContent).toContain('User Weather App');
    });
});
