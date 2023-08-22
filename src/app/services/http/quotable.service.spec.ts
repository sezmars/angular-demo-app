import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { QuotableService } from './quotable.service';

describe('QuotableService', () => {
  let service: QuotableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotableService],
      imports: [HttpClientTestingModule, HttpClientModule],
    });
    service = TestBed.inject(QuotableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
