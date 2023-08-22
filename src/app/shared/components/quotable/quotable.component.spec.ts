import {HttpClientTestingModule} from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotableComponent } from './quotable.component';


describe('QuotableComponent', () => {
  let component: QuotableComponent;
  let fixture: ComponentFixture<QuotableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(QuotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
