import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '~environments/environment';
import { IQuotable } from '~interfaces/quotable';

@Injectable()
export class QuotableService {
  constructor(private http: HttpClient) {}

  public getRandomQuote(): Observable<IQuotable> {
    return this.http.get<IQuotable>(`${environment.randomQuotableApi}`);
  }
}
