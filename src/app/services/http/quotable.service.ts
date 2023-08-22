import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '~environments/environment';

@Injectable()
export class QuotableService {
  constructor(private http: HttpClient) {}

  public getRandomQuote(): Observable<Partial<{ content: string }>> {
    return this.http.get<Partial<{ content: string }>>(
      `${environment.randomQuotableApi}`
    );
  }
}
